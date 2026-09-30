import React, { useState } from 'react';
import { CursorMode } from './CustomCursor';
import { Mail, Instagram, Copy, Check, ArrowUpRight, Send } from 'lucide-react';

interface ContactNotebookViewProps {
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const ContactNotebookView: React.FC<ContactNotebookViewProps> = ({ setCursorMode }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Commercial Film & Photo',
    timeline: '',
    message: ''
  });

  const displayEmail = 'hello@ibraheem-salim.com';
  const actualEmail = 'ibraheem6salim@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(actualEmail);
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
        discipline: 'Commercial Film & Photo',
        timeline: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
      {/* Tape on top */}
      <div className="masking-tape masking-tape-yellow -top-3 left-1/2 -translate-x-1/2 w-36 -rotate-1" />

      {/* Notebook Final Page Container */}
      <div className="bg-white p-6 sm:p-12 border-4 border-neutral-900 shadow-2xl space-y-12">
        <div className="border-b-2 border-neutral-900 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
              NOTEBOOK PAGE 120 // FINAL SLATE
            </span>
            <h2 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-none">
              LET'S MAKE<br />SOMETHING.
            </h2>
          </div>
          <span className="font-hand text-3xl text-red-600 -rotate-3 block">
            "open for 2026 commissions" ✦
          </span>
        </div>

        {/* Disciplines Grid */}
        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold uppercase">
          <span className="bg-amber-300 text-neutral-950 px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            Commercial photography
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            Film &amp; Motion
          </span>
          <span className="bg-emerald-500 text-white px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            Visual direction
          </span>
          <span className="bg-neutral-900 text-white px-3 py-1 border border-black shadow-[2px_2px_0px_#000]">
            Creative collaborations
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 p-5 border-2 border-neutral-800 space-y-4 font-mono text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px]">EMAIL CONTACT</span>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`mailto:${actualEmail}`}
                    className="font-bold text-sm text-neutral-900 hover:text-blue-600"
                  >
                    {displayEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 border border-neutral-300 hover:border-black cursor-pointer"
                    title="Copy direct email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                    ✓ Copied {actualEmail} to clipboard!
                  </span>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-3">
                <span className="text-neutral-400 block text-[10px]">INSTAGRAM</span>
                <a
                  href="https://instagram.com/Ibraheem.sa1m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-neutral-900 hover:text-blue-600 inline-flex items-center gap-1 pt-1"
                >
                  <span>@Ibraheem.sa1m</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="border-t border-neutral-200 pt-3">
                <span className="text-neutral-400 block text-[10px]">STUDIO LOCATION</span>
                <p className="text-neutral-800 font-semibold pt-1">
                  Baghdad, Iraq (Available for regional &amp; international travel)
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-3">
                <span className="text-neutral-400 block text-[10px]">WEBSITE ARCHIVE</span>
                <p className="text-neutral-600 pt-1">
                  ibraheem-salim.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-[#fdfcf7] p-6 sm:p-8 border-2 border-neutral-900 shadow-[4px_4px_0px_#000]">
            <h3 className="font-display text-xl font-bold uppercase text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
              DIRECT PROJECT BRIEF
            </h3>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-black">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg">BRIEF SENT</h4>
                <p className="font-mono text-xs text-neutral-600 max-w-sm mx-auto">
                  Thank you. Your message has been logged. Ibraheem will review your reference notes and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase">
                      NAME / CLIENT *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Studio / Brand"
                      className="w-full bg-white border border-neutral-400 px-3 py-2 text-xs font-mono text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white border border-neutral-400 px-3 py-2 text-xs font-mono text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase">
                      DISCIPLINE
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-white border border-neutral-400 px-3 py-2 text-xs font-mono text-neutral-900 focus:border-black focus:outline-none cursor-pointer"
                    >
                      <option value="Commercial Film & Photo">Commercial Film &amp; Photo</option>
                      <option value="Brand Film & Visual Direction">Brand Film &amp; Visual Direction</option>
                      <option value="Commercial Photography">Commercial Photography</option>
                      <option value="Documentary Short">Documentary Short</option>
                      <option value="Creative Direction">Creative Direction</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase">
                      TIMELINE
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="e.g. Q4 / Next Month"
                      className="w-full bg-white border border-neutral-400 px-3 py-2 text-xs font-mono text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-[10px] text-neutral-500 uppercase">
                    PROJECT SCOPE &amp; NOTES *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your concept, deliverables, shoot location, or visual tone..."
                    className="w-full bg-white border border-neutral-400 px-3 py-2 text-xs font-mono text-neutral-900 focus:border-black focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => setCursorMode('arrow')}
                  onMouseLeave={() => setCursorMode('default')}
                  className="w-full bg-neutral-900 text-white font-mono text-xs font-bold uppercase py-3 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-amber-300 hover:text-neutral-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SEND BRIEF</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
