import { useState, useRef } from "react";
import { MdCalendarToday, MdAccessTime, MdPeople, MdRestaurant } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    time: null,
    guests: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     // Map form field names to state keys
  //     const stateKeyMap = {
  //       user_name: "name",
  //       user_email: "email",
  //       user_phone: "phone",
  //       guests_number: "guests",
  //       special_requests: "message",
  //     };

  //     const stateKey = stateKeyMap[name] || name;

  //     setFormData({
  //       ...formData,
  //       [stateKey]: value,
  //     });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate date and time are selected
    if (!formData.date || !formData.time) {
      toast.error("Bitte wählen Sie Datum und Uhrzeit aus.", {
        duration: 4000,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Format date and time
      const formattedDate = formData.date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const formattedTime = formData.time.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      // Update ALL hidden form fields with current state values
      const form = formRef.current;
      form.querySelector('[name="user_name"]').value = formData.name;
      form.querySelector('[name="user_email"]').value = formData.email;
      form.querySelector('[name="user_phone"]').value = formData.phone;
      form.querySelector('[name="guests_number"]').value = formData.guests;
      form.querySelector('[name="special_requests"]').value = formData.message || "Keine besonderen Wünsche";
      form.querySelector('[name="reservation_date"]').value = formattedDate;
      form.querySelector('[name="reservation_time"]').value = formattedTime;

      // Send Email #1 to Customer using sendForm
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send Email #2 to Restaurant using sendForm
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_RESTAURANT,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Success!
      toast.success("Reservierung erfolgreich gesendet! Vielen Dank. 🎉", {
        duration: 5000,
        icon: "✅",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: null,
        time: null,
        guests: "2",
        message: "",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Fehler beim Senden. Bitte rufen Sie uns an: +49 30 47036642", {
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#134e4a]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#134e4a] to-[#0f3a36] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tisch Reservieren</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Sichern Sie sich Ihren Platz für ein unvergessliches kulinarisches Erlebnis
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-[#134e4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {/* Quick Info Cards */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                <MdCalendarToday className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Täglich Geöffnet</h3>
              <p className="text-gray-200 text-sm">12:00 - 22:00 Uhr</p>
              <p className="text-gray-200 text-sm">Jeden Tag</p>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                <MdAccessTime className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Schnelle Bestätigung</h3>
              <p className="text-gray-200 text-sm">Anruf innerhalb von</p>
              <p className="text-gray-200 text-sm">24 Stunden</p>
            </div> */}

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                <MdPeople className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Für Alle Größen</h3>
              <p className="text-gray-200 text-sm">Einzelpersonen bis</p>
              <p className="text-gray-200 text-sm">große Gruppen</p>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#feaa3f] rounded-full mb-4">
                <MdRestaurant className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Authentische Küche</h3>
              <p className="text-gray-200 text-sm">Spanische Tapas</p>
              <p className="text-gray-200 text-sm">& Spezialitäten</p>
            </div> */}
          </div>

          {/* Main Reservation Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Reservierungsanfrage</h2>
                <p className="text-gray-200">
                  Füllen Sie das Formular aus und wir werden Sie telefonisch kontaktieren, um Ihre
                  Reservierung zu bestätigen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                {/* Hidden inputs for all fields - these will be populated on submit */}
                <input type="hidden" name="user_name" />
                <input type="hidden" name="user_email" />
                <input type="hidden" name="user_phone" />
                <input type="hidden" name="guests_number" />
                <input type="hidden" name="special_requests" />
                <input type="hidden" name="reservation_date" />
                <input type="hidden" name="reservation_time" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50"
                      placeholder="ihre.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                </div>

                {/* Date, Time, and Guests */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-white font-medium mb-2">
                      Datum *
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) => setFormData({ ...formData, date })}
                      dateFormat="dd.MM.yyyy"
                      minDate={new Date()}
                      placeholderText="Datum auswählen"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50"
                      calendarClassName="custom-datepicker"
                      wrapperClassName="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-white font-medium mb-2">
                      Uhrzeit *
                    </label>
                    <DatePicker
                      selected={formData.time}
                      onChange={(time) => setFormData({ ...formData, time })}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Zeit"
                      dateFormat="HH:mm"
                      placeholderText="Uhrzeit auswählen"
                      required
                      disabled={isSubmitting}
                      minTime={new Date().setHours(12, 0, 0, 0)}
                      maxTime={new Date().setHours(22, 0, 0, 0)}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50"
                      calendarClassName="custom-datepicker"
                      wrapperClassName="w-full"
                    />
                    <p className="text-primary text-xs mt-2">Öffnungszeiten: 12:00 - 22:00 Uhr</p>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-white font-medium mb-2">
                      Anzahl Gäste *
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#feaa3f] transition-colors disabled:opacity-50 [&>option]:bg-[#134e4a] [&>option]:text-white"
                    >
                      <option value="1">1 Gast</option>
                      <option value="2">2 Gäste</option>
                      <option value="3">3 Gäste</option>
                      <option value="4">4 Gäste</option>
                      <option value="5">5 Gäste</option>
                      <option value="6">6 Gäste</option>
                      <option value="7">7 Gäste</option>
                      <option value="8">8 Gäste</option>
                      <option value="9">9 Gäste</option>
                      <option value="10">10 Gäste</option>
                      <option value="11">11 Gäste</option>
                      <option value="12">12 Gäste</option>
                      <option value="13">13 Gäste</option>
                      <option value="14">14 Gäste</option>
                      <option value="15">15 Gäste</option>
                      <option value="16">16 Gäste</option>
                      <option value="17">17 Gäste</option>
                      <option value="18">18 Gäste</option>
                      <option value="19">19 Gäste</option>
                      <option value="20">20 Gäste</option>
                      <option value="21">21 Gäste</option>
                      <option value="22">22 Gäste</option>
                      <option value="23">23 Gäste</option>
                      <option value="24">24 Gäste</option>
                      <option value="25">25 Gäste</option>
                      <option value="26">26 Gäste</option>
                      <option value="27">27 Gäste</option>
                      <option value="28">28 Gäste</option>
                      <option value="29">29 Gäste</option>
                      <option value="30">30 Gäste</option>
                    </select>
                    <p className="text-primary text-xs mt-2">
                      Für mehr als 30 Gäste oder um das ganze Restaurant zu buchen, rufen Sie uns bitte an.
                    </p>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Besondere Wünsche (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#feaa3f] transition-colors resize-none disabled:opacity-50"
                    placeholder="Diätetische Einschränkungen, besondere Anlässe oder andere Wünsche..."
                  ></textarea>
                </div>

                {/* Large Group Notice */}
                <div className="bg-[#fbbf24]/20 border-l-4 border-[#fbbf24] p-4 rounded">
                  <p className="text-white text-sm">
                    <strong>🎉 Große Gruppe oder ganzes Restaurant buchen?</strong> Für Reservierungen über 30
                    Personen oder um das gesamte Restaurant für eine private Veranstaltung zu buchen, rufen
                    Sie uns bitte direkt an:{" "}
                    <a href="tel:+493047036642" className="text-[#feaa3f] font-bold underline">
                      +49 30 47036642
                    </a>
                  </p>
                </div>

                {/* Important Notes */}
                <div className="bg-[#feaa3f]/20 border-l-4 border-[#feaa3f] p-4 rounded">
                  <p className="text-white text-sm">
                    <strong>📞 Erinnerung:</strong> Wir können Sie vor Ihrem Reservierungstag anrufen, um Sie
                    daran zu erinnern. Bitte stellen Sie sicher, dass Ihre Telefonnummer korrekt ist.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#feaa3f] hover:bg-[#fbbf24] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <MdCalendarToday className="h-5 w-5" />
                      Reservierung Absenden
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-300 text-center">
                  Ihre Reservierung wird nach dem Absenden direkt gespeichert. Wir freuen uns auf Ihren
                  Besuch!
                </p>
              </form>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Direkt Kontaktieren</h3>
              <div className="space-y-4">
                <p className="text-gray-200">Bevorzugen Sie einen Anruf? Rufen Sie uns direkt an:</p>
                <a
                  href="tel:+493047036642"
                  className="block bg-[#feaa3f] hover:bg-[#fbbf24] text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 +49 30 47036642
                </a>
                <p className="text-gray-300 text-sm">Öffnungszeiten: 12:00-22:00 Uhr, Täglich</p>
              </div>
            </div>

            {/* Why Book */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Warum Reservieren?</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#feaa3f] text-xl">✓</span>
                  <span>Garantierter Tischplatz zur gewünschten Zeit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#feaa3f] text-xl">✓</span>
                  <span>Besondere Wünsche können berücksichtigt werden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#feaa3f] text-xl">✓</span>
                  <span>Kein Warten, besonders an Wochenenden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#feaa3f] text-xl">✓</span>
                  <span>Perfekt für besondere Anlässe und Gruppen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
