import LogicalOperator from '../LogicalOperator'

class Or extends LogicalOperator {

    evaluate() {
        return this.expressions.some(expression => expression.evaluate())
    }

}

export default Or