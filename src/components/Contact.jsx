import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/mldqgdgw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#060b1b] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="p-6 bg-[#0a122d] shadow-xl border border-gray-800 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">
            Let’s build something great. I’m open to full-time roles,
            internships, freelance work and collaborations.
          </p>

          <div className="space-y-4">
            <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-sky-400 text-lg">📧</span>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:danushirathnayaka2001@gmail.com"
                      className="font-medium text-slate-50 hover:text-sky-400 transition-colors"
                    >
                      danushirathnayaka2001@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-sky-400 text-lg">📱</span>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href="tel:0783901901"
                      className="font-medium text-slate-50 hover:text-sky-400 transition-colors"
                    >
                      078 390 1901
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-sky-400 text-lg">🐙</span>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/Danu20019"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-50 hover:text-sky-400 transition-colors break-all"
                    >
                      github.com/Danu20019
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-sky-400 text-lg">💼</span>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/danushi-rathnayaka-34301b264/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-50 hover:text-sky-400 transition-colors break-all"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              </ul>
            </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-[#0a122d] shadow-xl border border-gray-800 rounded-xl space-y-4"
        >
          <h3 className="text-3xl font-semibold mb-4">Send me a message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-[#0e183b] border border-gray-600 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-[#0e183b] border border-gray-600 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-[#0e183b] border border-gray-600 outline-none"
            required
          ></textarea>

          {/* SEND BUTTON */}
          <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 hover:from-sky-400 hover:via-indigo-400 hover:to-fuchsia-400 transition-all"
              >
            Send message
          </button>

          {/* STATUS MESSAGES */}
          {status === "sending" && (
            <p className="text-yellow-400 text-sm">Sending message...</p>
          )}
          {status === "success" && (
            <p className="text-green-400 text-sm">Message sent successfully ✔</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">Failed to send. Try again.</p>
          )}
        </form>

      </div>
    </section>
  );
}
