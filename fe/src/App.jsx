import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
const [jjokes, setJokes] = useState([])
const[testData,setTestData]=useState("a")


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      console.log(response.data.length)
      setJokes(response.data)
    

    },[])
    .catch((error)=>{
      console.log(error)
    })
  })
  useEffect(()=>{
    axios.post('/api/test').
    then((res)=>{
      console.log(res)
      setTestData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[setTestData])
  

  
  
  
  return (
    <>
      <h1>Sagar</h1>
      <h2>{testData}</h2>
     
      <p>JOKES:{jjokes.length}</p>
    {
      jjokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
