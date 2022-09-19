import React,{useState} from 'react';
import { useReducer } from 'react';
import styles from './UpdateDetails.module.css'

const editformReducer = (state, event) => {
    if(event.reset) {
        return {}
      }
    return {
      ...state,
      [event.name]: event.value
    }
   }

const UpdateDetails = () => {
    const [formData, setFormData] = useReducer(editformReducer, {});
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);
  
      setTimeout(() => {
        setSubmitting(false);
      }, 3000)
    }
  
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }
    function captureImage(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setFormData({
          name:"profile_pic",
          value:reader.result,
        })
      };
    }
    return (
        <>
        
        <h3 style={{textAlign:'center',margin:'10px auto'}}>Updater your details</h3>
  
        <div className={styles.testbox}>
        <form  className={styles.memberform} action="/">
        
        {/* profile pic */}
        <div className={styles.avatar}>
        <div className={styles.avatarWrapper}>
                      <img
                          className={styles.avatarImage}
                          src= {formData.profile_pic || "./images/default_profile_pic.png"}
                          alt="avatar"
                      />
                  </div>
                  <div>
                      <input
                          name="profile_pic"
                          onChange={captureImage}
                          id="avatarInput"
                          type="file"
                          className={styles.avatarInput}
                      />
                      <label className={styles.avatarLabel} htmlFor="avatarInput">
                          Upload a Profile picture
                      </label>
                  </div>
                  </div>
        <h3>Basic Details</h3>
          <div className={styles.item}>
            <p>Name : &nbsp; <select id="cars" name="Salutation" onChange={handleChange}>
            <option value="Sh.">Sh.</option>
            <option value="Smt.">Smt.</option>
            <option value="Miss">Miss</option>
          </select></p>
            <div>
         <input name="name" onChange={handleChange} value={formData.name || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Father's Name :</p>
            <div>
         <input name="father_name" onChange={handleChange} value={formData.father_name || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Age :</p>
            <div>
         <input name="age" onChange={handleChange} value={formData.age || ''}  required/>
            </div>
          </div>
          
          <div className={styles.item}>
            <p>Nationality :</p>
            <div>
         <input name="nationality" onChange={handleChange} value={formData.nationality || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Date Of Birth :</p>
            <div>
        
            </div>
            <input name="dob" type="date" onChange={handleChange} value={formData.dob || ''}  required/>
          </div>
          
          <div className={styles.item}>
            <p>Home Address :</p>
            <textarea rows="3" name="home_address" onChange={handleChange} value={formData.home_address || ''}  required></textarea>
          </div>
  
          <div className={styles.item}>
            <p>Residence Phone Number :</p>
            <div>
         <input name="phone_no" onChange={handleChange} value={formData.phone_no || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Occupation : <select  name="occupation_type" onChange={handleChange}>
            <option value="Govt. Servant">Govt. Servant</option>
            <option value="Non Govt. Servant">Non Govt. Servant</option>
          </select></p>
            <div>
         <input name="occupation" onChange={handleChange} value={formData.occupation || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Occupation Address &amp; Phone No. :</p>
            <div>
            <textarea rows="3" name="occupation_address" onChange={handleChange} value={formData.occupation_address || ''}  required></textarea>
            </div>
          </div>
  
          <h3>Bank Details</h3>
  
          <div className={styles.item}>
            <p>Name of the Bank :</p>
            <div>
         <input name="bank_name" onChange={handleChange} value={formData.bank_name || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Branch :</p>
            <div>
         <input name="bank_branch" onChange={handleChange} value={formData.bank_branch || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Bank Acc. Number :</p>
            <div>
         <input name="bank_acc_no" onChange={handleChange} value={formData.bank_acc_no || ''}  required/>
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Pan A/c No. (if any) :</p>
            <div>
         <input name="pan_no" onChange={handleChange} value={formData.pan_no || ''} />
            </div>
          </div>
  
          <div className={styles.item}>
            <p>Income_tax_payee :  &nbsp; <select  name="income_tax_payee" onChange={handleChange}>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select></p>
          </div>
  
          <div className={styles.item}>
            <p>Income :</p>
            <div>
         <input name="income" onChange={handleChange} value={formData.income || ''} />
            </div>
          </div>
          
        </form>
      </div>
  
      </>
    )
}

export default UpdateDetails