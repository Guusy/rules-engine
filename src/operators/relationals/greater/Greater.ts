import RelationalOperator from '../RelationalOperator';

class Greater extends RelationalOperator {

    evaluate(): boolean {
        return this.currentValue > this.expectedValue
    }

}

export default Greater