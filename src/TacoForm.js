import React, { useState } from 'react';

const TacoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    asadaCount: null,
    alpastorCount: null,
    chorizoCount: null,
    polloCount: null,
    chicharronCount: null,
    barbacoaCount: null,
    cabesaCount: null,
    tripasCount: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      .then((response) => response.json())
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
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Asada (Steak):
        <input 
          type="number"
          name="asada-count"
          value={formData.asadaCount}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Al-Pastor (Pork):
        <input
          type="number"
          name="alpastor-count"
          value={formData.alpastorCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Chorizo (Pork):
        <input 
          type="number"
          name="chorizo-count"
          value={formData.chorizoCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Pollo (Pork):
        <input 
          type="number"
          name="pollo-count"
          value={formData.polloCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Chicharron (Pork Skin):
        <input 
          type="number" 
          name="chicharron-count"
          value={formData.chicharronCount}
          onChange={handleChange}
        />
        
      </label>
      <br />
      <label>
        Barbacoa:
        <input
          type="number"
          name="barbacoa-count"
          value={formData.barbacoaCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Cabesa:
        <input
          type="number"
          name="cabesa-count"
          value={formData.cabesaCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Tripas:
        <input 
          type="number"
          name="tripas-count"
          value={formData.tripasCount}
          onChange={handleChange}
        />
      </label>
      <br />
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
