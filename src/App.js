import './App.css';
import { useState } from 'react'
import DatePicker from './components/DatePicker'
import SizeSlider from './components/SizeSlider';
import Header from './components/Header';
import NasaImage from './components/NasaImage';

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)

  return (
    <div className="App">
      <Header/>
      <NasaImage date={date} size={size}/>
      <h3>Date</h3>
      <DatePicker date={date} setDate={setDate} />
      <h3>Size</h3>
      <SizeSlider size={size} setSize={setSize} />
    </div>
  );
}

export default App;
