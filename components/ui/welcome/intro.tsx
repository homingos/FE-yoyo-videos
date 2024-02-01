
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import FlamLoading from "../flam-loading";

export default function Intro() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let timeout = setTimeout(() => {
        setLoading(false);
    }, 500);

    return () => {
        clearTimeout(timeout);
    };
  }, []);

  // workarouond to avoid the blinking effect when Spline loads
  const [opacity] = useDebounce(loading ? 0 : 1, 200);

  const [showText] = useDebounce(loading ? false : true, 800);

  return (
    <motion.div
      className="z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <div
        className={`h-[50vh] w-screen object-cover transition-all duration-1000`}
      >
        <div className="w-full h-full flex items-center justify-center text-white">
          <FlamLoading />
        </div>
      </div>
      {showText && (
        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
        >
          <motion.h1
            className="font-display text-4xl font-bold text-gray-200 transition-colors sm:text-5xl"
            variants={STAGGER_CHILD_VARIANTS}
          >
            Welcome to Flam
          </motion.h1>
          <motion.p
            className="max-w-md text-gray-400 transition-colors sm:text-lg"
            variants={STAGGER_CHILD_VARIANTS}
          >
            avatar creation on the go...
          </motion.p>
          <motion.button
            variants={STAGGER_CHILD_VARIANTS}
            className="rounded-full bg-gray-200 px-10 py-2 font-medium text-black transition-colors hover:bg-white"
            onClick={() => router.replace("/dashboard?option=Fitness")}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
