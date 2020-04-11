import Runner from "./Runner";
import Or from './operators/logicals/or/Or';
import Equals from './operators/relationals/equals/Equals';

describe('Integration', () => {
    describe('build OR rule with true and false expressions', () => {
        const accessor = (object: any) => object.size
        const equalsFalse = new Equals({ expectedValue: 2, accessor })
        const equalsTrue = new Equals({ expectedValue: 1, accessor })
        const predicate = new Or([
            equalsFalse,
            equalsTrue
        ])

        describe('populate and run', () => {
            const data = { size: 1 }
            predicate.initialize(data)
            it('return true', () => {
                expect(predicate.evaluate()).toBe(true);
            });
        });
    });
});