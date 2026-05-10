export default function InstagramMemories({ config, onBack }) {
    return (
      <div className="min-h-screen bg-black text-white overflow-y-auto">
  
        {/* Header */}
        <div className="
          sticky
          top-0
          z-50
          bg-black/90
          backdrop-blur-md
          border-b
          border-zinc-800
          p-4
          flex
          items-center
          justify-between
        ">
  
          <button
            onClick={onBack}
            className="
              px-4
              py-2
              rounded-xl
              bg-zinc-800
              hover:bg-zinc-700
              transition
            "
          >
            ← Back
          </button>
  
          <h1 className="text-lg font-semibold">
            Memories
          </h1>
  
          <div className="w-16" />
  
        </div>
  
        {/* Profile */}
        <div className="max-w-4xl mx-auto px-4 py-8">
  
          <div className="
            flex
            flex-col
            sm:flex-row
            items-center
            sm:items-start
            gap-8
          ">
  
            <img
              src={config.profile.profilePicture}
              alt="Profile"
              className="
                w-32
                h-32
                rounded-full
                object-cover
                border-4
                border-zinc-700
                shadow-2xl
              "
            />
  
            <div className="flex-1 text-center sm:text-left">
  
              <h2 className="text-2xl font-bold mb-3">
                @{config.profile.username}
              </h2>
  
              <div className="
                flex
                gap-6
                justify-center
                sm:justify-start
                text-sm
                text-zinc-300
                mb-4
              ">
  
                <span>
                  <strong>{config.profile.posts}</strong> posts
                </span>
  
                <span>
                  {config.profile.followers}
                </span>
  
                <span>
                  {config.profile.following}
                </span>
  
              </div>
  
              <p className="
                text-zinc-200
                leading-relaxed
                max-w-2xl
              ">
                {config.profile.bio}
              </p>
  
            </div>
  
          </div>
  
          {/* Gallery */}
          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-1
            mt-10
          ">
  
            {config.slides
              .filter(slide => slide.type === "image")
              .map((slide, index) => (
  
                <div
                  key={index}
                  className="
                    aspect-square
                    overflow-hidden
                    bg-zinc-900
                    relative
                    group
                  "
                >
  
                  <img
                    src={`/memorials/rose-enright/${slide.src}`}
                    alt="Memory"
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />
  
                </div>
  
              ))}
  
          </div>
  
        </div>
  
      </div>
    )
  }