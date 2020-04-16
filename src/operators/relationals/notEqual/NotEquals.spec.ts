

import NotEquals from './NotEquals'
import { OperatorTypes } from '../../../operator/Operator';

describe('NotEquals operator', () => {
    const accessor = (object: any) => object.size

    describe('when the values are not equals', () => {
        const operator = new NotEquals({ expectedValue: 2, accessor })
            .initialize({ size: 1 })
        it('returns true', () => {
            expect(operator.evaluate()).toBe(true);
        });
    });

    describe('when the values are equals', () => {
        const operator = new NotEquals({ expectedValue: 1, accessor })
            .initialize({ size: 1 })
        it('returns false', () => {
            expect(operator.evaluate()).toBe(false);
        });
    });

    describe('default values', () => {
        const operator = new NotEquals({ expectedValue: 0 , accessor})

        it('the name is  NotEquals', () => {
            expect(operator.name).toEqual('NotEquals');
        });

        it('has RELATIONAL_OPERATOR type', () => {
            expect(operator.type).toEqual(OperatorTypes.RELATIONAL_OPERATOR);
        });

    });
});