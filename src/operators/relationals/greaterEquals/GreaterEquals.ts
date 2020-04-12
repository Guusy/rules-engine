import RelationalOperator from '../RelationalOperator';

class GreaterEquals extends RelationalOperator {

    evaluate(): boolean {
        return this.currentValue >= this.expectedValue
    }

}

export default GreaterEquals