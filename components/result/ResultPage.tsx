"use client"

import { motion } from "framer-motion"
import { archetypeVisuals } from "../../lib/archetypeVisuals"

type Bag = {
id: string
name: string
shape: string
structure: string
hardware: string
}

type Archetype = {
id: string
name: string
mirrorStatement: string
reflection: string[]
styleDirection: string[]
}

type Result = {
primary: Archetype
secondary: Archetype
mirrorStatement: string
reflection: string[]
styleDirection: string[]
recommendedBags: Bag[]
}

type Props = {
result: Result
}

export default function ResultPage({ result }: Props) {

const { primary, secondary, mirrorStatement, reflection, styleDirection, recommendedBags } = result
const visual = (archetypeVisuals as any)[primary.id] || archetypeVisuals.quiet_muse

function handleShare(){

const url = window.location.href

const text = `aku barusan cek style aku di sini...

ternyata aku: ${result.primary.name} 🤍

jujur ini akurat banget 😭

coba deh, kamu apa:
${url}`

if(navigator.share){
navigator.share({
title:"My Style Result",
text
})
}else{
navigator.clipboard.writeText(text)
alert("Copied to clipboard")
}

}

const base = "#FAF9F7"

return (

<div 
className="relative min-h-screen px-6 py-20 selection:bg-black selection:text-white transition-colors duration-1000 overflow-hidden"
style={{ backgroundColor: base, color: visual.text }}
>

{/* Archetype Visual Tint Overlay */}
<div
className="absolute inset-0 pointer-events-none transition-colors duration-1000"
style={{
background: visual.accent,
opacity: 0.06
}}
/>

<div className="relative max-w-3xl mx-auto">

{/* Header Section */}
<motion.div
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.8, ease: "easeOut" }}
className="text-center mb-24"
>

<p className="text-[10px] tracking-[0.4em] mb-6 uppercase font-bold opacity-50">
Your Style Energy
</p>

<h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4">
{primary.name}
</h1>

<p className="font-light italic text-lg capitalize opacity-50">
with a touch of {secondary.name.toLowerCase()}
</p>

</motion.div>


{/* Mood Panel */}
<motion.div
initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
transition={{ delay:0.1, duration:0.8 }}
className="relative w-full aspect-[4/3] mb-12 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl"
>

<img
src={visual.image}
alt={primary.name}
className={`w-full h-full object-cover ${primary.id === 'clean_lines_girl' ? 'object-top' : 'object-center'}`}
/>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

</motion.div>


{/* Mirror Narrative / Editorial Quote */}
<motion.div
initial={{ opacity:0, scale:0.95 }}
animate={{ opacity:1, scale:1 }}
transition={{ delay:0.2, duration:0.8 }}
className="rounded-[3rem] py-16 px-10 md:py-24 md:px-20 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] mb-32 text-center border border-white/10"
style={{ backgroundColor: `${visual.accent}26`, backdropFilter: 'blur(12px)' }}
>

<span 
className="text-6xl block mb-8 font-serif leading-none italic select-none"
style={{ color: visual.text, opacity: 0.1 }}
>
“
</span>

<p className="text-2xl md:text-4xl leading-[1.4] font-light tracking-tight italic max-w-xl mx-auto">
{mirrorStatement}
</p>

<span 
className="text-6xl block mt-8 font-serif leading-none italic select-none translate-y-4"
style={{ color: visual.text, opacity: 0.1 }}
>
”
</span>

</motion.div>


{/* Narrative Points */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 px-4">

<motion.div
initial={{ opacity:0, x:-20 }}
animate={{ opacity:1, x:0 }}
transition={{ delay:0.4 }}
>

<h2 className="text-xs tracking-[0.2em] uppercase font-bold mb-8 opacity-40">
About your style
</h2>

<ul className="space-y-6">

{reflection.map((item, index) => (
<li key={index} className="flex gap-4 group">
<span className="w-1.5 h-1.5 rounded-full mt-2 transition-colors opacity-30 group-hover:opacity-100" style={{ backgroundColor: visual.text }}></span>
<span className="font-light leading-relaxed opacity-70">{item}</span>
</li>
))}

</ul>

</motion.div>


<motion.div
initial={{ opacity:0, x:20 }}
animate={{ opacity:1, x:0 }}
transition={{ delay:0.6 }}
>

<h2 className="text-xs tracking-[0.2em] uppercase font-bold mb-8 opacity-40">
Style Direction
</h2>

<div className="flex flex-wrap gap-3">

{styleDirection.map((item, index) => (

<span
key={index}
className="px-5 py-2 rounded-full text-xs tracking-wide transition-all cursor-default border"
style={{ backgroundColor: visual.accent, borderColor: 'transparent', color: visual.text }}
>

{item}

</span>

))}

</div>

</motion.div>

</div>


{/* Recommendations */}
<motion.div
initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
transition={{ delay:0.8 }}
className="mb-24"
>

<h2 className="text-center text-xs tracking-[0.3em] uppercase font-bold mb-16 opacity-30">
Bags curated for you
</h2>

<div className="grid grid-cols-1 gap-6">

{recommendedBags.map((bag) => {

let narrativeDescription = "A curated piece that fits your style energy."

if (bag.shape === "shoulder_bag") narrativeDescription = "A soft everyday shoulder bag."
if (bag.shape === "structured_handbag") narrativeDescription = "A clean structured bag for refined style."
if (bag.shape === "boxy_top_handle") narrativeDescription = "A structured statement bag."
if (bag.shape === "mini_structured") narrativeDescription = "A small structured bag with a modern edge."
if (bag.shape === "tote") narrativeDescription = "A spacious everyday carry for your essentials."

return (

<motion.div
key={bag.id}
whileHover={{ y: -4, scale: 1.01 }}
className="group bg-white rounded-[2rem] p-7 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] border border-transparent hover:border-gray-100 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
>

<div>

<p className="font-medium text-lg text-gray-900 mb-1 group-hover:tracking-wide transition-all">
{bag.name}
</p>

<p className="text-sm text-gray-500 font-light leading-relaxed">
{narrativeDescription}
</p>

</div>

<a 
href="https://shopee.co.id/paris_classic_official"
target="_blank"
className="text-[11px] tracking-widest uppercase font-bold px-8 py-3 rounded-full transition-all bg-gray-50 text-gray-600 hover:bg-black hover:text-white inline-block"
>
Shop this style
</a>

</motion.div>

)

})}

</div>

</motion.div>


{/* Footer Action */}
<div className="text-center border-t pt-20" style={{ borderColor: `${visual.text}10` }}>

<button 
onClick={handleShare}
className="px-10 py-4 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
style={{ backgroundColor: 'black' }}
>

Share your discovery

</button>

<p className="mt-8 text-[10px] tracking-widest uppercase opacity-30">
Paris & Classic · Internal Release v1.0
</p>

</div>

</div>

</div>

)

}
