import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

export default function MemorialSlideshow({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 7000,
        disableOnInteraction: false
      }}
      loop={true}
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>

          <div className="w-full h-full relative">

          {slide.type === "image" && (
            <div className="w-full h-full relative">

              {/* Blurred Background */}
              <img
                src={slide.src}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  blur-xl
                  scale-110
                  opacity-40
                "
              />

              {/* Main Image */}
              <img
                src={slide.src}
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-contain
                "
              />

            </div>
          )}

            {slide.type === "video" && (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            )}

            <div
              className="
                absolute
                inset-0
                fade-overlay
              "
            />

          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  )
}