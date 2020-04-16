class Operator {

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

export default Operator