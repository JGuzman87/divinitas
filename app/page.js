'use client'
import Form from '@/components/Form';


import Transition from '../components/Transition';

export default function Home() {

 return (
   <Transition>
     <main className="flex flex-col p-4">
      
       <h1 className="text-center font-serif">Contact Us</h1>
       <Form />
     </main>
   </Transition>
 );
  
}
