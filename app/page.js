'use client'
import Form from '@/components/Form';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

 




export default function Home() {
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
       <main className="flex flex-col p-4">
         <h1 className="text-center font-serif">Contact Us</h1>
         <Form />
       </main>
     </motion.div>
   </AnimatePresence>
 );
  
}
