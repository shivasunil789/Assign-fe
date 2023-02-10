import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function Home(props) {

  const [hotels, setHotels] = useState([])

  useEffect(() => {
    (async () => {
      let { data } = await axios.get("http://localhost:5000/api/hotels")
      console.log(data.data)
      setHotels(data.data)
    })();
  }, [])

  const openHotel = (id) => {
    window.location.href = `http://localhost:3000/hotels/${id}`
  }

  return (
    <>
      {
        hotels?.map((e) => {
          return (
            <>
              <div className="hotel card d-flex flex-column justify-contain-center align-items-center" style={{ cursor: "pointer" }} onClick={() => openHotel(e._id)} >
                <h1 className="self-align-start">{e.name}</h1>
                <p>{e.location}</p>
              </div>
            </>
          )
        })
      }
    </>
  )
}
