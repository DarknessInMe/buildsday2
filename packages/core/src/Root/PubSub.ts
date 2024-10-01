import { 
    IChanges, 
    ISubtreeChanges,
    IChangeableSKill,
    IChangeableSubtree,
    ISkillChanges,
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
    public skill: ISkillChanges | null = null;
    public subtree: ISubtreeChanges | null = null;

    constructor(
        public points: number,
        public isInfamyBonus: boolean,
        public relatedTreeId: string | null,
        skill: IChangeableSKill | null,
        subtree: IChangeableSubtree | null,
    ) {
        this.skill = skill ? {
            id: skill.id,
            status: skill.getStatus(),
        } : null;
        this.subtree = subtree ? {
            id: subtree.id,
            wastedPoints: subtree.getWastedPoints(),
        } : null;
    }
}