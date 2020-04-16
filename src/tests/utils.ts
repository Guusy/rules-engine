import Operator from '../operator/Operator'
// tslint:disable: no-empty

type EmptyFunction = (data: any) => void
export class FakeOperatorTrue extends Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    spyInitialize: (jest.Mock | EmptyFunction)

    constructor(spyInitialize = () => { }) {
        super()
        this.spyInitialize = spyInitialize
    }
    evaluate(): boolean {
        return true
    }
    doInitialize(value: any): void {
        this.spyInitialize(value)
    }

}

export class FakeOperatorFalse extends Operator {
    accessor!: (object: any) => any;
    data: any;
    expressions: Operator[] = [];
    spyInitialize: (jest.Mock | EmptyFunction)

    constructor(spyInitialize = () => { }) {
        super()
        this.spyInitialize = spyInitialize
    }

    evaluate(): boolean {
        return false
    }
    doInitialize(value: any): void {
        this.spyInitialize(value)
    }

}

