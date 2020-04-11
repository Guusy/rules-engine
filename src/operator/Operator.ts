interface Operator {
    data: any
    expressions: Operator[]
    accessor: (object: any) => any
    evaluate(): boolean
    initialize(value: any): void
}

export default Operator