import Operator from "src/operator/Operator";

export default class DobleImplication implements Operator {
    data: any;
    expressions: Operator[];
    accessor!: (object: any) => any;

    constructor(expressions: Operator[]) {
        this.expressions = expressions
    }

    evaluate(): boolean {
        const [antecedent, consequent] = this.expressions
        const antecedentEvaluation = antecedent.evaluate()
        const consequentEvaluation = consequent.evaluate()
        return (antecedentEvaluation && consequentEvaluation) || (!antecedentEvaluation && !consequentEvaluation)
    }

    initialize(data: any): void {
        this.expressions.forEach(expression => expression.initialize(data))
    }

}