import Navbar from '../container/Navbar'
import Image from 'next/image'
import Head from 'next/head'
const index = () => {
  return (
    <>
    <Head>
<title>about page</title>
    </Head>
    <div style={{textAlign:"center"}}>
      <Navbar />
      <h1>hello bhavdip</h1>
      {/* <Image src="/img.jpg" alt="Description" layout="fill"/> */}
      {/* <Image src="https://pixabay.com/photos/children-win-success-video-game-593313/"
      width="500" height="300"/> */}
      <Image
      //  alt="children win success video game."
        src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
        width='500'
        height='300'
        />
    </div>
    </>
  )
}

export default index;
