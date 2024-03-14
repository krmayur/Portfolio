import React from 'react';
import './css/Contact.css'
function Contact(){
    function handleForm(e){
        e.preventDefault();
        let form=e.target;
        let formData=new FormData(form)
        let formObj=Object.fromEntries(formData.entries())
        console.log(formObj)
    }
    return(
        <>
            <form onSubmit={handleForm}>
                <div>
                    <input type='text' placeholder='Name' name='name'/>
                </div>
                <div>
                    <input type='email' placeholder='Email' name='branch'/>
                </div>
                <div>
                    <input type='Number' placeholder='Phone' name='phone'/>
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </>
    )
}
export default Contact;