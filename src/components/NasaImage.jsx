import { useEffect, useState, useContext } from 'react'
import { nasaDate } from '../utils/formatDate'
import { DateContext } from '../contexts/DateContext'

export default function NasaImage({ size }) {
  const { date } = useContext(DateContext)
  const [img, setImg] = useState(null)

  useEffect(() => {
    async function fetchImg() {
      const url = new URL('/planetary/apod', 'https://api.nasa.gov')
      url.searchParams.set('api_key', process.env['REACT_APP_API_KEY'])
      url.searchParams.set('date', nasaDate(date))
      console.log(url.toString())
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setImg(data)
    }
    try{
      fetchImg()
    } catch(err) {
      console.error(err)
    }
  }, [date])

  return !!img && <img src={img.url} className='nasa-img' alt={img.title} width={`${size}%`} />
}