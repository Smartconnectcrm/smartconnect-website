"use client"

import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
    </section>
  ),
})

export default function HeroSlot() {
  return <Hero3D />
}
