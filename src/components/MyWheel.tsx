import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PrizePopup from "./PrizePopup";
import { wheelTheme } from "@/components/theme/wheelTheme";

interface WheelOption {
  option: string;
}

const data = wheelTheme.wheelOptions.map((option, index) => ({
  option,
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

export default function CenteredWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // Popup
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentPrize, setCurrentPrize] = useState("");

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
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
              // Colors imported from the theme
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
