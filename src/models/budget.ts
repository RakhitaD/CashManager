import { Income } from "./income";
import { Expense } from "./expense";

export class Budget {
    public income:Income[]=[];
    public expense:Expense[]=[];
    constructor(public budgetKey:number,public budgetName:string,public budgetFromDate:Date,public budgetToDate:Date) {
    }
}