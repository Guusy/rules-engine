import Operator from 'src/operator/Operator'

class Or implements Operator {
    accessor!: (object: any) => any
    data: any
    expressions!: Operator[]

    constructor(expressions: Operator[]) {
        this.expressions = expressions
    }

    initialize(data: any): void {
        this.expressions.forEach(expression => expression.initialize(data))
    }

    evaluate() {
        return this.expressions.some(expression => expression.evaluate())
    }
}

export default Or