import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Videography',
    timeline: '',
    message: ''
  });

  const emailAddress = 'ibraheem6salim@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Commercial Videography',
        timeline: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left Column: Headline and Direct Channels */}
        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-4">
            <span className="block text-xs uppercase tracking-widest text-white/50">
              Inquiries &amp; Collaborations
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-lg font-light leading-relaxed">
              For commercial projects, photography, film, visual direction or creative collaborations.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            {/* Email with copy button */}
            <div className="space-y-1">
              <span className="block text-[11px] uppercase tracking-widest text-white/40">
                Direct Email
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-display text-lg md:text-xl font-semibold text-white hover:text-white/80 transition-colors"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              {copied && (
                <span className="text-[11px] text-emerald-400 font-medium">
                  Email copied to clipboard.
                </span>
              )}
            </div>

            {/* Instagram */}
            <div className="space-y-1">
              <span className="block text-[11px] uppercase tracking-widest text-white/40">
                Instagram
              </span>
              <a
                href="https://instagram.com/Ibraheem.sa1m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-lg md:text-xl font-semibold text-white hover:text-white/80 transition-colors"
              >
                <span>@Ibraheem.sa1m</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Portfolio Web */}
            <div className="space-y-1">
              <span className="block text-[11px] uppercase tracking-widest text-white/40">
                Portfolio Web
              </span>
              <a
                href="https://ibraheem-salim.com"
                className="font-mono text-sm text-white/70 hover:text-white transition-colors"
              >
                ibraheem-salim.com
              </a>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <span className="block text-[11px] uppercase tracking-widest text-white/40">
                Studio Location
              </span>
              <p className="text-sm text-white/80 font-medium">
                Baghdad, Iraq · Available for global &amp; regional travel
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Commercial Inquiry Form */}
        <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 p-8 md:p-10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
              Project Brief
            </h3>
            <p className="text-xs text-white/50 mt-1">
              Share details regarding your upcoming campaign or visual commission.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                Message Received
              </h4>
              <p className="text-xs text-white/60 max-w-sm mx-auto">
                Thank you. Your inquiry has been forwarded to Ibraheem. We will review your project brief and get in touch promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-white/50">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Studio / Brand Name"
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-white/50">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-white/50">
                    Discipline / Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Commercial Videography">Commercial Videography</option>
                    <option value="Commercial Photography">Commercial Photography</option>
                    <option value="Brand Film & Visual Direction">Brand Film &amp; Visual Direction</option>
                    <option value="Product & Lifestyle Stills">Product &amp; Lifestyle Stills</option>
                    <option value="Documentary / Cultural">Documentary / Cultural</option>
                    <option value="Creative Consultation">Creative Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-white/50">
                    Target Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. Next Month / Q4"
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-wider text-white/50">
                  Project Brief &amp; Scope *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your concept, deliverables, shoot locations, or visual reference notes..."
                  className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Send Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
