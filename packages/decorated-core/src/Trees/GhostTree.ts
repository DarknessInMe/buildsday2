import { BasicTree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { ShinobiSubtree, ArtfulDodgerSubtree, SilentKillerSubtree } from '../Subtrees';

export class GhostTree extends BasicTree {
    constructor() {
        super(TREE_IDS_ENUM.GHOST, 'Ghost');

        this.addSubtree(new ShinobiSubtree());
        this.addSubtree(new ArtfulDodgerSubtree());
        this.addSubtree(new SilentKillerSubtree());
    }
};