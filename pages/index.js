import Head from 'next/head'
import Navbar from '../container/Navbar'
const Index = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta charset='UTF-8' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar />
    </>
  )
}

export default Index;