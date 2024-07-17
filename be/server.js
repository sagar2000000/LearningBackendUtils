import express from 'express'

const app=express()

app.get('/',(req,res)=>{
  res.send("server is ready")
})

app.get('/api/jokes',(req,res)=>{
  const jokes=[
    {
      id:1,
      title: 'A joke',
      content:'This is a joke'
    },
    {
      id:2,
      title: 'Another joke',
      content:'This is also joke'
    },
    {
      id:3,
      title: '3rd joke',
      content:'This is 3rd joke'
    }
  ] 
  res.json(jokes)
  console.log("hi")
})


app.post('/api/test',(req,res)=>{
  res.send("password is here")
  
  console.log("hello ")
})
const port=process.env.PORT||3000;

app.listen(port,()=>{
  console.log(`Serve at http://localhost:${port}`)
})