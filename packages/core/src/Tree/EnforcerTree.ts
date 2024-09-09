import { TreeIdsEnum } from '../shared/enums';
import { BasicTree } from './BasicTree';
import { ShotgunnerSubtree, TankSubtree, AmmoSpecialistSubtree } from '../Subtree';

export class EnforcerTree extends BasicTree {
    constructor() {
        super(TreeIdsEnum.ENFORCER);

        const shotgunnerSubtree = new ShotgunnerSubtree();
        const tankSubtree = new TankSubtree();
        const ammoSpecialistSubtree = new AmmoSpecialistSubtree();

        this.addSubtree(shotgunnerSubtree.id, shotgunnerSubtree);
        this.addSubtree(tankSubtree.id, tankSubtree);
        this.addSubtree(ammoSpecialistSubtree.id, ammoSpecialistSubtree);
    }
}