import { useEffect, useState } from 'react'

import './App.css'
import { TestingService } from './services/testing.service';

function App() {
  const [morty, setMorty] = useState({} as any);
  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  }

  useEffect(() => {
    try {
      fetchMorty();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1>Interceptors</h1>
      <p>{JSON.stringify(morty)}</p>
    </>
  )
}

export default App
