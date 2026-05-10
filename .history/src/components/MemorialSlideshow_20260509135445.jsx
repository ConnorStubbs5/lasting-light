import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

export default function MemorialSlideshow({ slides, onBack }) {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Static Sky Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/backgrounds/sky.webp"
          className="
            w-full
            h-full
            object-cover
            blur-sm
            scale-105
            opacity-60
          "
        />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="
          absolute
          top-6
          left-6
          z-50
          px-4
          py-2
          rounded-full
          bg-black/50
          text-white
          backdrop-blur-md
          hover:bg-black/70
          transition
        "
      >
        ← Back
      </button>

      {/* Slideshow */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4500,   // ⬅️ faster slides (was 7000)
          disableOnInteraction: false
        }}
        loop={true}
        className="w-full h-full z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">

              {slide.type === "image" && (
                <img
                  src={slide.src}
                  loading="lazy"
                  className="
                    max-w-[90%]
                    max-h-[90%]
                    object-contain
                    rounded-2xl
                    shadow-2xl
                    slow-zoom
                  "
                />
              )}

              {slide.type === "video" && (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    max-w-[90%]
                    max-h-[90%]
                    object-contain
                    rounded-2xl
                    shadow-2xl
                  "
                />
              )}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}