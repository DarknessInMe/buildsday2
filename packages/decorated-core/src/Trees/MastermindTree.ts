import { BasicTree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { MedicSubtree, ControllerSubtree, SharpshooterSubtree } from '../Subtrees';

export class MastermindTree extends BasicTree {
    constructor() {
        super(TREE_IDS_ENUM.MASTERMIND, 'Mastermind');

        this.addSubtree(new MedicSubtree());
        this.addSubtree(new ControllerSubtree());
        this.addSubtree(new SharpshooterSubtree());
    }
}