import { Root as CoreRoot } from '@buildsday2/core';
import { 
    MastermindTree, 
    EnforcerTree, 
    TechnicianTree,
    GhostTree,
} from '../Trees';

export class Root extends CoreRoot {
    constructor() {
        super();

        this.setTree(new MastermindTree());
        this.setTree(new EnforcerTree());
        this.setTree(new TechnicianTree());
        this.setTree(new GhostTree());
    }
}