import Less from "./Less";
import { OperatorTypes } from '../../../operator/Operator';

describe('Less operator', () => {
    const accessor = (object: any) => object

    describe('When the value is less than expected', () => {
        const operation = new Less({ expectedValue: 20, accessor }).initialize(10)
        it('return true', () => {
            expect(operation.evaluate()).toBe(true);
        });
    });

    describe('When the value is greater than the expected ', () => {
        const operation = new Less({ expectedValue: 2, accessor }).initialize(10)
        it('return false', () => {
            expect(operation.evaluate()).toBe(false);
        });
    });

    describe('default values', () => {
        const operator = new Less({ expectedValue: 0 , accessor})

        it('the name is Less', () => {
            expect(operator.name).toEqual('Less');
        });

        it('has RELATIONAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.RELATIONAL_OPERATOR);
        });

    });
});