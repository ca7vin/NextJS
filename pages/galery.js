import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import archi1 from "../public/assets/archi1.jpg";
import archi2 from "../public/assets/archi2.jpg";
import archi3 from "../public/assets/archi3.jpg";

export default function Galery() {
  const router = useRouter()
  return (
    <div>
      <Head>
        {/* On peut enlever le charSet, Next le gère */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.route.replace("/", "").toLocaleUpperCase()}</title>
      </Head>
      <Image placeholder="blur" layout="responsive" src={archi1} width="4725" height="3150"/>
      <Image placeholder="blur" layout="responsive" src={archi2} width="6000" height="4000"/>
      <Image placeholder="blur" layout="responsive" src={archi3} width="3346" height="4736"/>
    </div>
  );
}
// img 1 = 912
// img 2 = 1200
// img 3 = 2000
