'use client'
import Form from '@/components/Form';

import {useState, useEffect } from 'react';
import Transition from '../components/Transition';

export default function Home() {

 return (
   <Transition>
     <div className="flex flex-col p-4">
       <h1 className="text-center font-serif">Contact Us</h1>
       <Form />
     </div>
   </Transition>
 );
  
}
