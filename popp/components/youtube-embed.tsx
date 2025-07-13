"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function YouTubeEmbed() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
      <CardContent className="p-6">
        <div className="aspect-video w-full max-w-2xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/e8lSYc3WvJ8?si=8opDWzjTgca3kh54"
            title="Romantic YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <p className="text-pink-500 text-sm mt-4 text-center">
          Video yang mungkin kamu suka
        </p>
      </CardContent>
    </Card>
  );
}
