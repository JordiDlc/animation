import { useState } from 'react'
import triste from './assets/hamster_triste.png'
import feliz from './assets/hamster_feliz.png'
import './App.css'
import Confetti from 'react-confetti';
import ReactFlipCard from 'reactjs-flip-card'

function App() {
  const [show, setShow] = useState(false)
  
  const styles = {
    centeredContent: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
  }

  const changeShow = () => {
    setShow(!show);
  }
  
  return (
    <div className="container">
      <ReactFlipCard
        flipTrigger={"disabled"}
        direction={"vertical"}
        flipByProp={show}
        frontStyle={styles.centeredContent}
        backStyle={styles.centeredContent}
        frontComponent={
          <div className="card">
            <div className="card__content">
              <h1>¿Me perdonas?</h1>
              <img src={triste} className="img" alt="React logo" />
            </div>
            <div className="card__button">
              <button onClick={changeShow}>SI</button>
              <button className="error">NO</button>
            </div>
          </div>
        }
        backComponent={
          <>
            <Confetti />
            <div className="card">
              <div className="card__content">
                <h1>Semejante preciosura no puede ser real</h1>
                <img src={feliz} className="img" alt="React logo" />
              </div>
              <div className="card__button">
                <button className="error" onClick={changeShow}>Regresar</button>
              </div>
            </div>
          </>
        }
    />      
    </div>
  )
}

export default App;
