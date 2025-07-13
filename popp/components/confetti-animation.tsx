"use client"

import { useEffect, useState } from "react"

interface Confetti {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
  speedX: number
  speedY: number
}

export default function ConfettiAnimation() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const colors = ["#ff69b4", "#ffc0cb", "#ffb6c1", "#ffd1dc", "#ffe4e1"]
    const newConfetti: Confetti[] = []

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 3 + 2,
      })
    }

    setConfetti(newConfetti)

    const animateConfetti = () => {
      setConfetti((prev) =>
        prev
          .map((piece) => ({
            ...piece,
            x: piece.x + piece.speedX,
            y: piece.y + piece.speedY,
            rotation: piece.rotation + 5,
          }))
          .filter((piece) => piece.y < window.innerHeight + 10),
      )
    }

    const interval = setInterval(animateConfetti, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            transform: `rotate(${piece.rotation}deg)`,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  )
}
