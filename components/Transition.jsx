"use client"
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({children}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={
          typeof window !== "undefined" ? window.location.pathname : "static"
        }
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Transition;