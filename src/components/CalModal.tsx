import React, { useState, useEffect } from 'react';
import { X, Calendar, Settings, ExternalLink, Check, Clock, Sparkles } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCalLink?: string;
}

const LOCAL_STORAGE_CAL_KEY = 'amog_portfolio_cal_link';

export const CalModal: React.FC<CalModalProps> = ({ isOpen, onClose, defaultCalLink = 'amog-rao-hnd3vf/30min' }) => {
  const [calLink, setCalLink] = useState<string>(() => {
    return localStorage.getItem(LOCAL_STORAGE_CAL_KEY) || defaultCalLink;
  });
  const [isEditingLink, setIsEditingLink] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>(calLink);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    (async function () {
      try {
        const cal = await getCalApi();
        cal('ui', {
          theme: 'dark',
          styles: { branding: { brandColor: '#14b8a6' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.warn('Cal API initialize warning:', err);
      }
    })();
  }, [isOpen]);

  // Clean link input if user enters full URL like https://cal.com/amograo
  const cleanCalLink = (raw: string) => {
    return raw
      .trim()
      .replace(/^https?:\/\/(www\.)?cal\.com\//i, '')
      .replace(/^\/+|\/+$/g, '');
  };

  const handleSaveLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = cleanCalLink(inputVal) || 'amograo/15min';
    setCalLink(cleaned);
    setInputVal(cleaned);
    localStorage.setItem(LOCAL_STORAGE_CAL_KEY, cleaned);
    setIsEditingLink(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (!isOpen) return null;

  const currentCleaned = cleanCalLink(calLink);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="calcom-modal-container"
        className="bg-[#0c0e18] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl shadow-black/80 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white">Book a 1:1 Call with Amog</h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20">
                  <Sparkles className="w-3 h-3" />
                  Cal.com Powered
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Pick a convenient time for a quick 15 or 30 min chat or technical discussion.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditingLink(!isEditingLink)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
              title="Configure your Cal.com link"
            >
              <Settings className="w-4 h-4 text-neutral-400" />
              <span className="hidden md:inline">Configure Link</span>
            </button>

            <button
              id="calcom-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Setup / Configuration Panel */}
        {isEditingLink && (
          <div className="px-5 sm:px-7 py-4 bg-teal-950/30 border-b border-teal-500/20 text-xs text-neutral-300">
            <form onSubmit={handleSaveLink} className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="font-semibold text-teal-300">Your Cal.com Link or Username:</span>
                  <p className="text-[11px] text-neutral-400">
                    Enter your Cal.com username (e.g. <code className="text-white bg-black/40 px-1 py-0.5 rounded">amograo</code>) or event link (e.g. <code className="text-white bg-black/40 px-1 py-0.5 rounded">amograo/15min</code>).
                  </p>
                </div>
                <a
                  href="https://cal.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline inline-flex items-center gap-1 text-[11px]"
                >
                  Create free account on Cal.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-xs">
                    cal.com/
                  </span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="amograo or amograo/15min"
                    className="w-full bg-black/50 border border-white/20 rounded-xl pl-20 pr-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Save Link
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingLink(false)}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Feedback if saved */}
        {savedSuccess && (
          <div className="px-5 py-2 bg-emerald-950/40 border-b border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>Cal.com link updated to <strong>cal.com/{calLink}</strong>!</span>
          </div>
        )}

        {/* Quick Guide Banner */}
        <div className="px-5 sm:px-7 py-2.5 bg-white/[0.02] border-b border-white/5 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>Current target: <strong className="text-white font-mono">cal.com/{currentCleaned}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`https://cal.com/${currentCleaned}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 hover:underline"
            >
              Open in new tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Cal.com Embed Container */}
        <div className="flex-1 min-h-[500px] max-h-[68vh] overflow-y-auto bg-[#080910] p-1 sm:p-2">
          <Cal
            key={currentCleaned}
            calLink={currentCleaned}
            style={{ width: '100%', height: '100%', minHeight: '520px', overflow: 'scroll' }}
            config={{ layout: 'month_view', theme: 'dark' }}
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-neutral-400">
          <span>Synced with your Google/Outlook calendar via Cal.com</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
