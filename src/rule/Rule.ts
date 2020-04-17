import LogicalOperator from 'src/operators/logicals/LogicalOperator'

class Rule {
    description!: string
    errorMessage!:string
    predicate!: LogicalOperator
}

export default Rule