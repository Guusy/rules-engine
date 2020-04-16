import Greater from "./Greater";
import { OperatorTypes } from '../../../operator/Operator';

describe('Greater operator', () => {
    const accessor = (object: any) => object
    describe('When the value is greater than the expected ', () => {
        const operation = new Greater({ expectedValue: 2, accessor }).initialize(10)
        it('return true', () => {
            expect(operation.evaluate()).toBe(true);
        });
    });

    describe('When the value is less than expected', () => {
        const operation = new Greater({ expectedValue: 20, accessor }).initialize(10)
        it('return false', () => {
            expect(operation.evaluate()).toBe(false);
        });
    });

    describe('default values', () => {
        const operator = new Greater({ expectedValue: 0 , accessor})

        it('the name is Greater', () => {
            expect(operator.name).toEqual('Greater');
        });

        it('has RELATIONAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.RELATIONAL_OPERATOR);
        });

    });
});