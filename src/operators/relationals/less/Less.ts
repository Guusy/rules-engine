import RelationalOperator from '../RelationalOperator'

export default class Less extends RelationalOperator {

    evaluate(): boolean {
        return this.currentValue < this.expectedValue
    }
}