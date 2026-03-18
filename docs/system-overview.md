# Paris & Classic Identity Engine

Platform ini adalah identity-driven fashion discovery.

Tujuan sistem adalah membantu user menemukan style identity mereka,
lalu merekomendasikan tas yang sesuai dengan identitas tersebut.

## Flow Sistem

Landing Page
→ Style Quiz
→ Archetype Engine
→ Result Generator
→ Bag Recommendation

## Layer Sistem

### Quiz Layer

questions.ts  
berisi pertanyaan quiz.

questionMapping.ts  
menghubungkan jawaban quiz dengan skor archetype.

styleSignals.ts  
menghubungkan visual style preference dengan archetype.

---

### Archetype Engine

archetypeEngine.ts

menghitung skor archetype berdasarkan:
- jawaban quiz
- style signal

engine menghasilkan:
- primary archetype
- secondary archetype

---

### Product Layer

archetypeProductMapping.ts

menghubungkan archetype dengan atribut tas.

productMatcher.ts

mencari tas yang paling cocok berdasarkan atribut:
- shape
- structure
- hardware

---

### Result Layer

resultGenerator.ts

menggabungkan:
- archetype result
- mirror statement
- reflection
- style direction
- recommended bags

menjadi object result untuk UI.

---

## Output Sistem

result object:

primary archetype
secondary archetype
mirror statement
style reflection
recommended bags
