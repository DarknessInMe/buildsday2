import { BasicTree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { EngineerSubtree, BreacherSubtree, OppressorSubtree } from '../Subtrees';

export class TechnicianTree extends BasicTree {
    constructor() {
        super(TREE_IDS_ENUM.TECHNICIAN, 'Technician');

        this.addSubtree(new EngineerSubtree());
        this.addSubtree(new BreacherSubtree());
        this.addSubtree(new OppressorSubtree());
    }
};