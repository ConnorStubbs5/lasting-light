import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

export default function MemorialSlideshow({ slides }) {
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

      {/* Slideshow */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
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
              "
            >

              {slide.type === "image" && (
                <img
                  src={slide.src}
                  loading="lazy"
                  className="
                    max-w-full
                    max-h-full
                    rounded 2xl
                    object-contain
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