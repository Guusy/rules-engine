import RelationalOperator from '../RelationalOperator'

export default class Less extends RelationalOperator {
    name = 'Less'

    evaluate(): boolean {
        return this.currentValue < this.expectedValue
    }
}