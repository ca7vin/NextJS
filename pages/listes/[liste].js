import React from "react";
import { v4 as uuidv4 } from "uuid"
import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router";


export default function Liste(props) {
    console.log(props)
    const router = useRouter();

    if (!props.listeEnCours) {
        return <h1>Chargement</h1>
    }

  return (
    <div className={styles.container}>
      <h1 className='text-2xl uppercase font-bold my-5'>{router.query.liste}</h1>
        <table className="table w-full border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 w-1/2 uppercase p-5 font-bold">Anglais</th>
              <th className="border border-slate-600 w-1/2 uppercase p-5 font-bold">Français</th>
            </tr>
          </thead>
          <tbody>
            {props.listeEnCours.map((el) => (
              <tr key={uuidv4()}>
                <td className="border border-slate-600 text-center capitalize">{el.en}</td>
                <td className="border border-slate-600 text-center capitalize">{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await import("../../data/listesVoc.json");

  const paths = data.englishList.map(
        (item) => ({
            params: {liste: item.name}
        })
    )

  return {
    paths: [
        { params: { liste: "words" }},
        { params: { liste: "verbs" }},
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
    const slug = context.params.liste
    const data = await import("../../data/listesVoc.json");

    const listeEnCours = data.englishList.find(list => list.name === slug)

    if (!listeEnCours) {
        return {
            notFound: true,
        }
    }

    return{
        props: {
            listeEnCours: listeEnCours.data
        }
    }

}
