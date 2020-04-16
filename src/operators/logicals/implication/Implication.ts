import LogicalOperator from '../LogicalOperator';

class Implication extends LogicalOperator {

    evaluate(): boolean {
        const [antecedent, consequent] = this.expressions
        return !antecedent.evaluate() || consequent.evaluate()
    }

}

export default Implication