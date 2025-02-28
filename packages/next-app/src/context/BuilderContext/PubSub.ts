import { BuilderType } from '@/shared/interfaces';
import { SubscriberType } from './typing';

export class PubSub {
	private subscribers: SubscriberType[] = [];

	constructor(private builder: BuilderType) {}

	public notify() {
		this.subscribers.forEach((subscriber) => subscriber(this.builder));
	}

	public subscribe(subscriber: SubscriberType) {
		this.subscribers.push(subscriber);

		return () => {
			this.subscribers = this.subscribers.filter((subscribed) => subscribed !== subscriber);
		};
	}
}
