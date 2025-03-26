import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomList from './components/Room'
import Title from './components/Title'
import Meeting from './components/Meeting.jsx';

function App() {

  return (
    <>
      <Router>
      {/* - [KHU VỰC ĐỂ MÀN HÌNH NỀN] --------------------------------------*/}
      <div className="fixed w-screen h-screen bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600" />
      {/* - [KHU VỰC ĐỂ MÀN HÌNH NỀN - END] --------------------------------*/}

      {/* - [GIAO DIỆN CHÍNH] ----------------------------------------------*/}
      <div className="container w-full h-full mx-auto p-4 absolute inset-0">
        <Title />
        {/* Danh sách Room Chat */}
        <RoomList />
      </div>
      {/* - [GIAO DIỆN CHÍNH - END] ----------------------------------------*/}

      {/* - [ROUTER] -------------------------------------------------------*/}
      <Routes>
        <Route path='/' element={<RoomList />} />
        <Route path="/rooms/:id" element={<Meeting/>} />
        <Route path="/login" element={<RoomList/>} />
      </Routes>
      {/* - [ROUTER - END] -------------------------------------------------*/}
    </Router>
    </>
  )
}

export default App
