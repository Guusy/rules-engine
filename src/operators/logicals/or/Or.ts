import LogicalOperator from '../LogicalOperator'

class Or extends LogicalOperator {
    name = 'Or'

    evaluate() {
        return this.expressions.some(expression => expression.evaluate())
    }

}

export default Or