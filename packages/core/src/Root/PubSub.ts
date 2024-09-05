import { ISkill } from 'src/Skill';
import { IChanges, ISkillChanges, ISubtreeChanges } from '../shared/interfaces';
import { ISubtree } from 'src/Subtree';

export type SubscriberType = (changes: IChanges) => any;

export class PubSub {
    private subscribers: SubscriberType[] = [];

    public onChange(callback: SubscriberType) {
        this.subscribers.push(callback);

        return () => {
            this.subscribers.filter((subscriber) => subscriber !== callback);
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
        skill: ISkill,
        subtree: ISubtree,
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