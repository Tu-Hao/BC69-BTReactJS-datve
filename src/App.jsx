import { useState } from 'react'
import './App.css'
import TicketBooking from './store/TicketBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <TicketBooking/>
    </>
  )
}

export default App
