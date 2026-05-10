export default function HeroOverlay({ config, onStart }) {
    return (
      <div
        className="
          absolute
          inset-0
          z-50
          flex
          items-center
          justify-center
          fade-overlay
        "
      >
        <div className="text-center px-6">
  
          <h1
            className="
              text-5xl
              md:text-7xl
              font-serif
              mb-4
            "
          >
            In Loving Memory
          </h1>
  
          <h2
            className="
              text-3xl
              md:text-5xl
              text-yellow-200
              mb-2
            "
          >
            {config.name}
          </h2>
  
          <p className="text-lg opacity-80 mb-6">
            {config.birthDate} — {config.deathDate}
          </p>
  
          <p
            className="
              italic
              text-lg
              max-w-xl
              mx-auto
              mb-10
              opacity-90
            "
          >
            "{config.heroQuote}"
          </p>
  
          <button
            onClick={onStart}
            className="
              px-8
              py-4
              rounded-full
              bg-yellow-200
              text-black
              text-lg
              hover:scale-105
              transition
            "
          >
            Begin Tribute
          </button>
  
        </div>
        <div className="flex gap-4 mt-6">

          <button
            onClick={onStart}
            className="
              px-8
              py-4
              rounded-2xl
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            Begin Tribute
          </button>

          <button
            onClick={onOpenMemories}
            className="
              px-8
              py-4
              rounded-2xl
              bg-zinc-800
              text-white
              font-semibold
              hover:bg-zinc-700
              transition
            "
          >
            View Memories
          </button>
</div>
      </div>
    )
  }