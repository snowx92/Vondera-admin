import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface ToastProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function Toast({ message, onConfirm, onCancel }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onCancel();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onCancel]);

  const handleCancel = () => {
    setIsVisible(false);
    onCancel();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="w-96 bg-white rounded-lg shadow-lg border border-gray-100 p-4 transform transition-all duration-300 ease-in-out">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-500" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {message}
                </p>
              </div>

              <button 
                onClick={handleCancel}
                className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-500 rounded-lg p-1.5 inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-end gap-3">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="h-9 px-4 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={onConfirm}
                className="h-9 px-4 text-sm font-medium bg-red-500 hover:bg-red-600 text-white"
              >
                Confirm
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
