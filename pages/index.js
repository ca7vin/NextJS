import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid"


export default function Home(props) {
  console.log(props.array);
  const route = useRouter();
  console.log(route);

  return (
    <>
      <Head>
        {/* On peut enlever le charSet, Next le gère */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className={styles.container}>
        <h1 className='text-2xl uppercase font-bold my-5'>Liste de vocabulaire</h1>
        <table className="table w-full border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 w-1/2 uppercase p-5 font-bold">Anglais</th>
              <th className="border border-slate-600 w-1/2 uppercase p-5 font-bold">Français</th>
            </tr>
          </thead>
          <tbody>
            {props.array.map((el) => (
              <tr key={uuidv4()}>
                <td className="border border-slate-600 text-center capitalize">{el.en}</td>
                <td className="border border-slate-600 text-center capitalize">{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const data = await import(`../data/vocabulary.json`);
  const array = data.vocabulary;

  if (array.length === 0) {
    return {
      redirect: {
        destination: '/quotes'
      }
    }
  }

  return {
    props: {
      array,
    },
  };
}
