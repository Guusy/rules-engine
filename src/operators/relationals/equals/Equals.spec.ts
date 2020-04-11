

import Equals from './Equals'

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
});