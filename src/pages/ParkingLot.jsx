import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const mockData = [
  {
    id: 1,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 2,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 3,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 4,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 5,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 6,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 7,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 8,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 9,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  },
  {
    id: 10,
    availability: 0,
    car_info: {
      vehicle_plate: "",
      vehicle_model: "",
      vehicle_brand: "",
    }
  }
]

// TODO: Obtener los datos de los estacionamientos desde el servidor
export const ParkingLot = () => {
  const { number } = useParams()
  console.log(number)
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "1rem",
      gap: "0.5rem",
      justifyContent: "center"
    }}>
      <h2>
        Estacionamiento {number}
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
        width: "100%",
      
      }}>

        {
          mockData.map((parkingLot) => (
            <div key={parkingLot.id} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "4rem",
              height: "8rem",
              borderLeft: "3px solid #F7B500",
              borderRight: "3px solid #F7B500",
            }}>

              <small style={{ color: "#F7B500" }}>{parkingLot.id}</small>
              {
                parkingLot.availability ? (
                  <svg xmlns="http://www.w3.org/2000/svg" color="red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" color="green" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>

                )
              }
              <button style={{
                color: "black",
                border: "none",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "100%",
                textWrap: "wrap",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem"
              }}  >
                <small>
                  Reservar
                </small>
              </button>


            </div>
          ))


        }
      </div>
    </div>

  )
}

ParkingLot.propTypes = {
  parkingLot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    availability: PropTypes.number.isRequired,
    car_info: PropTypes.shape({
      vehicle_plate: PropTypes.string.isRequired,
      vehicle_model: PropTypes.string.isRequired,
      vehicle_brand: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}