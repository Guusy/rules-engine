class Operator {
    name!: string;
    type!: OperatorTypes;

    evaluate(): boolean {
        throw new Error("Method not implemented.");
    }

    initialize(data: any): Operator {
        this.doInitialize(data)
        return this
    }

    doInitialize(data: any): void {
        throw new Error("Method not implemented.");
    }
}

export enum OperatorTypes {
    LOGICAL_OPERATOR = 'LOGICAL_OPERATOR',
    RELATIONAL_OPERATOR = 'RELATIONAL_OPERATOR'
}

export default Operator