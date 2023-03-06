import React, { useState } from "react";
import contacts from '../../data/Personal';

// mailto idea from https://stackoverflow.com/questions/63909032/how-to-launch-and-open-email-client-reactjs

function ContactForm() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({subject: ""},{ message: ""});
  
    const handleInputChange = function(event) {
      // Getting the value and name of the input which triggered the change
      const name = event.target.name;
      const value = event.target.value;

      if (name === "subject") {
       
        setFormData({ subject: value, message: formData.message });
      } else {  
        setFormData({ subject: formData.subject, message: value });
      } 
      
    };
  
    const handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
    
  if(formData.message==="" || formData.subject==="" ) {
    alert(`Please fill all fields!`);
  }

  const messageEmail = contacts[0].links.email;
  const messageSubject=formData.subject;
  const messageBody=formData.message;
  
    // open default mail app
  window.open('mailto:'+messageEmail+'?subject='+messageSubject+'&body='+messageBody)

      setFormData({
        subject: "",
        message: ""
             });
    };
  
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Please enter a message and press "Generate Email" button 
        </p>
        <form className="form">
        <input
            value={formData.subject}
            name="subject"
            type="text"
            placeholder="Type subject here"
            onChange={handleInputChange}
          />
          <input
            value={formData.message}
            name="message"
            type="text"
            placeholder="Type message here"
            onChange={handleInputChange}
          />
        
          <button onClick={handleFormSubmit}>Generate Email</button>
        </form>
      </div>
    );
  }
  
  export default ContactForm;