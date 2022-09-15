import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import About from './About'
import Contact from './contact'

export default function Home() {
  return (
    <div className="p-0" >
      <style jsx>
        {
          `
      a {
        background: #facf0f;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: inline-block;
        font-weight: 700;
        border-radius: 5px;
        box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
        transition: transform .3s;
        padding: 1.5rem 4rem;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
      }
      a:hover{
        transform: translateY(-0.6rem);
        box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
      }
      `
        }
      </style>
      <Head>
        <title>Avin Mangukiya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          HEY, I'M AVIN MANGUKIYA
        </h1>

        <p className={styles.description}>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
        </p>

        <div className={styles.grid}>
          <Link href='/project' className={styles.btn} >
            <a>
            Projects
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
