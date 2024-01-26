import Link from 'next/link'
import Navbar from '../../container/Navbar'
import styles from '../../styles/index.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map(curElem => {
        return (
          <div key={curElem.id} className={styles.abc}>
            <h3 className={styles.xyz}> {curElem.id} </h3>
           <Link href={`/blog/${curElem.id}`}> 
           <h2 className={styles.pqr}> {curElem.title} </h2>
           </Link>
          </div>
        )
      })}
    </>
  )
}

export default blog;