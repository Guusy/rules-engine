
import RelationalOperator from '../RelationalOperator';

class Equals extends RelationalOperator {
    name = 'Equals'

    evaluate(): boolean {
        return this.expectedValue === this.currentValue
    }

}

export default Equals