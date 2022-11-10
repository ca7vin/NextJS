import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid"

export default function Index(props) {
  return (
    <div className={styles.container}>
      <h1 className="text-2xl uppercase font-bold my-5">Listes de vocabulaire</h1>
      <ul className="list-disc">
        {props.array.map((item) => (
          <li key={uuidv4()}>
            <Link href={`/listes/${item.name}`}>
                <a className="text-blue-700 capitalize">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import(`../../data/listesVoc.json`);
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
