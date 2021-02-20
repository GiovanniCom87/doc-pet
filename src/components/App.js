import '../css/App.css';
import {useState, useEffect} from 'react'
import { AddAppointments } from './AddAppointments';
import { ListAppointments } from './ListAppointments';
import { SearchAppointments } from './SearchAppointments';
import {without} from 'lodash'


function App() {

const [data, setData] = useState(null)
const [formDisplay, setDisplay] = useState(false)


useEffect(()=>{
  fetch('./data.json')
  .then(response => response.json())
  .then(setData)
  
  
}, [])
// console.log(data)

const deleteApt = (apt)=>{
  let tempApts = data
  tempApts = without(tempApts, apt)
  setData(tempApts) 
}

const toggleDisplay = ()=>{
  setDisplay(!formDisplay)
}


if(!data) return null

  return (

    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments 
              formDisplay={formDisplay}
              toggleDisplay={toggleDisplay}
              />
              <SearchAppointments />
              <ListAppointments 
              appointments={data}
              deleteApt={deleteApt}
              />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default App;
