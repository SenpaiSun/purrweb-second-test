import { useEffect, useState } from 'react'
import './style.css'

export const EditButton = ({ title }: { title: string }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return <button className='edit-button'>{windowSize <= 578 ? '' : title}</button>
}
