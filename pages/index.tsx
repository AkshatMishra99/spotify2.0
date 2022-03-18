import type { NextPage } from 'next'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is a spotify clone</h1>
      <main>
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  )
}

export default Home
