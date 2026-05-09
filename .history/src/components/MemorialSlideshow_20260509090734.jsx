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
              <img
                src={slide.src}
                className="
                  w-full
                  h-full
                  object-cover
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