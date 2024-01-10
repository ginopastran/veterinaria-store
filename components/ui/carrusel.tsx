'use client';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Carrusel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 2 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 6, spacing: 30 },
        },
      },
      slides: { perView: 2 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider h-20  overflow-hidden ">
        <img className="keen-slider__slide   w-full h-full object-scale-down " src="image/empresa-1.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-2.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-3.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-4.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-5.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-1.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-2.png"/>
        <img className="keen-slider__slide   w-full h-full object-scale-down" src="image/empresa-3.png"/>
      </div>
    </>
  )
}