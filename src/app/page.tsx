import Image from 'next/image';
import React from 'react';
import './globals.css';

export default function Home() {
  return (
    <React.Fragment>
      <Image src="/vercel.svg" alt="unko" width={100} height={100}></Image>
      <h1 className='hello'>Unkos</h1>
    </React.Fragment>
  )
}
