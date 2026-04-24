import React, { useState } from "react";
import { motion } from "motion/react";
import { Lock, Mail, X } from "lucide-react";
import Image from "next/image";

interface IProps {
  open: boolean;
  onClose: () => void;
}

type stepType = "login" | "signup" | "otp";
const AuthModal = ({ open, onClose }: IProps) => {
  const [step, setStep] = useState<stepType>("login");

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
                <Image src="/google.png" width={20} height={20} alt="google" />
                Continue with Google
              </button>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-black/10" />
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-px bg-black/10" />
              </div>

              {/* {step === 'login' && <Login />} */}
              {step === "login" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h1 className="text-xl font-semibold">Welcome Back</h1>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                      <Mail size={18} className="text-gray-500" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent outline-none text-sm"
                      />
                    </div>

                    <div className="flex items-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                      <Lock size={18} className="text-gray-500" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-transparent outline-none text-sm"
                      />
                    </div>

                    <button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition cursor-pointer">
                      Login
                    </button>
                  </div>

                  <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?
                    <span
                      className="text-black hover:underline cursor-pointer font-medium block"
                      onClick={() => setStep("signup")}
                    >
                      Sign Up
                    </span>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default AuthModal;
