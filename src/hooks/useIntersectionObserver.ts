import { useEffect, useState } from 'react'

interface useIntersectionObserverProps {
  threshold?: number
  onIntersect: IntersectionObserverCallback
}

const useIntersectionObserver = ({ threshold = 1.0, onIntersect }: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null)

  useEffect(() => {
    if (!target) return

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { threshold })
    observer.observe(target)

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect()
  }, [onIntersect, target, threshold])

  return { setTarget }
}

export default useIntersectionObserver
