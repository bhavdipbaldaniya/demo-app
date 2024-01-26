import Navbar from '../../container/Navbar'
import styles from '../../styles/index.module.css'


export const getStaticPaths =async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()
const paths = data.map( (curElem) =>{
return{
  params : {
    pageNo : curElem.id.toString(),
  },
};
});


  return{
    paths,
    fallback :false,
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return {
    props: {
      data
    },
  };
};



const mydata = ({data}) => {
  const{id, title, body} = data
  return (
    <>
      <Navbar />
     
      <div className={styles.abc}>
            <h3 className={styles.xyz}> {id} </h3>
           <h2 className={styles.pqr}> {title} </h2>
          <p>{body}</p>
          </div>

    </>
  )
}

export default mydata