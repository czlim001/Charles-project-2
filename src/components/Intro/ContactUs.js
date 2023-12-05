import React, { useState } from 'react';
import './ContactUs.css';
import Airtable from 'airtable';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const base = new Airtable({
        apiKey: 'patqgOmHYMcwbluv2.ae79d26a694a7c5d3cb39efbbc94df9885e02dbde9b264c7ad2a5c48aae83f4d'
      }).base('appR5bZ2tntVHNTTF');   
  
      // Sending data to Airtable
      base('Contact Us form').create([  
        {
          "fields": {
            "Name": formData.name,
            "Email": formData.email,
            "Feedback": formData.feedback
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.getId());
        });
      });
  
    // Reset the form data to initial state
    setFormData({
      name: '',
      email: '',
      feedback: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;