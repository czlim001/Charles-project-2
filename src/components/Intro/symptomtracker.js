import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://authservice.priaid.ch', {
          auth: {
            username: 'Fp95N_GMAIL_COM_AUT',
            password: 'r5G8QjCt47Tez3MBk'
          }
        });
        setSymptoms(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Symptom Checker</h1>
      {isLoading ? (
        <p>Loading symptoms...</p>
      ) : (
        <ul>
          {symptoms.map(symptom => (
            <li key={symptom.ID}>{symptom.Name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SymptomChecker;
