import RelationalOperator from '../RelationalOperator';

class Greater extends RelationalOperator {
    name = 'Greater'

    evaluate(): boolean {
        return this.currentValue > this.expectedValue
    }

}

export default Greater