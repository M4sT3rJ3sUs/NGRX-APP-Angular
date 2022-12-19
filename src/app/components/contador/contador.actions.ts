import { Action } from "@ngrx/store";
export const INCREMENTAR = "INC"
export const DECREMENTAR = "DEC"

export class IncrementarAction implements Action{
    type = INCREMENTAR;
}
export class DecrementarAction implements Action{
    type = DECREMENTAR;
}