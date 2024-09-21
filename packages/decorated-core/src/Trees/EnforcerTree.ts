import { BasicTree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { ShotgunnerSubtree, TankSubtree, AmmoSpecialistSubtree } from '../Subtrees';

export class EnforcerTree extends BasicTree {
    constructor() {
        super(TREE_IDS_ENUM.ENFORCER, 'Enforcer');

        this.addSubtree(new ShotgunnerSubtree());
        this.addSubtree(new TankSubtree());
        this.addSubtree(new AmmoSpecialistSubtree());
    }
};