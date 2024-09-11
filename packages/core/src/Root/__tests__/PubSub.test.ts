import { expect, test, beforeEach, vi } from 'vitest';
import { PubSub } from '../PubSub';
import { MOCKED_CHANGES } from './mocks';

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