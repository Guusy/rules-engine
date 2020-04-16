
import RelationalOperator from '../RelationalOperator';

class NotEquals extends RelationalOperator {
    name = 'NotEquals'

    evaluate(): boolean {
        return this.expectedValue !== this.currentValue
    }

}

export default NotEquals