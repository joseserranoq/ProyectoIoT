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

export const Parking = () => {
  return (
    <>
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
    </>
  )
}
