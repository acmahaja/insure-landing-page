import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Insure landing page</title>
        <meta name="description" content="Frontend Mentor | Insure landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={`${styles.main}`}>
        <Navbar />
        <Hero />
        <div className={styles.section}>
            asdadsad
        </div>
      </main>
    </>
  )
}
