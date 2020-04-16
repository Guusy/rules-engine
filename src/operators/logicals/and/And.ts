import LogicalOperator from '../LogicalOperator';

class And extends LogicalOperator {

    evaluate(): boolean {
        return this.expressions.every(expression => expression.evaluate())
    }

}

export default And