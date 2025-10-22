import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Project Inquiry');
    const body = encodeURIComponent(`Hi, my name is ${form.name}.\n\n${form.message}\n\nYou can reach me at ${form.email}.`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
            <Mail size={18} />
          </span>
          <div>
            <h3 className="text-xl font-semibold">Let’s build something great</h3>
            <p className="text-sm text-white/70">Tell me about your project and timeline. I’ll get back within 24 hours.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
              placeholder="What are we building? Budget, scope, and your ideal timeline."
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/50">By submitting, you’ll open your email client with a pre-filled message.</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
