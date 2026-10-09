import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Check, RefreshCw, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newUrl: string) => void;
}

// Compress image to ensure it fits safely in persistent storage
const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxDimension) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else if (height > maxDimension) {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(readerEvent.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // High quality JPEG compression
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image for compression'));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentAvatar);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPreviewUrl(currentAvatar);
      setSaveSuccess(false);
    }
  }, [isOpen, currentAvatar]);

  if (!isOpen) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      try {
        const compressedUrl = await compressImage(file);
        setPreviewUrl(compressedUrl);
      } catch (err) {
        console.error('Error compressing uploaded photo:', err);
        // Fallback to direct dataURL
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setPreviewUrl(reader.result);
          }
        };
        reader.readAsDataURL(file);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleUrlApply = () => {
    if (customUrl.trim()) {
      setPreviewUrl(customUrl.trim());
    }
  };

  const handleSave = () => {
    onSaveAvatar(previewUrl);
    setSaveSuccess(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleResetDefault = () => {
    setPreviewUrl(PERSONAL_INFO.defaultAvatar);
  };

  return (
    <div 
      id="photo-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="photo-modal-content"
        className="bg-[#0c0e18] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-white/15 p-6 sm:p-8 my-auto animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio Profile Photo</h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Saved permanently across refreshes and devices
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Preview */}
        <div className="py-6 flex flex-col items-center justify-center">
          <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-teal-500 shadow-md relative group bg-neutral-900">
            <img 
              src={previewUrl} 
              alt="Avatar Preview" 
              className="w-full h-full object-cover object-[center_22%]"
              referrerPolicy="no-referrer"
            />
            {isProcessing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white text-xs font-semibold">
                Optimizing...
              </div>
            )}
          </div>
          <span className="text-xs text-neutral-400 font-medium mt-2">
            {saveSuccess ? (
              <span className="text-emerald-400 font-bold inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Photo Saved Permanently!
              </span>
            ) : (
              "Permanent Profile Photo"
            )}
          </span>
        </div>

        {/* Upload & Preset Options */}
        <div className="space-y-4">
          
          {/* Authentic WhatsApp Photo Preset */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Default Photo:
            </label>
            <div className="w-full">
              <button
                type="button"
                onClick={() => setPreviewUrl(PERSONAL_INFO.defaultAvatar)}
                className={`w-full p-2.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  previewUrl === PERSONAL_INFO.defaultAvatar 
                    ? 'border-teal-500 bg-teal-950/40 text-teal-300 font-semibold' 
                    : 'border-white/10 hover:border-white/20 text-neutral-300 bg-white/[0.03]'
                }`}
              >
                <img 
                  src={PERSONAL_INFO.defaultAvatar} 
                  alt="Amog Rao Real Photo" 
                  className="w-10 h-10 rounded-lg object-cover object-[center_22%]"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Original Real Photo</span>
                  <span className="text-[11px] text-neutral-400 font-normal">Your authentic uploaded WhatsApp photo</span>
                </div>
              </button>
            </div>
          </div>

          {/* File Upload Button */}
          <div>
            <input 
              type="file" 
              ref={fileInputRef} 
              accept="image/*" 
              onChange={handleFileChange} 
              className="hidden" 
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className="w-full py-2.5 px-4 rounded-2xl border-2 border-dashed border-white/20 hover:border-teal-400 hover:bg-white/5 text-neutral-300 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Upload className="w-4 h-4 text-teal-400" />
              <span>{isProcessing ? 'Optimizing photo...' : 'Upload New Photo from Device / WhatsApp'}</span>
            </button>
          </div>

          {/* Or Paste Image URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Or Image URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/my-photo.jpg"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-white/15 bg-white/5 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={handleUrlApply}
                className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer border border-white/10"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Reset to AI Studio default */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleResetDefault}
              className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to default</span>
            </button>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:bg-white/10 hover:text-white rounded-full transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isProcessing}
            className="bg-teal-500 hover:bg-teal-400 text-neutral-950 px-5 py-2.5 text-xs font-bold rounded-full shadow-xs active:scale-95 transition-all inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Save & Keep Permanently</span>
          </button>
        </div>

      </div>
    </div>
  );
};

