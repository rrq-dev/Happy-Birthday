"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

interface LoveMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoveMessage({ isOpen, onClose }: LoveMessageProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-pink-50 to-peach-50 border-pink-200">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl md:text-3xl font-bold text-pink-600 font-serif">
            <Heart className="w-8 h-8 inline-block mr-2 text-pink-500" />
            Ucapan dari si Gabntenk
            <Sparkles className="w-8 h-8 inline-block ml-2 text-pink-500" />
          </DialogTitle>
        </DialogHeader>

        <div className="text-lg md:text-xl text-pink-600 leading-relaxed space-y-4">
          <p className="font-semibold text-pink-700">
            Untuk sayangku tercinta,
          </p>
          <p>
            Untuk hari ini pagi ini hari senin ini adalah hari special buat
            kamu, Happy birthday ya sayangku! 🎉
          </p>
          <p>
            Terima kasih udah hadir dalam hidup aku, bawa warna di setiap hari
            yang biasanya kelabu. Semoga ulang tahun ini jadi awal dari banyak
            kebahagiaan yang bakal kita rayakan bareng terus 💖
          </p>
          <p>
            Kayak yang aku bilang, kamu itu kayak charger kalo aku deket kamu,
            energi aku langsung penuh lagi ehem
          </p>
          <p className="italic text-pink-500">
            *Pantun time~*
            <br />
            Jalan-jalan ke Kalimantan, pulangnya bawa kue lapis.
            <br />
            Selamat ulang tahun pujaan hati, semoga selalu manis manis~ 😘
          </p>
          <p className="font-bold text-pink-700 text-xl">
            Happy Birthday, Sayangku!
            <br />
            Kamu adalah jawaban dari semua doa randomku di tengah malam.
            <br />I love you, today and always 🌷💫
          </p>

          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-pink-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-2 rounded-full"
          >
            Tutup pesan disini
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
