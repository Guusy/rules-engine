import RelationalOperator from '../RelationalOperator'

export default class LessEquals extends RelationalOperator {

    evaluate(): boolean {
        return this.currentValue <= this.expectedValue
    }
}