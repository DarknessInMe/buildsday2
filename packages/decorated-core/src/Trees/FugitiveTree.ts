import { BasicTree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { GunslingerSubtree, RevenantSubtree, BrawlerSubtree } from '../Subtrees';

export class FugitiveTree extends BasicTree {
    constructor() {
        super(TREE_IDS_ENUM.FUGITIVE, 'Fugitive');

        this.addSubtree(new GunslingerSubtree());
        this.addSubtree(new RevenantSubtree());
        this.addSubtree(new BrawlerSubtree());
    }
};