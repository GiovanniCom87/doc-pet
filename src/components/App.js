import '../css/App.css';
import {useState, useEffect} from 'react'
import { AddAppointments } from './AddAppointments';
import { ListAppointments } from './ListAppointments';
import { SearchAppointments } from './SearchAppointments';


function App() {

const [data, setData] = useState(null)


useEffect(()=>{
  fetch('./data.json')
  .then(response => response.json())
  .then(setData)
  
  
}, [])
// console.log(data)

if(!data) return null

  return (

    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments appointments={data} />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default App;
