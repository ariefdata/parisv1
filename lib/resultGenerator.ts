import { resolveArchetype } from "./archetypeEngine"
import { matchBagsToArchetype } from "./productMatcher"

type Bag = {
id: string
name: string
shape: string
structure: string
hardware: string
}

export function generateResult(
answers: string[],
styleSignal: string,
bags: Bag[]
){

const result = resolveArchetype(answers, styleSignal)

const primary = result.primary
const secondary = result.secondary

if (!primary) throw new Error("Result generation failed: primary archetype not found")

const recommendedBags = matchBagsToArchetype(primary.id, bags)

return {

primary,
secondary,

mirrorStatement: primary.mirrorStatement,

reflection: primary.reflection,

styleDirection: primary.styleDirection,

recommendedBags

}

}
