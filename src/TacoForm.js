import React, { useState } from 'react';
import TacoInput from './TacoInput';

const TacoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    asadaCount: 0,
    alpastorCount: 0,
    chorizoCount: 0,
    polloCount: 0,
    chicharronCount: 0,
    barbacoaCount: 0,
    cabesaCount: 0,
    tripasCount: 0,
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseInt(e.target.value)});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform AJAX request using formData
    // Replace the URL with your own endpoint
    fetch('/.netlify/functions/order-tacos', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // .then((response) => )
      .then((data) => {
        console.log('Success:', data);
        // Handle success case here

      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error case here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First and Last Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
          required
        />
      </label>
      <br />
      <TacoInput 
        name="asadaCount"
        label="Asada (Steak):"
        value={formData.asadaCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="alpastorCount"
        label="Al-Pastor (Pork):"
        value={formData.alpastorCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="chorizoCount"
        label="Chorizo (Ground Pork):"
        value={formData.chorizoCount}
        onStateChange={handleChange}
      />

      <TacoInput 
        name="polloCount"
        label="Pollo (Pork):"
        value={formData.polloCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="chicharronCount"
        label="Chicharron (Pork Skin):"
        value={formData.chicharronCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="barbacoaCount"
        label="Barbacoa:"
        value={formData.polloCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="cabesaCount"
        label="Cabesa:"
        value={formData.cabesaCount}
        onStateChange={handleChange}
      />
      <TacoInput 
        name="tripasCount"
        label="Tripas:"
        value={formData.tripasCount}
        onStateChange={handleChange}
      />
      {/* <fieldset>
        <legend>Menudo</legend>
        <input type="checkbox" name="grid1" id="menduo" value="Yes" />
        <label for="menduo">Yes</label>
        <input type="radio" name="grid2" id="large" value="Large" />
        <label for="large">Large</label>
        <input type="radio" name="grid3" id="small" value="small" />
        <label for="small">Small</label>
      </fieldset>
      <fieldset>
        <label for="quesadilla">Quesadilla:</label>
        <input type="checkbox" name="grid4" id="enablequesadilla" value="Yes" />
        <label for="enablequesadilla">Yes</label>
        <select name="quesadilla" id="quesadilla">
            <option value="asada">Asada (Steak)</option>
            <option value="alpastor">Al-Pastor</option>
            <option value="chorizo">Chorizo</option>
            <option value="chicharron">Chicharron</option>
            <option value="barbacoa">Barbacoa</option>
        </select>
      </fieldset> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TacoForm;
