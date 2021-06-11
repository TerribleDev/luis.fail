import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis.Fail 🔥</title>
        <meta name="description" content="Luis Fails" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Luis.Fail</h1>
        <h3>June 9th 2021</h3>
        <img src="/img/email.png" alt="Operah email meme" />
      </main>
    </>
  )
}
