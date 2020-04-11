import Operator from "src/operator/Operator";

class Implication implements Operator {
    data: any;
    expressions: Operator[];
    accessor!: (object: any) => any;

    constructor(expressions: Operator[]) {
        this.expressions = expressions
    }

    evaluate(): boolean {
        const [antecedent, consequent] = this.expressions
        return !antecedent.evaluate() || consequent.evaluate()
    }

    initialize(data: any): void {
        this.expressions.forEach(expression => expression.initialize(data))
    }

}

export default Implication