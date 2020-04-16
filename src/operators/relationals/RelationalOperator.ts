import Operator, { OperatorTypes } from '../../operator/Operator';

interface RelationalOperatorConstructor {
    expectedValue: any
    accessor: (object: any) => any
}

export default class RelationalOperator extends Operator {
    accessor: (object: any) => any;
    expectedValue: any;
    currentValue: any;
    type = OperatorTypes.RELATIONAL_OPERATOR

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