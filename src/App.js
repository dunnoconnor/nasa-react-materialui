import './App.css';
import { useState } from 'react'
import DatePicker from './components/DatePicker'
import SizeSlider from './components/SizeSlider';
import Header from './components/Header';
import NasaImage from './components/NasaImage';
import { DateContext } from './contexts/DateContext'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)

  return (
    <div className="App">
      <Header/>
      <DateContext.Provider value={{ date, setDate }}>
        <NasaImage size={size}/>
        <h3>Date</h3>
        <DatePicker />
      </DateContext.Provider>
      <h3>Size</h3>
      <SizeSlider size={size} setSize={setSize} />
    </div>
  );
}

export default App;
