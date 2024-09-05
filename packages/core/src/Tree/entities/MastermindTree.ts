import { TreeIdsEnum } from '../../shared/enums';
import { MedicSubtree } from '../../Subtree';
import { BasicTree } from '../../Tree';

const MastermindTree = new BasicTree(TreeIdsEnum.MASTERMIND);

MastermindTree.addSubtree(MedicSubtree.id, MedicSubtree)

export { MastermindTree };