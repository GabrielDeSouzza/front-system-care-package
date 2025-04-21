'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BottomRightModalProps = {
  show: boolean;
  message: string;
  onClose?: () => void;
  duration?: number;
  hasError?: boolean;
  hasSucess?: boolean;
};

export default function BottomRightModal({
  show,
  message,
  onClose,
  duration = 3000,
  hasError,
  hasSucess,
}: BottomRightModalProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    if (show && duration) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [show, duration, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`${(hasError && 'bg-red-300') || (hasSucess && 'bg-green-300') || 'bg-white'}  shadow-xl rounded-xl p-4 border border-gray-200 min-w-[250px] max-w-xs`}
          >
            <p className="text-gray-800 text-sm">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
