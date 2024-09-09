import { TreeIdsEnum } from '../shared/enums';
import { BasicTree } from './BasicTree';
import { MedicSubtree, ControllerSubtree, SharpshooterSubtree } from '../Subtree';

export class MastermindTree extends BasicTree {
    constructor() {
        super(TreeIdsEnum.MASTERMIND);

        const medicSubtree = new MedicSubtree();
        const controllerSubtree = new ControllerSubtree();
        const sharpshooterSubtree = new SharpshooterSubtree();

        this.addSubtree(medicSubtree.id, medicSubtree);
        this.addSubtree(controllerSubtree.id, controllerSubtree);
        this.addSubtree(sharpshooterSubtree.id, sharpshooterSubtree);
    }
}