import RuleMapper from "./RuleMapper";
import Rule from '../rule/Rule';

describe('RuleMapper', () => {

    describe('when pass a implication with 2 equals condition', () => {
        const json = {
            description: 'aDescription',
            errorMessage: 'Error message',
            predicate: {
                type: "LOGICAL_OPERATOR",
                name: "Implication",
                expressions: [
                    {
                        type: "RELATIONAL_OPERATOR",
                        entity: "user",
                        attribute: "DNI",
                        name: "Equals",
                        expectedValue: 40309432
                    },
                    {
                        type: "RELATIONAL_OPERATOR",
                        entity: "user",
                        attribute: "age",
                        name: "GreaterEquals",
                        expectedValue: 18
                    }
                ]
            }
        }

        const result: Rule = RuleMapper(json)

        it('has the description', () => {
            expect(result.description).toEqual(json.description);
        });

        it('has the errorMessage', () => {
            expect(result.errorMessage).toEqual(json.errorMessage);
        });

        it('Create implication as predicate', () => {
            expect(result.predicate.name).toEqual("Implication");
            expect(result.predicate.expressions).toHaveLength(2)
        });
        // TODO: Test all the Pedricate mapping
    });
});