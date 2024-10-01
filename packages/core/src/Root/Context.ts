import { IContextualComponent } from "./interfaces";
import { IGlobalContext } from "../shared/interfaces";

export class Context implements IGlobalContext {
   constructor(private component: IContextualComponent) {}

   getIsInfamyBonusActive() {
      return this.component.isInfamyBonus;
   }
}