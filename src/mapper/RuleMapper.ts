import Rule from "../rule/Rule"
import Implication from '../operators/logicals/implication/Implication'

interface RuleJSON {
    description: string,
    errorMessage: string,
    predicate: any
}

const TypeMap = {
    "Implication": (expressions) => new Implication(expressions)
}
const RuleMapper = ({ description, errorMessage, predicate }: RuleJSON): Rule => {
    const rule = new Rule()
    rule.description = description
    rule.errorMessage = errorMessage
    // TODO: fix this
    rule.predicate = TypeMap[predicate.name](predicate.expressions)
    return rule
}



export default RuleMapper