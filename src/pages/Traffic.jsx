export const Traffic = () => {

const parkings = [
    {
        parkingId: 1,
        parkingName: "Parking 1",
    },
    {
        parkingId: 2,
        parkingName: "Parking 2",
    }
]

  return (
    <>
    <div className="container-fluid text-center">
        <h1>Tráfico</h1>
        <img className="img-fluid " src="../../vehiculos.jpg" alt="Tráfico"/>    
        {
            parkings.map(parking => (
                <div key={parking.parkingId} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{parking.parkingName}</h5>
                        <a href={`/parkinglot/${parking.parkingId}`} className="btn btn-primary">Ver estacionamiento</a>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}
