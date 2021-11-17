import { Transition } from 'react-transition-group';
import {useState} from 'react'

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


function App() {
    const [inProp, setInProp] = useState(true);
    return (
      <div>
        <Transition in={inProp} unmountOnExit appear timeout={duration}>
        {state => {
            console.log(state);
            return (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                I'm a fade Transition!
                </div>
            )
        }}
        </Transition>
        <button onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button>
      </div>
    );
  }


export default App;