import Runner from "./Runner";
import Or from './operators/logicals/or/Or';
import Equals from './operators/relationals/equals/Equals';
import Greater from './operators/relationals/greater/Greater';
import Implication from './operators/logicals/implication/Implication';

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

    describe('Real cases', () => {

        describe('if items.size> 2 or medicine.name = "ibuprofeno" => tp is true', () => {
            describe('build the rule', () => {
                const sizeGreater = new Greater({
                    expectedValue: 2, accessor: (object) => object.size
                })
                const medicineEqualIbuprofeno = new Equals(
                    {
                        expectedValue: "ibuprofeno", accessor: (object) => object.medicine.name
                    })
                const orConnector = new Or([
                    medicineEqualIbuprofeno,
                    sizeGreater
                ])
                const tpIsTrue = new Equals({ expectedValue: true, accessor: (object) => object.tp })
                const implication = new Implication([orConnector, tpIsTrue])
                describe('initialize and evalute with correct data', () => {
                    const data = {
                        items: [1, 2],
                        medicine: {
                            name: 'rivotril'
                        },
                        tp: true
                    }
                    const result = implication.initialize(data).evaluate()
                    // console.log(JSON.stringify(implication))
                    it('returns true', () => {
                        expect(result).toBe(true);
                    });

                });
            });
        });
    });
});