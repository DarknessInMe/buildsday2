import { expect, test, describe, beforeEach, vi } from 'vitest';
import { Changes, PubSub } from './PubSub';
import { IChangeableSKill, IChangeableSubtree } from '../shared/interfaces';

const MOCKED_CHANGEABLE_SKILL: IChangeableSKill = {
    id: 'SKILL_ID',
    getStatus: () => -1,
};
const MOCKED_CHANGEABLE_SUBTREE: IChangeableSubtree = {
    id: 'SUBTREE_ID',
    getWastedPoints: () => 0,
};
const MOCKED_CHANGES = new Changes(0, false, MOCKED_CHANGEABLE_SKILL, MOCKED_CHANGEABLE_SUBTREE);

let pubSub: PubSub;

beforeEach(() => {
    pubSub = new PubSub();
})

test('Should notify subscribers properly', () => {
    const subscriber = vi.fn();

    pubSub.onChange(subscriber);
    pubSub.notifySubscribers(MOCKED_CHANGES);

    expect(subscriber).toHaveBeenCalled()
});

test('Should unsubscribe properly', () => {
    const subscriber = vi.fn();
    const unsubscribe = pubSub.onChange(subscriber);

    unsubscribe();
    pubSub.notifySubscribers(MOCKED_CHANGES);
    expect(subscriber).not.toHaveBeenCalled()
});