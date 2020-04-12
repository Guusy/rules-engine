
import Operator from '../../../operator/Operator'

interface GreaterConstructor {
    expectedValue: any
    accessor: (object: any) => any
}

class Greater implements Operator {
    data: any
    expressions: Operator[] = []
    accessor: (object: any) => any
    expectedValue: any;
    currentValue: any;

    constructor({ expectedValue, accessor }: GreaterConstructor) {
        this.expectedValue = expectedValue
        this.accessor = accessor
    }

    initialize(data: any) {
        this.currentValue = this.accessor(data)
        return this
    }

    evaluate(): boolean {
        return this.currentValue > this.expectedValue
    }

}

export default Greater