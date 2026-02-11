import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Music, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SitioParaMiNovio() {
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const esJesus = params.get("para") === "jesus";

  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [reproducir, setReproducir] = useState(false);
  const audioRef = useRef(null);
  const audioUrl = "/like-you-do-joji.mp3"; // subir este mp3 a /public

  if (!esJesus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 p-6 text-center">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-xl">
          <h1 className="text-3xl font-bold text-rose-600 mb-4">Este regalo no es para ti 🤍</h1>
          <p className="text-lg text-gray-700">
            Este rincón fue creado para una sola persona.
            Si llegaste aquí por curiosidad, el amor no era para ti.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-6">
      <audio ref={audioRef} src={audioUrl} loop />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4">
          Feliz 14 de Febrero, Jesús ❤️
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Este pequeño rincón del internet es solo para ti, Jesús. Hecho con todo mi amor para nuestro San Valentín ✨
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {icon: Heart, title: "Lo Que Amo de Ti", text: "Amo tu sonrisa, tu forma de hablar, tu corazón tan noble y todo lo que eres incluso cuando dudas de ti mismo.", color: "text-rose-500"},
          {icon: Star, title: "Nuestros Recuerdos", text: "Cada momen
