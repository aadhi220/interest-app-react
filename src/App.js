
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)
  const [isprinsipleValid, setisprinsipleValid] = useState(false)
  const [israteValid, setisrateValid] = useState(false)
  const [istimeValid, setistimeValid] = useState(false)



  const validateInput = (e) => {
    const { value, name } = e.target
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principle") {
        setAmount(value)
        setisprinsipleValid(false)
      } else if (name === "rate") {
        setRate(value)
        setisrateValid(false)
      } else if (name === "time") {
        setTime(value)
        setistimeValid(false)
      }
    }else if(value===""){
      if (name === "principle") {
        setAmount(value)
        setisprinsipleValid(false)
      } else if (name === "rate") {
        setRate(value)
        setisrateValid(false)
      } else if (name === "time") {
        setTime(value)
        setistimeValid(false)
      }
    }
    
    
    
    else {
      if (name === "principle") {
        setAmount(value)
        setisprinsipleValid(true)
      } else if (name === "rate") {
        setRate(value)
        setisrateValid(true)
      } else if (name === "time") {
        setTime(value)
        setistimeValid(true)
      }
    }
  }

  function clearResult() {
    setRate(0)
    setResult(0)
    setTime(0)
    setAmount(0)
    setisprinsipleValid(false)
    setisrateValid(false)
    setistimeValid(false)
  }



  const handleResult = (e) => {
    e.preventDefault()
    if (!amount || !rate || !time) {
      alert("plz fill completely!")

    } else {
      setResult((amount * rate * time) / 100)
    }
  }

  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center bg-black'>
      <div style={{ width: '500px' }} className=' bg-light rounded p-5'>

        <div className='heading'>
          <h3 className=''>Simple Interest Calculator</h3>
          <p>Calculate Your Simple Interest Easily</p>
        </div>
        <div style={{ height: '150px' }} className='interest-card w-100 rounded shadow d-flex flex-column justify-content-center align-items-center bg-info'>

          <h1>₹ {result}</h1>
          <p className='fw-bold'>Total Simple Interest</p>
        </div>
        <form onSubmit={handleResult} className='mt-5'>

          <div className='d-flex flex-column mb-3'>
            <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" value={amount || ""} name='principle' onChange={(e) => validateInput(e)} />
          </div>
          {isprinsipleValid && <div className='text-danger mb-1'>*invalid input</div>}
          <div className='d-flex flex-column mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest ( p.a )%" variant="outlined" value={rate || ""} name='rate' onChange={(e) => validateInput(e)} />
          </div>
          {israteValid && <div className='text-danger mb-1'>*invalid input</div>}
          <div className='d-flex flex-column mb-3'>
            <TextField id="outlined-basic" value={time || ""} label="Time period ( Yr )" variant="outlined" name='time' onChange={(e) => validateInput(e)} />
          </div>
          {istimeValid && <div className='text-danger mb-1'>*invalid input</div>}

          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{ height: '50px' }} className='w-75 bg-dark' disabled={isprinsipleValid || israteValid || istimeValid ? true : false} variant="contained">Calculate</Button>

            <Button style={{ height: '50px' }} className='w-25' variant="outlined " onClick={clearResult}>Reset  </Button>

          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;