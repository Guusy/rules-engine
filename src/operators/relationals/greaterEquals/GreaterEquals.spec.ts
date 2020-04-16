import GreaterEquals from "./GreaterEquals";
import { OperatorTypes } from '../../../operator/Operator';

describe('GreaterEquals operator', () => {
    const accessor = (object: any) => object
    describe('When the value is greater than the expected ', () => {
        const operation = new GreaterEquals({ expectedValue: 2, accessor }).initialize(10)
        it('return true', () => {
            expect(operation.evaluate()).toBe(true);
        });
    });

    describe('When the value is less than expected', () => {
        const operation = new GreaterEquals({ expectedValue: 20, accessor }).initialize(10)
        it('return false', () => {
            expect(operation.evaluate()).toBe(false);
        });
    });

    describe('when the values are equals', () => {
        const operation = new GreaterEquals({ expectedValue: 40, accessor }).initialize(40)
        it('return true', () => {
            expect(operation.evaluate()).toBe(true);
        });
    });

    describe('default values', () => {
        const operator = new GreaterEquals({ expectedValue: 0 , accessor})

        it('the name is GreaterEquals', () => {
            expect(operator.name).toEqual('GreaterEquals');
        });

        it('has RELATIONAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.RELATIONAL_OPERATOR);
        });

    });
});