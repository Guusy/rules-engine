import Operator from 'src/operator/Operator';

interface RelationalOperatorConstructor {
    expectedValue: any
    accessor: (object: any) => any
}

export default class RelationalOperator implements Operator {
    data: any;
    expressions: Operator[] = [];
    accessor: (object: any) => any;
    expectedValue: any;
    currentValue: any;

    constructor({ expectedValue, accessor }: RelationalOperatorConstructor) {
        this.expectedValue = expectedValue
        this.accessor = accessor
    }

    initialize(data: any) {
        this.currentValue = this.accessor(data)
        return this
    }

    evaluate(): boolean {
        throw new Error("Method not implemented.");
    }

}