import { useEffect, useState, useRef } from "react"

import HeroOverlay from "../components/HeroOverlay"
import MemorialSlideshow from "../components/MemorialSlideshow"
import InstagramMemories from "../components/InstagramMemories"

export default function MemorialPage() {

  const [config, setConfig] = useState(null)

  const [started, setStarted] = useState(false)

  const [view, setView] = useState("home")

  const audioRef = useRef(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}memorials/rose-enright/config.json`)
      .then(res => res.json())
      .then(data => setConfig(data))
  }, [])

  const startTribute = async () => {

    setStarted(true)

    setView("tribute")

    try {
      audioRef.current.volume = 0.4

      await audioRef.current.play()

    } catch (err) {
      console.error(err)
    }
  }

  const openMemories = () => {
    setView("memories")
  }

  const stopTribute = () => {

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setStarted(false)

    setView("home")
  }

  if (!config) return null

  return (
    <div className="w-full h-full relative">

      <audio ref={audioRef} loop>
        <source  src={`${import.meta.env.BASE_URL}${config.song}`} type="audio/mp3" />
      </audio>

      {view === "home" && (
        <HeroOverlay
          config={config}
          onStart={startTribute}
          onOpenMemories={openMemories}
        />
      )}

      {view === "tribute" && (
        <MemorialSlideshow
          slides={config.slides}
          onBack={stopTribute}
        />
      )}

      {view === "memories" && (
        <InstagramMemories
          config={config}
          onBack={() => setView("home")}
        />
      )}

    </div>
  )
}