
import RelationalOperator from '../RelationalOperator';

class Equals extends RelationalOperator {

    evaluate(): boolean {
        return this.expectedValue === this.currentValue
    }

}

export default Equals