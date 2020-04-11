import Operator from "src/operator/Operator";
// tslint:disable: no-empty

type EmptyFunction = (data: any) => void
export class FakeOperatorTrue implements Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    spyInitialize: (jest.Mock | EmptyFunction)

    constructor(spyInitialize = () => { }) {
        this.spyInitialize = spyInitialize
    }
    evaluate(): boolean {
        return true
    }
    initialize(value: any): void {
        this.spyInitialize(value)
    }

}

export class FakeOperatorFalse implements Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    spyInitialize: (jest.Mock | EmptyFunction)

    constructor(spyInitialize = () => { }) {
        this.spyInitialize = spyInitialize
    }

    evaluate(): boolean {
        return false
    }
    initialize(value: any): void {
        this.spyInitialize(value)
    }

}

