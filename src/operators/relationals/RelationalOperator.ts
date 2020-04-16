import Operator from '../../operator/Operator';

interface RelationalOperatorConstructor {
    expectedValue: any
    accessor: (object: any) => any
}

export default class RelationalOperator extends Operator {
    data: any;
    expressions: Operator[] = [];
    accessor: (object: any) => any;
    expectedValue: any;
    currentValue: any;

    constructor({ expectedValue, accessor }: RelationalOperatorConstructor) {
        super()
        this.expectedValue = expectedValue
        this.accessor = accessor
    }

    doInitialize(data: any): void {
        this.currentValue = this.accessor(data)
    }

    evaluate(): boolean {
        throw new Error("Method not implemented.");
    }

}