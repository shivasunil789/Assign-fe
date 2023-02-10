import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export function Hotels(props) {

  const { id } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(`http://localhost:5000/api/item-with-hotel/${id}`)
      setItems(data.data)
    })();
  }, [])

  return (
    <>
      {
        items?.map((e) => {
          return (
            <>
              <div className="hotel card d-flex flex-column justify-contain-center align-items-center p-3" >
                <h1 className="self-align-start">{e.name}</h1>
                <p>ingredients: {e.ingredients.toString()}</p>
                <p className="align-self-end">cost: {e.cost}</p>
                <p className="align-self-end">discount: {e.discount}%</p>
              </div>
            </>
          )
        })
      }
    </>
  )
}
