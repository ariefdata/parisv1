import { archetypes } from "./archetypes"
import { questionMapping } from "./questionMapping"
import { styleSignals } from "./styleSignals"

type ScoreMap = {
[key: string]: number
}

export function resolveArchetype(
answers: string[],
styleSignal?: string
) {

const scores: ScoreMap = {}

archetypes.forEach((a) => {
scores[a.id] = 0
})

answers.forEach((answer) => {

const mapping = (questionMapping as any)[answer]

if (!mapping) return

Object.entries(mapping).forEach(([archetype, weight]) => {
const currentWeight = weight as number
scores[archetype] += currentWeight
})

})

if (styleSignal && (styleSignals as any)[styleSignal]) {

Object.entries((styleSignals as any)[styleSignal]).forEach(
([archetype, weight]) => {
const currentWeight = weight as number
scores[archetype] += currentWeight
}
)

}

const sorted = Object.entries(scores).sort(
(a, b) => b[1] - a[1]
)

const primaryId = sorted[0][0]
const secondaryId = sorted[1][0]

const primary = archetypes.find(a => a.id === primaryId)
const secondary = archetypes.find(a => a.id === secondaryId)

return {
primary,
secondary,
scores
}

}
