import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.sass'

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} flex items-center justify-around bg-orange-800 py-5`}>
        <Link 
        href="/">
            <a className='text-xl uppercase hover:font-bold'>Home</a>
        </Link>
        <Link 
        href="/galery">
            <a className='text-xl uppercase hover:font-bold'>Galery</a>
        </Link>
        <Link 
        href="/listes">
            <a className='text-xl uppercase hover:font-bold'>Listes</a>
        </Link>
        <Link 
        href="/quotes">
            <a className='text-xl uppercase hover:font-bold'>Quotes</a>
        </Link>
        <Link 
        href="/bitcoin">
            <a className='text-xl uppercase hover:font-bold'>Cours BTC</a>
        </Link>
        <Link 
        href="/add">
            <a className='text-xl uppercase hover:font-bold'>Add (POST Request)</a>
        </Link>
    </nav>
  )
}
