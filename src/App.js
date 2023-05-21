import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Miguel's Direct Messages</h1>
        <form name="tacos" data-netlify="true" method="POST">
          <label>
            First and Last Name:
            <input type="text" name="name" />
          </label>

          {/* <label>
            Asada (Steak):
            <input type="number" name="asada-qty" />
          </label>
          <label>
            Al-Pastor (Pork):
            <input type="number" name="alpastor-qty" />
          </label>
          <label>
            Chorizo (Pork):
            <input type="number" name="chorizo-qty" />
          </label>
          <label>
            Pollo (Pork):
            <input type="number" name="pollo-qty" />
          </label>
          <label>
            Chicharron (Pork Skin):
            <input type="number" name="chicharron-qty" />
          </label>
          <label>
            Barbacoa:
            <input type="number" name="barbacoa-qty" />
          </label>
          <label>
            Cabesa:
            <input type="number" name="cabesa-qty" />
          </label>
          <label>
            Tripas:
            <input type="number" name="tripas-qty" />
          </label>

          <fieldset>
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

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
