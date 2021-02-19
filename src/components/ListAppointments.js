export function ListAppointments(props){

    return(  
        <div className="appointment-list item-list mb-3">
        {props.appointments.map(item => (
          <div className="pet-item col media py-3" key={props.appointments.indexOf(item)}>
            <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger">X</button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{props.appointments.indexOf(item)} - {item.petName}</span>
                <span className="apt-date ml-auto">{item.aptDate}</span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span>{item.ownerName}</span>
              </div>
              <div className="apt-notes">{item.aptNotes}</div>
            </div>
          </div>
        ))}
      </div>
    )
}