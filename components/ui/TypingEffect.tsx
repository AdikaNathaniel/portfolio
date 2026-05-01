'use client'

import React, { useEffect, useState } from 'react'

type TypingEffectProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseBetween?: number
  className?: string
}

const TypingEffect = ({
  words,
  typingSpeed = 110,
  deletingSpeed = 90,
  pauseBetween = 1500,
  className,
}: TypingEffectProps) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseBetween)
      return () => clearTimeout(t)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1),
        )
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(t)
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseBetween])

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-1 animate-pulse" />
    </span>
  )
}

export default TypingEffect
