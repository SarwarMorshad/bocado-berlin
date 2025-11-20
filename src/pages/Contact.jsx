// import { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";

const Contact = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     date: "",
  //     time: "",
  //     guests: "2",
  //     message: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // TODO: Implement actual form submission logic
  //     console.log("Form submitted:", formData);
  //     toast.success("Reservation request sent! We'll contact you soon.");

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       date: "",
  //       time: "",
  //       guests: "2",
  //       message: "",
  //     });
  //   };

  return (
    <>
      <Helmet>
        <title>Kontakt</title>
        <meta
          name="description"
          content="Nehmen Sie Kontakt mit BOCADO auf für Reservierungen, Anfragen oder Feedback. Wir freuen uns, von Ihnen zu hören!"
        />
      </Helmet>
      <div className="min-h-screen bg-[#134e4a]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#134e4a] to-[#0f3a36] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontaktieren Sie Uns</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Wir würden gerne von Ihnen hören. Machen Sie eine Reservierung oder nehmen Sie Kontakt mit uns
                auf!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-[#134e4a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Location */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                  <MdLocationOn className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Standort</h3>
                <p className="text-gray-200 text-sm">Am Dachsbau 12</p>
                <p className="text-gray-200 text-sm">13503 Berlin</p>
              </div>

              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                  <MdPhone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                <a
                  href="tel:+493047036642"
                  className="text-gray-200 hover:text-[#feaa3f] transition-colors text-sm"
                >
                  +49 30 47036642
                </a>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                  <MdEmail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:bocadoberlin@gmail.com"
                  className="text-gray-200 hover:text-[#feaa3f] transition-colors text-sm break-all"
                >
                  bocadoberlin@gmail.com
                </a>
              </div>

              {/* Hours */}
              {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                <MdAccessTime className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Öffnungszeiten</h3>
              <p className="text-gray-200 text-sm">Mo-Do: 11:00-23:00</p>
              <p className="text-gray-200 text-sm">Fr-Sa: 11:00-23:00 Uhr</p>
            </div> */}
            </div>

            {/* Main Content: Form and Map */}
            <div className="grid lg:grid-cols-1 gap-8">
              {/* Reservation Form - COMMENTED OUT FOR LATER */}
              {/* 
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Make a Reservation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors"
                    placeholder="+49 123 456 7890"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-white font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#feaa3f] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-white font-medium mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#feaa3f] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-white font-medium mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#feaa3f] transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="9">9+ Guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors resize-none"
                    placeholder="Any dietary restrictions, special occasions, or other requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#feaa3f] hover:bg-[#fbbf24] text-white py-3.5 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Submit Reservation
                </button>

                <p className="text-sm text-gray-300 text-center mt-4">
                  We'll confirm your reservation via email or phone within 24 hours.
                </p>
              </form>
            </div>
            */}

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden h-80">
                  {/* Google Maps Embed - Replace with your actual map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.8474447996747!2d13.289699776860047!3d52.58686197207733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e5c8c9e5e5%3A0x8c9d9c8d9c8d9c8d!2sAm%20Dachsbau%2012%2C%2013503%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BOCADO Berlin Location"
                  ></iframe>
                </div>

                {/* Opening Hours Card */}
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
                      <span>11:00 - 23:00 Uhr</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="font-semibold text-white">Sonntag</span>
                      <span>11:00 - 23:00 Uhr</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Folge Uns</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61580057680833"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#feaa3f] hover:bg-[#fbbf24] rounded-full transition-colors duration-200"
                    >
                      <FaFacebookF className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/bocado.berlin?igsh=emZlN2cxcDYwY244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#feaa3f] hover:bg-[#fbbf24] rounded-full transition-colors duration-200"
                    >
                      <FaInstagram className="h-5 w-5 text-white" />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm mt-4">
                    Folgen Sie uns auf Social Media, um die neuesten Updates, Angebote und köstlichen Gerichte
                    zu entdecken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#0f3a36]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Häufig Gestellte <span className="text-[#feaa3f]">Fragen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Brauche ich eine Reservierung?</h3>
                <p className="text-gray-200">
                  Während Walk-Ins willkommen sind, empfehlen wir dringend, insbesondere an Wochenenden und
                  Feiertagen, eine Reservierung vorzunehmen, um sicherzustellen, dass wir einen Tisch für Sie
                  bereit haben.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Berücksichtigen Sie diätetische Einschränkungen?
                </h3>
                <p className="text-gray-200">
                  Ja! Wir bieten vegetarische und glutenfreie Optionen an. Bitte informieren Sie uns bei der
                  Reservierung über etwaige diätetische Einschränkungen, und wir werden diese gerne
                  berücksichtigen.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Bieten Sie private Speisen oder Veranstaltungen an?
                </h3>
                <p className="text-gray-200">
                  Ja! Wir können private Feiern und besondere Veranstaltungen ausrichten. Bitte rufen Sie uns
                  unter +49 30 47036642 an oder senden Sie uns eine E-Mail, um Ihre Anforderungen zu
                  besprechen.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Gibt es Parkmöglichkeiten?</h3>
                <p className="text-gray-200">
                  In der Nähe gibt es Parkmöglichkeiten auf der Straße. Wir sind auch gut mit öffentlichen
                  Verkehrsmitteln erreichbar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
