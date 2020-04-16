import DobleImplication from "./DobleImplication";
import { FakeOperatorTrue, FakeOperatorFalse } from '../../../tests/utils';
import { OperatorTypes } from '../../../operator/Operator';

describe('DobleImplication', () => {
    const trueExpression = new FakeOperatorTrue()
    const falseExpression = new FakeOperatorFalse()
    describe('when the first expression is true', () => {
        describe('and the second is false', () => {
            const dobleImplication = new DobleImplication([
                trueExpression,
                falseExpression
            ])
            it('return false', () => {
                expect(dobleImplication.evaluate()).toBe(false);
            });
        });
        describe('and the second is true', () => {
            const dobleImplication = new DobleImplication([
                trueExpression,
                trueExpression
            ])
            it('return true', () => {
                expect(dobleImplication.evaluate()).toBe(true);
            });
        });
    });

    describe('when the first expression is false', () => {
        describe('and the second is true', () => {
            const dobleImplication = new DobleImplication([
                falseExpression,
                trueExpression
            ])
            it('return false', () => {
                expect(dobleImplication.evaluate()).toBe(false);
            });
        });
        describe('and the second is false', () => {
            const dobleImplication = new DobleImplication([
                falseExpression,
                falseExpression
            ])
            it('return true', () => {
                expect(dobleImplication.evaluate()).toBe(true);
            });
        });
    });

    describe('when initialize', () => {
        const spy1 = jest.fn()
        const spy2 = jest.fn()
        const fakeOperator1 = new FakeOperatorTrue(spy1)
        const fakeOperator2 = new FakeOperatorTrue(spy2)
        const dobleImplication = new DobleImplication([fakeOperator1, fakeOperator2])
        const data = 'Random data'
        dobleImplication.initialize(data)
        it('call the iniatilize of the expressions', () => {
            expect(spy1).toHaveBeenCalledWith(data);
            expect(spy2).toHaveBeenCalledWith(data);
        });
    });

    describe('default values', () => {
        const operator = new DobleImplication([])

        it('the name is DobleImplication', () => {
            expect(operator.name).toEqual('DobleImplication');
        });

        it('has correct LOGICAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.LOGICAL_OPERATOR);
        });

    });

});