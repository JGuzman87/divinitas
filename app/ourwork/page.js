"use client";
import Carousel from "@/components/Carousel";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Ourwork = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel />
      </motion.div>
    </AnimatePresence>
  );
};

export default Ourwork;
