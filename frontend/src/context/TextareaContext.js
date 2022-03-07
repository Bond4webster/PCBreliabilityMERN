import React, {useContext, useReducer} from 'react'

const TextareaContext = React.createContext()

export const useTextarea = () => {
  return useContext(TextareaContext)
}

const SHOW_TEXT = 'show'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_TEXT: return {...state, text: action.text}
    default: return state
  }
}

export const TextareaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    text: ''
  })

  const show = text => dispatch({ type: SHOW_TEXT, text })

  return (
    <TextareaContext.Provider value={{
      text: state.text,
      show
    }}>
        { children }
    </TextareaContext.Provider>
  )
}