import {FaPlus} from 'react-icons/fa'
import {useState, useEffect} from 'react'

export function AddAppointments(props){
    const [formData, setFormData] = useState({
        petName: '',
        ownerName: '',
        aptNotes: '',
        aptDate: '',
        aptTime:''
    })

    const handleChange = (e)=>{
        const target = e.target
        const value = target.value
        const name = target.name

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div
        className={
          'card textcenter mt-3 ' +
          (props.formDisplay ? '' : 'add-appointment')
        }
      >
        <div onClick={props.toggleDisplay} className="apt-addheading card-header bg-primary text-white">
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Pet's Name"
                  value={formData.petName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner's Name"
                  value={formData.ownerName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={formData.aptdate}
                  onChange={handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={formData.aptTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  value={formData.aptNotes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}