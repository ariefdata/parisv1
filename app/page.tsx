"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {

return (

<div className="min-h-screen bg-[#faf9f7] text-gray-900 overflow-x-hidden">

<div className="max-w-5xl mx-auto px-6 py-24 md:py-32">

<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="text-center mb-32 md:mb-48"
>

<span className="text-xs tracking-[0.3em] font-medium text-gray-400 uppercase mb-6 block">
Find your signature style
</span>

<h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
The bag that <br/> <span className="italic">feels like you.</span>
</h1>

<p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-12 font-light leading-relaxed">
Discover your style energy and the carefully curated bag that matches your unique identity.
</p>

<Link
href="/quiz"
className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide transition-transform hover:scale-105"
>
Start your style discovery
</Link>

<p className="text-[10px] tracking-widest text-gray-400 mt-5 uppercase">
only 7 questions · 2 minutes
</p>

</motion.div>


<section className="mb-32 md:mb-48">

<h3 className="text-center text-sm tracking-widest text-gray-400 uppercase mb-16 font-medium">
Some styles you might discover
</h3>

<div className="relative">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<motion.div
whileHover={{ y: -8, scale: 1.02 }}
className="relative rounded-3xl overflow-hidden h-64 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] group transition-all"
>
<img 
src="/moods/quiet-muse.png" 
className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
alt="Quiet Muse"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="font-semibold text-lg mb-1">Quiet Muse</p>
<p className="text-xs font-light opacity-80">soft minimal energy</p>
</div>
</motion.div>

<motion.div
whileHover={{ y: -8, scale: 1.02 }}
className="relative rounded-3xl overflow-hidden h-64 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] group transition-all"
>
<img 
src="/moods/clean-lines-girl.png" 
className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
alt="Clean Lines Girl"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="font-semibold text-lg mb-1">Clean Lines Girl</p>
<p className="text-xs font-light opacity-80">modern minimal style</p>
</div>
</motion.div>

<motion.div
whileHover={{ y: -8, scale: 1.02 }}
className="relative rounded-3xl overflow-hidden h-64 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] group transition-all"
>
<img 
src="/moods/city-lover.png" 
className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
alt="City Lover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="font-semibold text-lg mb-1">City Lover</p>
<p className="text-xs font-light opacity-80">urban romantic vibe</p>
</div>
</motion.div>

<motion.div
whileHover={{ y: -8, scale: 1.02 }}
className="relative rounded-3xl overflow-hidden h-64 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] group transition-all"
>
<img 
src="/moods/soft-rebel-girl.png" 
className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
alt="Soft Rebel Girl"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="font-semibold text-lg mb-1">Soft Rebel Girl</p>
<p className="text-xs font-light opacity-80">bold but effortless</p>
</div>
</motion.div>

</div>

<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#faf9f7] to-transparent pointer-events-none" />

</div>

<p className="text-xs text-gray-400 text-center mt-6 tracking-widest uppercase font-medium">
+ 8 more styles to discover
</p>

</section>


<div className="text-center mb-32 md:mb-48 border-y border-gray-100 py-32">

<h2 className="text-4xl md:text-5xl font-light mb-8 max-w-2xl mx-auto leading-tight italic">
"Your style is more than trends. It’s how you move through the world."
</h2>

<p className="text-gray-400 tracking-widest uppercase text-xs font-medium">
— THE PARIS & CLASSIC PHILOSOPHY
</p>

</div>


<div className="text-center pb-20">

<Link
href="/quiz"
className="inline-block bg-black text-white px-12 py-5 rounded-full text-sm font-medium tracking-widest uppercase transition-transform hover:scale-105"
>
Take the quiz
</Link>

</div>

</div>

</div>

)

}
