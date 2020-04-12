import Operator from 'src/operator/Operator'

class And implements Operator {
    data: any;
    expressions: Operator[] = [];
    accessor!: (object: any) => any;

    constructor(expressions: Operator[]) {
        this.expressions = expressions
    }

    evaluate(): boolean {
        return this.expressions.every(expression => expression.evaluate())
    }

    initialize(data: any): void {
        this.expressions.forEach(expression => expression.initialize(data))
    }

}

export default And