
import { About, Contacts, Fees, Gallery, Treatment } from '@/sections'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <About />
      <Treatment />
      <Fees />
      <Gallery />
      <Contacts />
    </main>
  )
}
