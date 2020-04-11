import Or from "./Or";
import { FakeOperatorTrue, FakeOperatorFalse } from '../../../tests/utils';

describe('OR operation', () => {
    const equalThatReturnsTrue = new FakeOperatorTrue()
    const equalThatReturnsFalse = new FakeOperatorFalse()

    describe('when one of the expressions is true', () => {
        const operator = new Or([
            equalThatReturnsTrue,
            equalThatReturnsFalse
        ])
        it('returns true', () => {
            expect(operator.evaluate()).toBe(true);
        });
    });

    describe('when all the expressions are false', () => {
        const operator = new Or([
            equalThatReturnsFalse,
            equalThatReturnsFalse,
            equalThatReturnsFalse,
        ])
        operator.initialize()
        it('returns false', () => {
            expect(operator.evaluate()).toBe(false);
        });
    });
});