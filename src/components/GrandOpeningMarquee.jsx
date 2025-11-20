import Marquee from "react-fast-marquee";

const GrandOpeningMarquee = () => {
  return (
    <div className="bg-gradient-to-r from-[#134e4a] via-[#0f3a36] to-[#134e4a] py-3 shadow-2xl">
      <Marquee speed={30} gradient={false}>
        <div className="flex items-center space-x-8 text-white font-semibold text-lg">
          <span>✨ BOCADO Berlin Grand Opening ✨</span>
          <span>🎊 Dienstag, 25. November 2025 🎊</span>
          <span>🎵 Live Musik den ganzen Abend 🎵</span>
          <span>🥂 Sekt aufs Haus für alle Gäste 🥂</span>
          <span>🎁 Exklusive Überraschungsgeschenke 🎁</span>
          <span>📞 Jetzt Tisch reservieren: +49 30 47036642 📞</span>

          {/* Repeat for continuous flow */}
          <span className="mx-8">•</span>

          <span>✨ BOCADO Berlin Grand Opening ✨</span>
          <span>🎊 Dienstag, 25. November 2025 🎊</span>
          <span>🎵 Live Musik den ganzen Abend 🎵</span>
          <span>🥂 Sekt aufs Haus für alle Gäste 🥂</span>
          <span>🎁 Exklusive Überraschungsgeschenke 🎁</span>
          <span>📞 Jetzt Tisch reservieren: +49 30 47036642 📞</span>
        </div>
      </Marquee>
    </div>
  );
};

export default GrandOpeningMarquee;
