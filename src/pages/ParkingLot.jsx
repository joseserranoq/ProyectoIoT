import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Lot } from '../ui/components/Lot'
import { firebaseGetDoc } from '../api/firebaseGetDoc'

export const mockData = [
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
// se suban los datos a cloud
export const ParkingLot = () => {
  useEffect(() => {
    (async()=>{
      if (number === '1'){      
        const data = await firebaseGetDoc(`Parking/sector1/lot`)
        setParkingLots(data.sort((a,b)=>a.id-b.id))
      }else {
        const data = await firebaseGetDoc(`Parking/sector2/lot`)
        setParkingLots(data.sort((a,b)=>a.id-b.id))
      }
    })()
    }, [])
  
  const { number } = useParams()
  const [parkingLots, setParkingLots] = useState([])

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
          parkingLots.map((parkingLot, index) => (
            <Lot key={parkingLot.id} parkingLot={parkingLot} setParkingLots={setParkingLots} index={index} sector={number} />
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