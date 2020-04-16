import RelationalOperator from '../RelationalOperator';

class GreaterEquals extends RelationalOperator {
    name = 'GreaterEquals'

    evaluate(): boolean {
        return this.currentValue >= this.expectedValue
    }

}

export default GreaterEquals