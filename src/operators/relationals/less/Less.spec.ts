import Less from "./Less";

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
});