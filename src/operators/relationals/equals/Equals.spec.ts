

import Equals from './Equals'
import { OperatorTypes } from '../../../operator/Operator';

describe('Equals', () => {
    const accessor = (object: any) => object.size
    describe('when the values are equals', () => {
        const operator: Equals = new Equals({ expectedValue: 1, accessor })
        operator.initialize({ size: 1 })

        it('returns true', () => {
            expect(operator.evaluate()).toBe(true);
        });

    });

    describe('when the values are not equals', () => {
        const operator = new Equals({ expectedValue: 2, accessor })
        operator.initialize({ size: 1 })

        it('returns true', () => {
            expect(operator.evaluate()).toBe(false);
        });

    });

    describe('default values', () => {
        const operator = new Equals({ expectedValue: 0 , accessor})

        it('the name is Equals', () => {
            expect(operator.name).toEqual('Equals');
        });

        it('has RELATIONAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.RELATIONAL_OPERATOR);
        });

    });
});