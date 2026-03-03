import { useEffect, useRef } from "react"

export const useInfiniteScroll = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      },
      { threshold: 1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [callback])

  return ref
}
