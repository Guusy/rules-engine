import Implication from "./Implication";
import { FakeOperatorTrue, FakeOperatorFalse } from '../../../tests/utils';
import { OperatorTypes } from '../../../operator/Operator';

describe('Implication', () => {
    const trueExpression = new FakeOperatorTrue()
    const falseExpression = new FakeOperatorFalse()
    describe('when the first expression is true', () => {
        describe('and the second is false', () => {
            const implication = new Implication([
                trueExpression,
                falseExpression
            ])
            it('return false', () => {
                expect(implication.evaluate()).toBe(false);
            });
        });
        describe('and the second is true', () => {
            const implication = new Implication([
                trueExpression,
                trueExpression
            ])
            it('return true', () => {
                expect(implication.evaluate()).toBe(true);
            });
        });
    });

    describe('when the first expression is false', () => {
        describe('and the second is true', () => {
            const implication = new Implication([
                falseExpression,
                trueExpression
            ])
            it('return true', () => {
                expect(implication.evaluate()).toBe(true);
            });
        });
        describe('and the second is false', () => {
            const implication = new Implication([
                falseExpression,
                falseExpression
            ])
            it('return true', () => {
                expect(implication.evaluate()).toBe(true);
            });
        });
    });

    describe('when initialize', () => {
        const spy1 = jest.fn()
        const spy2 = jest.fn()
        const fakeOperator1 = new FakeOperatorTrue(spy1)
        const fakeOperator2 = new FakeOperatorTrue(spy2)
        const implication = new Implication([fakeOperator1, fakeOperator2])
        const data = 'Random data'
        implication.initialize(data)
        it('call the iniatilize of the expressions', () => {
            expect(spy1).toHaveBeenCalledWith(data);
            expect(spy2).toHaveBeenCalledWith(data);
        });
    });

    describe('default values', () => {
        const operator = new Implication([])

        it('the name is Implication', () => {
            expect(operator.name).toEqual('Implication');
        });

        it('has correct LOGICAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.LOGICAL_OPERATOR);
        });

    });
});