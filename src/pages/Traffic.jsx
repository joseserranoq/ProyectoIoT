import { useEffect, useState } from "react"

export const Traffic = () => {

  const [cars, setCars] = useState({
    route1: 10,
    route2: 20,
    route3: 50,
  })

  useEffect(() => {
    if(localStorage.getItem('cars') !== null) {
      const cars = JSON.parse(localStorage.getItem('cars'))
      setCars(cars)
    } else {
      setCars({
        route1: Math.floor(Math.random() * 100),
        route2: Math.floor(Math.random() * 100),
        route3: Math.floor(Math.random() * 100),
      })
    }
  }, [])

  const [isLoading, setIsLoading] = useState(false)

  const refresh = () => {
    console.log('Refrescando...')
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const route1 = Math.floor(Math.random() * 100)
    const route2 = Math.floor(Math.random() * 100)
    const route3 = Math.floor(Math.random() * 100)

    if (localStorage.getItem('cars') === null) {
      localStorage.setItem('cars', JSON.stringify({
        route1,
        route2,
        route3,
      }))
    } else {
      const cars = JSON.parse(localStorage.getItem('cars'))
      localStorage.setItem('cars', JSON.stringify({
        route1: route1 + cars.route1,
        route2: route2 + cars.route2,
        route3: route3 + cars.route3,
      }))
    }

    setCars({
      route1: route1 + cars.route1,
      route2: route2 + cars.route2,
      route3: route3 + cars.route3,
    })

  }



  return (

    <>
      <div className="container-fluid text-center">
        <h1>Tráfico</h1>
        <img className="img-fluid " src="../../vehiculos.jpg" alt="Tráfico" />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: '20px',
          minHeight: '200px',
        }}>
          <div style={{
            width: '100%',
          }}>
            <button className="btn btn-primary m-1" onClick={() => {
              refresh()
            }}>
              Refrescar
            </button>

            <button className="btn btn-primary m-1" onClick={() => {
              localStorage.removeItem('cars')
              setCars({
                route1: 0,
                route2: 0,
                route3: 0,
              })
            }}>
              Finalizar Dia
            </button>
          </div>

          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <h2>Ruta 1</h2>
                <small>Carros: {cars.route1}</small>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <h2>Ruta 2</h2>
                <small>Carros: {cars.route2}</small>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <h2>Ruta 3</h2>
                <small>Carros: {cars.route3}</small>
              </div>


            </div>
          )}

        </div>
      </div>
    </>
  )
}
