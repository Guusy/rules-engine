import LogicalOperator from '../LogicalOperator';

export default class DobleImplication extends LogicalOperator {

    evaluate(): boolean {
        const [antecedent, consequent] = this.expressions
        const antecedentEvaluation = antecedent.evaluate()
        const consequentEvaluation = consequent.evaluate()
        return (antecedentEvaluation && consequentEvaluation) || (!antecedentEvaluation && !consequentEvaluation)
    }

}