import { IndiaDate } from "./Component/IndiaDate.jsx"

import { IndiaTime } from "./Component/Indiatime.jsx"

import './App.css';



function App() {


  return (
    <>
      <div className="app">
        <div className="watch">  <h1 className="my-3 text-center fw-bold lh-1">Bharat Clock</h1>
          <p className="fs-4 "> This is the clock that shows the Time & Date of Bharat </p>
        </div><IndiaTime />
        <IndiaDate />
        <a className=" text-white text-decoration-none " href="https://zaap.bio/digitalamitchoudhary"> Made with <span >❤</span> by Digitalamitchoudhary
        </a>

      </div>

    </>
  )
}

export default App
