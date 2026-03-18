"use client"

import { useState } from "react"
import { questions } from "../../lib/questions"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { resolveArchetype } from "../../lib/archetypeEngine"

export default function QuizPage(){

const router = useRouter()

const [step,setStep] = useState(0)
const [answers,setAnswers] = useState<string[]>([])
const [style,setStyle] = useState<string | null>(null)

const totalSteps = questions.length + 1

function handleAnswer(option:string){

const nextAnswers = [...answers,option]
setAnswers(nextAnswers)
localStorage.setItem("quiz_answers", JSON.stringify(nextAnswers))
setStep(step+1)

}

function handleStyle(option:string){

setStyle(option)
localStorage.setItem("quiz_answers", JSON.stringify(answers))
localStorage.setItem("quiz_style", option)

const result = resolveArchetype(answers, option)
const primary = result.primary?.id
const secondary = result.secondary?.id

const name = prompt("masukin nama kamu")

router.push(`/result?type=${primary}&secondary=${secondary}&name=${name || ''}`)

}

const progressMap = [0,25,40,55,70,82,92,100]
const progress = progressMap[step] || 100

return(

<div className="min-h-screen bg-[#faf9f7] px-6 py-12">

<div className="max-w-xl mx-auto">

<div className="w-full bg-gray-200 h-2 rounded-full mb-8">

<div
className="bg-black h-2 rounded-full"
style={{width:`${progress}%`}}
/>

</div>

{step < questions.length && (

<motion.div
key={step}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.4}}
>

<p className="text-xs text-gray-400 mb-2">
Question {step + 1} of {questions.length}
</p>

<h2 className="text-xl font-medium mb-6">
{questions[step].text}
</h2>

<div className="space-y-3">

{questions[step].options.map((option)=> (

<button
key={option.id}
onClick={()=>handleAnswer(option.id)}
className="w-full text-left bg-white p-4 rounded-xl shadow-sm hover:bg-gray-50 active:scale-95 transition-transform"
>

{option.label}

</button>

))}

</div>

<p className="text-xs text-gray-400 mt-6 text-center">
Just go with your instinct
</p>

</motion.div>

)}

{step === questions.length && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.4}}
>

<p className="text-xs text-gray-400 mb-2">
Last step
</p>

<h2 className="text-xl font-medium mb-6">
Pick the style vibe you like most
</h2>

<div className="grid grid-cols-2 gap-4">

<button
onClick={()=>handleStyle("soft")}
className="bg-white p-6 rounded-xl shadow-sm active:scale-95 transition-transform"
>
Soft
</button>

<button
onClick={()=>handleStyle("romantic")}
className="bg-white p-6 rounded-xl shadow-sm active:scale-95 transition-transform"
>
Romantic
</button>

<button
onClick={()=>handleStyle("minimal")}
className="bg-white p-6 rounded-xl shadow-sm active:scale-95 transition-transform"
>
Minimal
</button>

<button
onClick={()=>handleStyle("creative")}
className="bg-white p-6 rounded-xl shadow-sm active:scale-95 transition-transform"
>
Creative
</button>

</div>

</motion.div>

)}

</div>

</div>

)

}
