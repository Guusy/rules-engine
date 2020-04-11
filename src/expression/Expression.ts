import Operator from "src/operator/Operator";

interface Expression {
    accessor: (smth: any) => any;
    operator: Operator
    data: any;

    evaluate(): boolean

    init(data: any): void
}

export default Expression