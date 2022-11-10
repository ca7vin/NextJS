import React from "react";

export default function Liste(props) {
    console.log(props)
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await import("../../data/listesVoc.json");

  return {
    paths: [
        { params: 
            { liste: "words" } 
        }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
    const slug = context.params.liste
    const data = await import("../../data/listesVoc.json");

    const listeEnCours = data.englishList.find(list => list.name === slug)


    return{
        props: {
            listeEnCours: listeEnCours.data
        }
    }

}
