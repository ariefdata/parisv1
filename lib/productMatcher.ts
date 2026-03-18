import { archetypeProductMapping } from "./archetypeProductMapping"

type Bag = {
id: string
name: string
shape: string
structure: string
hardware: string
}

export function matchBagsToArchetype(
archetypeId: string,
bags: Bag[]
) {

const mapping = (archetypeProductMapping as any)[archetypeId]

if (!mapping) return []

const scored = bags.map((bag) => {

let score = 0

if (mapping.shape.includes(bag.shape)) {
score += 2
}

if (mapping.structure.includes(bag.structure)) {
score += 1
}

if (mapping.hardware.includes(bag.hardware)) {
score += 1
}

return {
bag,
score
}

})

const sorted = scored.sort(
(a,b) => b.score - a.score
)

return sorted.slice(0,3).map((item) => item.bag)

}
