
import Operator from '../../../operator/Operator'

interface EqualsConstructor {
    expectedValue: any
     accessor: (object: any) => any
}
class Equals implements Operator {
    accessor!: (object: any) => any;
    expressions!: Operator[];
    data: any;
    expectedValue: any;
    currentValue: any;

    constructor({ expectedValue, accessor }: EqualsConstructor) {
        this.expectedValue = expectedValue
        this.accessor = accessor
        return this
    }

    initialize(data: any) {
        this.currentValue = this.accessor(data)
        return this
    }

    evaluate(): boolean {
        return this.expectedValue === this.currentValue
    }

}

export default Equals