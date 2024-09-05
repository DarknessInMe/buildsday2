import { TreeIdsEnum } from '../shared/enums';
import { BasicTree } from './BasicTree';
import { MedicSubtree } from '../Subtree/MedicSubtree';

export class MastermindTree extends BasicTree {
    constructor() {
        super(TreeIdsEnum.MASTERMIND);

        const medicSubtree = new MedicSubtree();

        this.addSubtree(medicSubtree.id, medicSubtree)
    }
}