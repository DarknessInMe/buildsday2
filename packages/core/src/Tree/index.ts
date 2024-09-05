import { ISubtree } from '../Subtree';

export interface ITree {
    subtree: Map<string, ISubtree>,
    name: string,
}

export class Tree implements ITree {
    public subtree = new Map<string, ISubtree>;

    constructor(
        public name: string
    ) {}
}