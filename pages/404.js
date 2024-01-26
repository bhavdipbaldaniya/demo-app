import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/404.module.css';

const Errpage = () => {
    const router = useRouter();
    const hendelinput = () =>{
        router.push("/")
    }
    useEffect(() => {  
        setTimeout(()=>{
        router.push("/")
        },3000) 
     }, [])
    
  return (
    <>
      <div id='notfound'>
        <div className={styles.notfound}>
          <div className={styles.notfound-404}>
            <h1>404</h1>
          </div>
          <h2 className={styles.man}>we rae sorry page not found</h2>
          <p className={styles.a1}>the page is remove in this site</p>
       
          <a className={styles.a2} onClick={hendelinput}>back to home page</a>
           
        </div>
      </div>
    </>
  )
}

export default Errpage;
