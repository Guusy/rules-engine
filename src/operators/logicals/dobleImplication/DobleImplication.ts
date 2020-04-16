import LogicalOperator from '../LogicalOperator';

export default class DobleImplication extends LogicalOperator {
    name = 'DobleImplication'

    evaluate(): boolean {
        const [antecedent, consequent] = this.expressions
        const antecedentEvaluation = antecedent.evaluate()
        const consequentEvaluation = consequent.evaluate()
        return (antecedentEvaluation && consequentEvaluation) || (!antecedentEvaluation && !consequentEvaluation)
    }

}