"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, Music, Camera } from "lucide-react";
import TypewriterEffect from "@/components/typewriter-effect";
import PhotoGallery from "@/components/photo-gallery";
import ConfettiAnimation from "@/components/confetti-animation";
import LoveMessage from "@/components/love-message";
import Youtube_embed from "@/components/youtube-embed";

export default function BirthdayPage() {
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-peach-50 to-cream-50">
      {showConfetti && <ConfettiAnimation />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-8 font-serif">
              Happy Birthday, Sayang! 🎉
            </h1>
            <div className="text-lg md:text-xl text-pink-500 mb-12 min-h-[60px]">
              <TypewriterEffect
                text="Hari ini, pagi ini, adalah hari ulang tahun muu  ✨💕"
                speed={50}
              />
            </div>
          </div>

          <Button
            onClick={() => setShowLoveMessage(true)}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <Gift className="w-5 h-5 mr-2" />
            🎁 Ucapan untuk kamu!
          </Button>
        </div>
      </section>

      {/* Love Message Modal */}
      <LoveMessage
        isOpen={showLoveMessage}
        onClose={() => setShowLoveMessage(false)}
      />

      {/* Photo Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">
              Our Beautiful Moments 📸
            </h2>
            <p className="text-pink-500 text-lg">
              Every moment with you is a treasure worth remembering
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-peach-100">
        <div className="max-w-4xl mx-auto text-center">
          <Music className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">
            {" "}
            Songs 🎵
          </h2>
          <Youtube_embed />
        </div>
      </section>

      {/* Birthday Wishes Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-serif">
                My Birthday Wish for You 🌟
              </h2>
              <div className="text-pink-600 text-lg md:text-xl leading-relaxed space-y-4">
                <p>
                  Dari hari yang special ini buat kamu, semoga kamu selalu diberikan kesehatan, kebahagiaan, dan cinta yang melimpah. Kamu adalah cahaya dalam hidupku, dan aku bersyukur setiap hari bisa bersamamu.
                </p>
                <p>
                  Terima kasih udah menjadi pacar aku walaupun baru 2 minggu ehem, tapi aku udah ngerasa kamu adalah orang yang tepat buat aku. Kamu selalu bikin hari-hariku lebih cerah dengan senyummu yang manis dan perhatianmu yang tulus, kamu bakal selalu jadi pelangi dari badainya dalam hidupku.
                </p>
                <p className="font-semibold text-pink-700">
                  Sekali lagi Happy birthday ya sayangku semoga kita bisa langgeng terus! (kalo bisa ampe tua sih ehem)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-pink-200 to-peach-200">
        <div className="text-center">
          <p className="text-pink-600 font-medium">
            Made with 💖 by Adit Gabntenk — 14 Juli 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
