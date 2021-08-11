import React, { useState, useEffect } from 'react'


import './App.css';
import Form from './Layouts/Form/Form'
import { registerMyName } from './Api/api';

function App() {
  const [visitors, setVisitor] = useState(null)

  useEffect(() => {
    const google = async () => {
      if (!visitors && localStorage.getItem("visitors")) {
        setVisitor(localStorage.getItem("visitors"))
        console.log(localStorage.getItem("visitors"), "Called")
      } else {
        const visitor = await registerMyName("admin")
        setVisitor(visitor.data[0].totalVisitors)
      }
    }
    try {
      google()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const name = document.getElementById("name").value
      if (name) {
        const visitor = await registerMyName(name)
        console.log(visitor)
        setVisitor(visitor.data[0].totalVisitors)
      }
      else {
        alert("Name Field should have a value")
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }



  return (
    <div className="App">
      <h1 className="h1">Rebase It Labs</h1>

      <h6>#Assignment2</h6>
      <Form visitors={visitors} updateVisitors={onSubmit}>
      </Form>
    </div>
  );
}

export default App;
