"use client"

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const AboutPage = () => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 p-4 "
      >
        <h1 className="font-roboto self-center">About Divinitas</h1>
        <p className="tracking-wide">
          For most companies, managing a trade show program is difficult enough
          under the best of circumstances. Unfortunately, many display providers
          compound the challenge by providing substandard service. You don’t
          have to settle for incomplete or unresponsive service.
        </p>
        <p className="tracking-wide">
          Divinitas is the kind of brand experience partner you’ve been waiting
          for. Unlike those providers, Divinitas is a customer-centric business
          devoted to making your experiential program less stressful and more
          successful – from tradeshows to marketing to brand positioning and
          beyond. We start by eliminating the most common shortcomings you have
          experienced from display providers:
        </p>
        <ul className="list-disc ml-6 ">
          <li>Unpredictable or questionable billing</li>
          <li>A lack of attention to your specific budget concerns</li>
          <li>
            A lack of full-spectrum services (design, build, storage, logistics,
            etc.)
          </li>
          <li>A lack of knowledge regarding integrated marketing</li>
          <li>
            Unresponsive service, including slow estimates, project delays, and
            poor communication
          </li>
          <li>Failure to fully deliver on approved design and services</li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutPage;