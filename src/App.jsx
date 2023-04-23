import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import {useReducer} from 'react'
import {useState, createContext } from 'react'

const ModalContext = createContext()
const ContextBox = createContext()
export {ModalContext, ContextBox}

function App() {
  const [box, setBox] = useState([])
  const [modal, dispatch] = useReducer(reducer, {
    active: false,
    content: 'registration'
  });


  function reducer(state, action) {
    switch (action.type) {
        case 'modal':
            return {
                ...state,
                active: action.modal
            };
        case 'content':
            return {
                ...state,
                content: action.content
            };
        default:
            return state
    }
}

  return (
    <div className="App">
       <ContextBox.Provider value={[box, setBox]}>
      <ModalContext.Provider value={[modal, dispatch]}>
        <RouterProvider
          router={router}
        />
      </ModalContext.Provider>
      </ContextBox.Provider>
    </div>
  )
  
}

export default App
