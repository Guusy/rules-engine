
import RelationalOperator from '../RelationalOperator';

class NotEquals extends RelationalOperator {

    evaluate(): boolean {
        return this.expectedValue !== this.currentValue
    }

}

export default NotEquals