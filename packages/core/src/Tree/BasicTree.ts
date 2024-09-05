import { TREE_NAMES_MAP } from '../shared/constants';
import { ISubtree } from '../Subtree';
import { SubtreeIdsEnum, TreeIdsEnum } from '../shared/enums';

export interface ITree {
    subtree: Map<SubtreeIdsEnum, ISubtree>,
    id: TreeIdsEnum,
    name: string;
}

export class BasicTree implements ITree {
    public subtree = new Map<SubtreeIdsEnum, ISubtree>;
    public name: string;

    constructor(
        public id: TreeIdsEnum
    ) {
        this.name = TREE_NAMES_MAP[id];
    }

    public addSubtree(subtreeId: SubtreeIdsEnum, subtreeEntity: ISubtree) {
        this.subtree.set(subtreeId, subtreeEntity)
    }
}