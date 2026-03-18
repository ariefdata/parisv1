export interface Question {
id: string
text: string
options: {
id: string
label: string
}[]
}

export const questions: Question[] = [

{
id: "weekend_vibe",
text: "Kalau lagi punya waktu kosong, kamu paling pengen kemana?",
options: [
{ id: "cafe", label: "ngopi santai di cafe" },
{ id: "city_walk", label: "jalan di mall atau kota" },
{ id: "home", label: "stay di rumah" },
{ id: "hangout", label: "ketemu teman" }
]
},

{
id: "outfit_priority",
text: "Kalau lagi pilih outfit, yang paling penting buat kamu apa?",
options: [
{ id: "comfort", label: "yang terasa nyaman dan gue banget" },
{ id: "classy", label: "yang keliatan rapi dan classy" },
{ id: "simple", label: "yang simple tapi stylish" },
{ id: "unique", label: "yang sedikit beda dari orang lain" }
]
},

{
id: "style_vibe",
text: "Dari vibe ini, mana yang paling kamu banget?",
options: [
{ id: "soft", label: "soft dan calm" },
{ id: "romantic", label: "romantic dan feminine" },
{ id: "minimal", label: "clean dan minimal" },
{ id: "creative", label: "bold dan creative" }
]
},

{
id: "social_energy",
text: "Kalau lagi di tempat baru biasanya kamu...",
options: [
{ id: "observe", label: "lebih suka observasi dulu" },
{ id: "chat", label: "ngobrol santai sama orang" },
{ id: "focus", label: "fokus sama kegiatan sendiri" },
{ id: "explore", label: "langsung explore tempatnya" }
]
},

{
id: "bag_size",
text: "Tas yang paling sering kamu pakai biasanya...",
options: [
{ id: "mini", label: "kecil dan praktis" },
{ id: "medium", label: "medium, cukup buat banyak hal" },
{ id: "big", label: "agak besar biar muat semuanya" },
{ id: "unique_bag", label: "yang bentuknya unik" }
]
},

{
id: "current_mood",
text: "Akhir-akhir ini kamu lagi pengen vibe hidup yang seperti apa?",
options: [
{ id: "calm", label: "lebih tenang" },
{ id: "dreamy", label: "lebih romantis dan dreamy" },
{ id: "order", label: "lebih rapi dan teratur" },
{ id: "freedom", label: "lebih bebas dan kreatif" }
]
},

{
id: "style_impression",
text: "Kalau orang lihat gaya kamu, kamu pengennya mereka mikir...",
options: [
{ id: "simple_beauty", label: "simple tapi cantik" },
{ id: "elegant", label: "elegant banget" },
{ id: "effortless", label: "stylish tapi effortless" },
{ id: "artsy", label: "unik juga ya gayanya" }
]
}

]
