import RelationalOperator from '../RelationalOperator'

export default class LessEquals extends RelationalOperator {
    name = 'LessEquals'

    evaluate(): boolean {
        return this.currentValue <= this.expectedValue
    }
}