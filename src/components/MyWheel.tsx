import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PrizePopup from "./PrizePopup";
import { wheelTheme } from "@/components/theme/wheelTheme";

interface WheelOption {
  option: string;
  weight?: number; // Nuevo: peso opcional
}

// Convertimos wheelTheme.wheelOptions en formato con estilo
const data = wheelTheme.wheelOptions.map((item: any, index: number) => ({
  option: typeof item === "string" ? item : item.option,
  weight: typeof item === "string" ? 1 : item.weight ?? 1, // peso por defecto 1
  style: {
    backgroundColor:
      wheelTheme.wheelColors.backgroundColors[
        index % wheelTheme.wheelColors.backgroundColors.length
      ],
    textColor:
      wheelTheme.wheelColors.textColors[
        index % wheelTheme.wheelColors.textColors.length
      ],
  },
}));

// Función para elegir índice basado en peso
function getWeightedRandomIndex(items: { weight: number }[]) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++) {
    if (random < items[i].weight) return i;
    random -= items[i].weight;
  }
  return 0; // fallback
}

export default function CenteredWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // Popup
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentPrize, setCurrentPrize] = useState("");

  const handleSpinClick = () => {
    const newPrizeNumber = getWeightedRandomIndex(data);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setCurrentPrize(data[prizeNumber].option);
    setPopupOpen(true);
  };

  return (
    <>
      {/* Container roulette */}
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl backdrop-blur-md bg-white/20 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={handleStopSpinning}
              backgroundColors={wheelTheme.wheelColors.backgroundColors}
              textColors={wheelTheme.wheelColors.textColors}
              outerBorderColor={wheelTheme.wheelColors.borderColor}
              outerBorderWidth={10}
              innerRadius={10}
              radiusLineColor="#444"
              radiusLineWidth={2}
              fontSize={14}
            />
          </div>

          <Button
            className="mt-6"
            onClick={handleSpinClick}
            disabled={mustSpin}
          >
            {mustSpin ? "Spinning..." : "Spin"}
          </Button>
        </div>
      </div>

      {/* Prize popup */}
      <PrizePopup
        prize={currentPrize}
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
}
