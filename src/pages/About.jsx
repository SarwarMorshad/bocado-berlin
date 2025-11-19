import { FaUtensils, FaHeart, FaAward, FaUsers } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { Link } from "react-router";

const About = () => {
  const features = [
    {
      icon: <FaUtensils className="h-8 w-8" />,
      title: "Authentische spanische Küche",
      description:
        "Traditionelle Rezepte, die über Generationen weitergegeben wurden, zubereitet mit Liebe und authentischen Zutaten.",
    },
    {
      icon: <FaHeart className="h-8 w-8" />,
      title: "Frische Zutaten",
      description:
        "Wir beziehen die besten lokalen und importierten spanischen Zutaten, um authentische Aromen zu gewährleisten.",
    },
    {
      icon: <FaAward className="h-8 w-8" />,
      title: "Erfahrene Köche",
      description:
        "Unsere erfahrenen Köche bringen Leidenschaft und Expertise aus Spanien in jedes Gericht, das wir servieren.",
    },
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: "Warme Atmosphäre",
      description:
        "Erleben Sie echte spanische Gastfreundschaft in einer gemütlichen, einladenden Umgebung, die perfekt für jeden Anlass ist.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#134e4a]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#134e4a] to-[#0f3a36] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Über <span className="text-primary">BOCADO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Bringt 2025 authentische spanische Aromen ins Herz von Berlin
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#134e4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#feaa3f] to-[#fbbf24]">
                {/* Add your restaurant image here */}
                {/* <img src="/images/restaurant.jpg" alt="BOCADO Restaurant" className="w-full h-full object-cover" /> */}
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-center">
                  <FaUtensils className="h-32 w-32 mx-auto mb-4 opacity-70" />
                  <p className="text-lg font-semibold">BOCADO Berlin</p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 text-[#feaa3f]">Our Story</h2>
              <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
                <p>
                  BOCADO Berlin hat im November 2025 seine Türen geöffnet – mit einer einfachen Mission: den
                  authentischen Geschmack Spaniens nach Berlin zu bringen. Gegründet von Ashik Ahammed und
                  Main Uddin, sind wir schnell zu einem beliebten Ziel für Einheimische und Besucher geworden,
                  die echte spanische Küche genießen möchten.
                </p>
                <p>
                  Unser Name „BOCADO“ bedeutet auf Spanisch „ein Bissen“ oder „eine Kostprobe“ und spiegelt
                  perfekt unsere Philosophie wider: Wir servieren exquisite kleine Gerichte, die das Wesen der
                  spanischen kulinarischen Tradition einfangen. Jede Tapas-Spezialität wird mit Sorgfalt
                  zubereitet – nach traditionellen Rezepten und mit den besten Zutaten, die wir direkt aus
                  Spanien beziehen.
                </p>
                <p>
                  Im charmanten Berliner Stadtteil Reinickendorf, Am Dachsbau 12, haben wir einen warmen und
                  einladenden Ort geschaffen, an dem Freunde und Familien zusammenkommen können, um köstliches
                  Essen, guten Wein und unvergessliche Momente zu teilen. Unsere Leidenschaft ist es, jedem
                  Gast das Gefühl zu geben, in eine gemütliche Tapasbar im Herzen von Madrid oder Barcelona
                  eingetaucht zu sein.
                </p>
                <p>
                  Von unserer sorgfältig ausgewählten Vielfalt an kalten und warmen Tapas bis hin zu unseren
                  besonderen Signature-Gerichten wie Paella de Mariscos und Gambas al Ajillo – jedes unserer
                  Gerichte erzählt eine Geschichte von spanischer Tradition, Kultur und der Liebe zu gutem
                  Essen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-16 bg-[#0f3a36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Was macht uns <span className="text-[#feaa3f]">BESONDERS</span>
          </h2>
          <p className="text-center text-gray-200 text-lg mb-12 max-w-3xl mx-auto">
            Bei BOCADO setzen wir uns dafür ein, ein authentisches spanisches Esserlebnis zu bieten, das über
            großartiges Essen hinausgeht.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-[#134e4a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6 text-[#feaa3f]">Unsere Philosophie</h2>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                Bei BOCADO glauben wir, dass Essen mehr ist als nur Nahrung – es ist ein Fest von Kultur,
                Tradition und Gemeinsamkeit. Die spanische Küche basiert auf dem Prinzip des Teilens: Tapas
                werden gemeinsam mit Freunden und Familie genossen, rund um den Tisch gereicht, während
                Gespräche fließen und die Luft von Lachen erfüllt wird.
              </p>
              <p>
                Wir sind leidenschaftlich darum bemüht, die Authentizität der spanischen Küche zu bewahren und
                gleichzeitig eine einladende Atmosphäre für alle zu schaffen. Ob Sie ein langjähriger
                Liebhaber spanischer Küche sind oder sie zum ersten Mal probieren, wir möchten, dass Ihr
                Erlebnis bei BOCADO unvergesslich, köstlich und herzlich ist.
              </p>
              <p className="text-[#feaa3f] text-xl font-semibold italic">
                "Good food, good wine, good company—this is the Spanish way of life, and this is BOCADO."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-16 bg-[#0f3a36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Besuchen Sie
            <span className="text-[#feaa3f]">Uns</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MdLocationOn className="h-6 w-6 text-[#feaa3f] mt-1 shrink-0" />
                  <div className="text-gray-200">
                    <p className="font-semibold text-white">Adresse</p>
                    <p>Am Dachsbau 12</p>
                    <p>13503 Berlin, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MdPhone className="h-6 w-6 text-[#feaa3f] shrink-0" />
                  <div className="text-gray-200">
                    <p className="font-semibold text-white">Telefon</p>
                    <a href="tel:+493047036642" className="hover:text-[#feaa3f] transition-colors">
                      +49 30 47036642
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MdEmail className="h-6 w-6 text-[#feaa3f] shrink-0" />
                  <div className="text-gray-200">
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:bocadoberlin@gmail.com"
                      className="hover:text-[#feaa3f] transition-colors"
                    >
                      bocadoberlin@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MdAccessTime className="h-6 w-6 text-[#feaa3f] mr-2" />
                Öffnungszeiten
              </h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-semibold text-white">Montag - Donnerstag</span>
                  <span>11:00 - 23:00 Uhr</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-semibold text-white">Freitag - Samstag</span>
                  <span>11:00 - 24:00 Uhr</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-semibold text-white">Sonntag</span>
                  <span>11:00 - 22:00 Uhr</span>
                </div>
                <div className="mt-6 pt-4">
                  <p className="text-sm italic text-gray-300">
                    * Die Öffnungszeiten können an Feiertagen variieren. Wir empfehlen, insbesondere an
                    Wochenenden und besonderen Anlässen, im Voraus anzurufen, um Reservierungen vorzunehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#134e4a] to-[#0f3a36] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit, BOCADO zu erleben?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Begleiten Sie uns für ein unvergessliches kulinarisches Erlebnis. Kosten Sie die authentischen
            Aromen Spaniens hier in Berlin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-[#feaa3f] hover:bg-[#fbbf24] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Unsere Speisekarte
            </Link>
            {/* <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-[#134e4a] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200"
            >
              Make a Reservation
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
