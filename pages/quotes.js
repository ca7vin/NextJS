import React from 'react'
import styles from "../styles/Home.module.css";


export default function Quotes(props) {
  console.log(props);
  return (
    <div className={styles.container}>
        <h1 className='text-2xl uppercase font-bold my-5'>Quotes (ISR)</h1>
        <p className='text-center italic'>{props.data.quotes[0].text}</p>
        <p className='text-center font-bold mt-3'>{props.data.quotes[0].author}</p>
    </div>
  )
}


export async function getStaticProps(){
  const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  const data = await quote.json()

  return {
    props: {
      data
    },
    revalidate: 20
  }
}

