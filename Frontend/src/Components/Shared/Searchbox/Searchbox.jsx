import React,{useState} from 'react';
import styles from './Searchbox.module.css'

const Searchbox = (props) => {
    const [val,setval]=useState('');

    function showchange(e){
        setval(e.target.value);
    }
    
  return (
      <>
    <div className={styles.main_search_input_wrap} >
       <div className={`${styles.main_search_input_item} ${styles.fl_wrap}`}>
      
      <div className={styles.main_search_input_item}>
      <input type="text"  value={val} onChange={showchange} placeholder={props.search} />
      </div>  

      <button className={styles.main_search_button}>Search</button>
      
      </div>

    </div>
     </> 
  )
  
}

export default Searchbox;