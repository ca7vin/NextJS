import React from 'react'
import styles from "../styles/Home.module.css";

export default function Bitcoin(props) {
    console.log(props.results.bpi.EUR.rate_float)

    const coursBpi = props.results.bpi.EUR.rate_float

  return (
    <div className={styles.container}>
                <h1 className='text-2xl uppercase font-bold my-5'>Le BTC est à :</h1>
                <h2 className='text-4xl uppercase font-bold my-5'>{Math.round(coursBpi)} €</h2>

    </div>
  )
}


export async function getServerSideProps(context){

    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const results = await data.json()

    return{
        props: {
            results
        }
    }

}