import { Metadata } from "next"
import { archetypes } from "../../lib/archetypes"
import ResultHub from "../../components/result/ResultHub"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams
  const type = resolvedParams.type as string
  const primary = archetypes.find(a => a.id === type)
  
  if (primary) {
    const title = `${primary.name} — My Style Identity`
    const description = primary.mirrorStatement
    const image = `/moods/${primary.id.replace(/_/g, '-')}.png`
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [image],
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      }
    }
  }
  
  return {
    title: "Paris & Classic — The bag that feels like you",
    description: "Discover your signature style identity."
  }
}

export default function Result() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-solid border-gray-300 border-t-black"></div>
      </div>
    }>
      <ResultHub />
    </Suspense>
  )
}
