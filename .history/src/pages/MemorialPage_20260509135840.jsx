import { useEffect, useState, useRef } from "react"
import HeroOverlay from "../components/HeroOverlay"
import MemorialSlideshow from "../components/MemorialSlideshow"

export default function MemorialPage() {
  const [config, setConfig] = useState(null)
  const [started, setStarted] = useState(false)

  const audioRef = useRef(null)

  useEffect(() => {
    fetch("/memorials/rose-enright/config.json")
      .then(res => res.json())
      .then(data => setConfig(data))
  }, [])

  const startTribute = async () => {
    setStarted(true)

    try {
      audioRef.current.volume = 0.4
      await audioRef.current.play()
    } catch (err) {
      console.error(err)
    }
  }

  if (!config) return null

  return (
    <div className="w-full h-full relative">

      <audio ref={audioRef} loop>
        <source src={config.song} type="audio/mp3" />
      </audio>

      {!started && (
        <HeroOverlay
          config={config}
          onStart={startTribute}
        />
      )}

      {started && (
        <MemorialSlideshow slides={config.slides} onBack={stopTribute}/>
      )}
    </div>
  )

  const stopTribute = () => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setStarted(false)
  }
}

