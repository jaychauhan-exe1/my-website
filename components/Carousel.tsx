"use client"

import Link from "next/link"
import { useRef, useLayoutEffect, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Button from "@/components/ui/Button"

type CarouselProps = {
  content: {
    title: string
    description: string
    link: string
    bg_image: string
    bg_color: string
  }[]
}

export default function Carousel({ content }: CarouselProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [maxX, setMaxX] = useState(0)

  /**
   * Measure PERFECT horizontal scroll distance
   */
  useLayoutEffect(() => {
    if (!trackRef.current || !sectionRef.current) return

    const track = trackRef.current
    const lastSlide = track.lastElementChild as HTMLElement
    if (!lastSlide) return

    const viewportWidth = window.innerWidth

    // distance from track start to last slide end
    const lastSlideRight =
      lastSlide.offsetLeft + lastSlide.offsetWidth

    const scrollDistance = Math.max(
      lastSlideRight - viewportWidth,
      0
    )

    setMaxX(scrollDistance)

    // sticky height + real horizontal distance
    sectionRef.current.style.height =
      `${window.innerHeight + scrollDistance}px`
  }, [])

  /**
   * Map vertical scroll → horizontal movement
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 0.9], [0, -maxX])

  return (
     
    <section
      ref={sectionRef}
      className="relative min-h-[200vh]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-[90vh] overflow-hidden rounded-2xl py-[5vh]">
        <div className="flex justify-between items-center flex-wrap">
          <h4 className="text-lg uppercase italic">Recenet Work</h4>
          <Button href="/projects" className="text-lg!" varient="secondary">All Projects</Button>
        </div> 
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full will-change-transform gap-10 rounded-2xl"
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="w-full flex shrink-0 overflow-hidden rounded-2xl"
            >
              <div
                className="w-full bg-cover object-fit bg-center rounded-2xl  overflow-hidden"
                style={{ backgroundImage: `url(${item.bg_image})` }}
              >
                <div className="h-full px-16 flex flex-col justify-center items-start">
                  <h3 className="text-4xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-md">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="mt-6 inline-block underline"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
