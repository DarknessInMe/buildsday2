import { 
    IChanges, 
    ISubtreeChanges,
    IChangeableSKill,
    IChangeableSubtree,
    ISkillChanges 
} from './interfaces';

export type SubscriberType = (changes: IChanges) => any;

export class PubSub {
    private subscribers: SubscriberType[] = [];

    public onChange(callback: SubscriberType): () => void {
        this.subscribers.push(callback);

        return () => {
            this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
        }
    }

    public notifySubscribers(changes: IChanges) {
        this.subscribers.forEach((subscriber) => {
            subscriber(changes)
        })
    }
}

export class Changes implements IChanges {
    public skill: ISkillChanges;
    public subtree: ISubtreeChanges;

    constructor(
        public points: number,
        public isInfamyBonus: boolean,
        skill: IChangeableSKill,
        subtree: IChangeableSubtree,
    ) {
        this.skill = {
            id: skill.id,
            status: skill.getStatus(),
        };
        this.subtree = {
            id: subtree.id,
            wastedPoints: subtree.getWastedPoints(),
        }
    }
}