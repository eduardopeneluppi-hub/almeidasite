import { useState } from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import BlurText from './BlurText'
import AccordionGallery from './AccordionGallery'
import Testimonials from './Testimonials'
import ProjectChat from './ProjectChat'
import QuoteModal from './QuoteModal'
import { brandRedGradient, WHATSAPP_NUMBER } from './theme'

import cozinhaImg from './assets/gallery/cozinha.png'
import salaImg from './assets/gallery/sala-de-estar.png'
import quartoImg from './assets/gallery/quarto.png'
import closetImg from './assets/gallery/closet.png'
import adegaImg from './assets/gallery/adega.png'

const galleryItems = [
  { image: cozinhaImg, label: 'Cozinha' },
  { image: salaImg, label: 'Sala de Estar' },
  { image: quartoImg, label: 'Quarto' },
  { image: closetImg, label: 'Closet' },
  { image: adegaImg, label: 'Adega' },
]

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && <Navbar />}
      <main className="relative min-h-svh w-full overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[55vh]"
          style={{
            background: brandRedGradient,
            maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center px-6 pt-36 text-center sm:pt-40">
          <BlurText
            text="Móveis planejados que transformam espaços"
            delay={250}
            stepDuration={0.8}
            animateBy="words"
            direction="top"
            active={!showIntro}
            className="max-w-3xl justify-center text-3xl uppercase leading-[1.15] text-white [font-family:var(--font-display)] sm:text-5xl"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={2}
            expandRatio={0.5}
            accentColor="#C80000"
            trigger="hover"
            height={440}
            radius={20}
            whatsappNumber={WHATSAPP_NUMBER}
          />
        </div>

        <div className="relative -mt-[14vh] sm:mt-0">
          <div className="absolute inset-x-0 bottom-0 -top-52" style={{ background: brandRedGradient }} />
          <div
            className="pointer-events-none absolute inset-x-0 -top-52 h-52"
            style={{ background: 'linear-gradient(to bottom, #ffffff 0%, transparent 100%)' }}
          />
          <Testimonials />
        </div>

        <ProjectChat />
      </main>

      <QuoteModal />
    </>
  )
}

export default App
