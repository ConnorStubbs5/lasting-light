import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

export default function MemorialSlideshow({ slides }) {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Static Background */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <img
          src="/backgrounds/sky.webp"
          className="
            w-full
            h-full
            object-cover
            opacity-40
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/40
          "
        />
      </div>

      {/* Slideshow */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ 
          crossFade: true 
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        loop={true}
        className="w-full h-full z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="
                w-full
                h-full
                flex
                items-center
                justify-center
                p-6
              "
            >

              {slide.type === "image" && (
                <img
                  src={slide.src}
                  loading="lazy"
                  className="
                    max-w-full
                    max-h-full
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
                    max-w-full
                    max-h-full
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