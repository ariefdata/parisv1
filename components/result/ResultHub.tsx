"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { generateResult } from "../../lib/resultGenerator"
import ResultPage from "./ResultPage"
import { motion, AnimatePresence } from "framer-motion"
import { archetypes } from "../../lib/archetypes"
import { matchBagsToArchetype } from "../../lib/productMatcher"
import Link from "next/link"

type Bag = {
id: string
name: string
shape: string
structure: string
hardware: string
}

export default function ResultHub(){

const params = useSearchParams()

const [loading,setLoading] = useState(true)
const [result,setResult] = useState<any>(null)
const [messageIndex, setMessageIndex] = useState(0)

const messages = [
"reading your style",
"analyzing your answers",
"matching your energy"
]

useEffect(() => {

const timerId = setInterval(() => {
setMessageIndex((prev) => (prev + 1) % messages.length)
}, 700)

const dataTimerId = setTimeout(() => {

try {
const type = params.get("type")
const secondaryId = params.get("secondary")
const name = params.get("name")

const bags:Bag[] = [
{ id:"1", name:"Loria Series", shape:"structured_handbag", structure:"structured", hardware:"gold" },
{ id:"2", name:"Faye Series", shape:"shoulder_bag", structure:"semi_structured", hardware:"minimal_gold" },
{ id:"3", name:"Reeve Series", shape:"boxy_top_handle", structure:"rigid", hardware:"decorative_gold" }
]

if(type){

const primary = archetypes.find(a => a.id === type)
const secondary = archetypes.find(a => a.id === (secondaryId || archetypes[1].id))

if(primary && secondary){
const recommendedBags = matchBagsToArchetype(primary.id, bags)
setResult({
primary,
secondary,
mirrorStatement: primary.mirrorStatement,
reflection: primary.reflection,
styleDirection: primary.styleDirection,
recommendedBags,
userName: name
})
setLoading(false)
clearInterval(timerId)
return
}

}

// Fallback to localStorage
const answersData = localStorage.getItem("quiz_answers")
const styleData = localStorage.getItem("quiz_style")

if(!answersData && !type){
setLoading(false)
clearInterval(timerId)
return
}

const answers = JSON.parse(answersData || "[]")
const style = styleData || "soft"

const resultData = generateResult(answers, style, bags)

setResult({
...resultData,
userName: name
})
setLoading(false)
clearInterval(timerId)
} catch (error) {
console.error("Result generation error:", error)
setLoading(false)
}

}, 2100)

return () => {
clearInterval(timerId)
clearTimeout(dataTimerId)
}

}, [params, messages.length])

if(loading){

return(

<div className="min-h-screen flex items-center justify-center bg-[#faf9f7]">

<div className="text-center">

<div className="mb-8 flex justify-center">
<div className="h-10 w-10 animate-spin rounded-full border-2 border-solid border-gray-300 border-t-black"></div>
</div>

<div className="h-8 overflow-hidden">

<AnimatePresence mode="wait">

<motion.p
key={messageIndex}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ duration: 0.3 }}
className="text-lg font-light text-gray-400 tracking-widest uppercase"
>
{messages[messageIndex]}
</motion.p>

</AnimatePresence>

</div>

</div>

</div>

)

}

if (!result) {
return (
<div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f7] px-6 text-center">
<p className="text-gray-400 uppercase tracking-widest text-xs mb-8">No style discovery found</p>
<Link 
href="/quiz"
className="bg-black text-white px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105 active:scale-95"
>
Take the quiz
</Link>
</div>
)
}

return <ResultPage result={result} />

}
