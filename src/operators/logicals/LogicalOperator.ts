import Operator, { OperatorTypes } from "../../operator/Operator";

class LogicalOperator extends Operator {
    expressions: Operator[];
    type = OperatorTypes.LOGICAL_OPERATOR

    constructor(expressions: Operator[]) {
        super()
        this.expressions = expressions
    }

    doInitialize(data: any): void {
        this.expressions.forEach(expression => expression.initialize(data))
    }

}

export default LogicalOperator