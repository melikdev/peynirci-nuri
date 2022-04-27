import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peynirci Nuri</title>
        <meta name="description" content="Peynirci" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>Hello</h1>
    </div>
  )
}
