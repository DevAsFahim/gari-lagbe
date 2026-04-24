import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal = ({ open, onClose }: IProps) => {
  return (
    <>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            className="fixed inset-0 z-90 bg-black/80 backdrop-blur-md "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-100 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-md rounded-3xl bg-white border border-black/10 shadow-[0_40px_100px_rgba(0,0,0,0.35)] p-6 sm:p-8">
              <div className="absolute right-4 top-4 text-gray-500 hover:text-black transition">
                <X size={20} />
              </div>

              <div className="mb-6 text-center">
                <h1 className="text-3xl font-extrabold tracking-widest">
                  Gari Lagbe
                </h1>
                <p className="text-xs mt-1 text-gray-500">
                  Premium Vehicle Booking
                </p>
              </div>

              <button className="w-full h-11 rounded-xl border border-black/20 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-black hover:text-white transition cursor-pointer">
              <Image src="/google.png" width={20} height={20} alt="google"/>
              Continue with Google
              </button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default AuthModal;
