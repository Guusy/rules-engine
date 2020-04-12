import Operator from 'src/operator/Operator'
import And from './And'
import { FakeOperatorTrue, FakeOperatorFalse } from '../../../tests/utils';

describe('And', () => {
    const trueExpression = new FakeOperatorTrue()
    const falseExpression = new FakeOperatorFalse()
    describe('when all the expression are true', () => {
        const operation = new And([trueExpression, trueExpression])
        it('return true', () => {
            expect(operation.evaluate()).toEqual(true);
        });
    });

    describe('when there is at least one false expression', () => {
        const operation = new And([trueExpression, falseExpression])

        it('returns false',()=>{
            expect(operation.evaluate()).toEqual(false);
        })
    });

    describe('when initialize', () => {
        const spy1 = jest.fn()
        const spy2 = jest.fn()
        const fakeOperator1 = new FakeOperatorTrue(spy1)
        const fakeOperator2 = new FakeOperatorTrue(spy2)
        const implication = new And([fakeOperator1, fakeOperator2])
        const data = 'Random data'
        implication.initialize(data)
        it('call the iniatilize of the expressions', () => {
            expect(spy1).toHaveBeenCalledWith(data);
            expect(spy2).toHaveBeenCalledWith(data);
        });
    });

});