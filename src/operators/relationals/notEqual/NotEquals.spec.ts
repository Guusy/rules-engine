

import NotEquals from './NotEquals'

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
});