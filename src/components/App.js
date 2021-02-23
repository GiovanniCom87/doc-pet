import "../css/App.css";
import { useState, useEffect } from "react";
import { AddAppointments } from "./AddAppointments";
import { ListAppointments } from "./ListAppointments";
import { SearchAppointments } from "./SearchAppointments";
import { without, findIndex } from "lodash";

function App() {
  const [data, setData] = useState(null);
  const [formDisplay, setDisplay] = useState(false);
  const [orderBy, setOrderBy] = useState("petName");
  const [orderDir, setOrderDir] = useState("asc");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.map((item, i) => {
            return (item = {
              ...item,
              aptId: i,
            });
          })
        )
      );
  }, []);
  // console.log(data);

  const searchApts = (query) => {
    setQuery(query);
  };

  const addAppointment = (apt) => {
    let tempApts = data;
    tempApts.unshift(apt);
    setData(tempApts);
  };

  const deleteApt = (apt) => {
    let tempApts = data;
    tempApts = without(tempApts, apt);
    setData(tempApts);
  };

  const toggleDisplay = () => {
    setDisplay(!formDisplay);
  };

  const changeOrder = (order, dir) => {
    setOrderBy(order);
    setOrderDir(dir);
  };

  const updateInfo = (name, value, id) => {
    let tempApts = data;
    let index = findIndex(data, { aptId: id });
    tempApts[index][name] = value;
    setData(tempApts);
  };

  if (!data) return null;

  let order;
  let filteredApts = data;
  if (orderDir === "asc") {
    order = 1;
  } else {
    order = -1;
  }

  filteredApts = filteredApts
    .sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })
    .filter((item) => {
      return (
        item["petName"].toLowerCase().includes(query.toLowerCase()) ||
        item["ownerName"].toLowerCase().includes(query.toLowerCase()) ||
        item["aptNotes"].toLowerCase().includes(query.toLowerCase())
      );
    });

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments
                formDisplay={formDisplay}
                toggleDisplay={toggleDisplay}
                addAppointment={addAppointment}
              />
              <SearchAppointments
                orderBy={orderBy}
                orderDir={orderDir}
                changeOrder={changeOrder}
                searchApts={searchApts}
              />
              <ListAppointments
                appointments={filteredApts}
                deleteApt={deleteApt}
                updateInfo={updateInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
