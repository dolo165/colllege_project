import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import {createContext} from 'react'
import {useReducer} from 'react'

export const ModalContext = createContext()

function App() {
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
      <ModalContext.Provider value={[modal, dispatch]}>
        <RouterProvider
          router={router}
        />
      </ModalContext.Provider>
    </div>
  )
}

export default App
