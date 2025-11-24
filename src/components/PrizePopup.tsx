
import { wheelTheme } from "@/components/theme/wheelTheme";

interface PrizePopupProps {
  prize: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PrizePopup({ prize, isOpen, onClose }: PrizePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div
        className="rounded-2xl shadow-2xl p-6 w-full max-w-xs sm:max-w-sm text-center animate-scaleIn"
        style={{
          backgroundColor: wheelTheme.popup.background,
          color: wheelTheme.popup.textColor
        }}
      >
        <h2 className="text-2xl font-bold mb-3">
          Congratulations!
        </h2>

        <p className="text-lg font-semibold mb-6">
          {prize}
        </p>

        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-300 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
