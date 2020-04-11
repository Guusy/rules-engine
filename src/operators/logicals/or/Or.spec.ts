import Or from "./Or";
import { FakeOperatorTrue, FakeOperatorFalse } from '../../../tests/utils';

describe('OR operation', () => {


    describe('when one of the expressions is true', () => {
        const trueSpy = jest.fn()
        const falseSpy = jest.fn()
        const equalThatReturnsTrue = new FakeOperatorTrue(trueSpy)
        const equalThatReturnsFalse = new FakeOperatorFalse(falseSpy)
        const operator = new Or([
            equalThatReturnsTrue,
            equalThatReturnsFalse
        ])
        const data = { message: 'random data' }
        operator.initialize(data)

        it('call the initialize of expressions', () => {
            expect(trueSpy).toHaveBeenCalledWith(data);
            expect(falseSpy).toHaveBeenCalledWith(data);
        })
        it('returns true', () => {
            expect(operator.evaluate()).toBe(true);
        });


    });

    describe('when all the expressions are false', () => {
        const falseSpy = jest.fn()
        const equalThatReturnsFalse = new FakeOperatorFalse(falseSpy)
        const operator = new Or([
            equalThatReturnsFalse,
            equalThatReturnsFalse,
            equalThatReturnsFalse,
        ])
        const data = { message: 'random data' }
        operator.initialize(data)

        it('call the initialize of expressions', () => {
            expect(falseSpy).toHaveBeenCalledWith(data);
        })
        it('returns false', () => {
            expect(operator.evaluate()).toBe(false);
        });
    });
});