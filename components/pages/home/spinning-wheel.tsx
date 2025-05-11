import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface SpinningWheelProps {
  isSpinning: boolean;
  currentPlayer: string | null;
  currentQuestion: string | null;
  onWheelClick: () => void;
}

export function SpinningWheel({ isSpinning, currentPlayer, currentQuestion, onWheelClick }: SpinningWheelProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isSpinning) {
      controls.start({
        rotate: [0, 360],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isSpinning, controls]);

  return (
    <div className="relative w-full aspect-square max-w-[24rem] mx-auto mb-6">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary cursor-pointer hover:border-primary/80 transition-colors"
        animate={controls}
        style={{ transformOrigin: "center" }}
        onClick={onWheelClick}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {currentPlayer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xl font-bold mb-2 px-2"
              >
                {currentPlayer}
              </motion.div>
            )}
            {currentQuestion && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-md px-2">
                {currentQuestion}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
