import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Fees from "@/components/sections/Fees";
import Gallery from "@/components/sections/Gallery";
import Treatment from "@/components/sections/Treatment";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <About />
      <Treatment />
      <Fees />
      <Contacts />
      <Gallery />
    </main>
  )
}
