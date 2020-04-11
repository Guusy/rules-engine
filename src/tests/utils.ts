import Operator from "src/operator/Operator";

export class FakeOperatorTrue implements Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    evaluate(): boolean {
        return true
    }
    initialize(value: any): void {
        // empty
     }

}

export class FakeOperatorFalse implements Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    evaluate(): boolean {
        return false
    }
    initialize(value: any): void {
        // empty
     }

}

