import { Root as CoreRoot } from '@buildsday2/core';
import { MastermindTree } from '../Trees/MastermindTree';

export class Root extends CoreRoot {
    constructor() {
        super();

        this.setTree(new MastermindTree());
    }
}