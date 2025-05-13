import { useState } from 'react'
import Form from './components/Form'
import Ticket from './components/Ticket'


function App() {
  const [ticket, setTicket] = useState({})
  const [flag, setFlag] = useState(1)

  return (
   <div className='h-screen max-w-full bg-[#050129] relative z-0'>
    <img src="https://codingconferencegenerator.netlify.app/pattern-lines.svg" className='absolute z-0 h-full' alt="vertical-lines"/>
     
    {flag ? <Form data={{setFlag,setTicket}}/> : <Ticket data={ticket}/>}
   </div>
  )
}

export default App
