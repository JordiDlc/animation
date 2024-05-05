import { useState } from 'react'
import triste from './assets/hamster_triste.png'
import triste2 from './assets/hamster_triste2.png'
import feliz from './assets/hamster_feliz.png'
import './App.css'
import Confetti from 'react-confetti';
import ReactFlipCard from 'reactjs-flip-card'

function App() {
  const [show, setShow] = useState(false)
  const [order, setOrder] = useState(false)
  const [count, setCount] = useState(0)
  const [sad, setSad] = useState(false)

  const styles = {
    centeredContent: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
  }

  const changeShow = () => {
    if(show) reset();
    setShow(!show);
  }

  const changeOrder = () => {
    setOrder(!order);
    setCount(count+1);
    if(count>=2) changeScene();
  }

  const reset = () => {
    setOrder(false);
    setCount(0);
    setSad(false);
  }

  const changeScene = () => {
    setSad(true);
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
              <h1>{sad?'Estas segura!!!':'¿Me perdonas?'}</h1>
              <img src={sad?triste2:triste} className={`img ${sad&&'img--scale'}`} alt="React logo" />
            </div>
            <div className={`card__button ${order&&'card__button--reverse'}`}>
              <button onClick={changeShow}>SI</button>
              <button onClick={changeOrder} className="error">NO</button>
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
