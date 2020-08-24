import React, { useReducer } from 'react'

const initialState: unknown = {}
const Context = React.createContext(initialState)
const reducer: any = (state: any = initialState, action: any): null | undefined => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return { ...state, ...action.payload }
    case 'LOGOUT_ACCOUNT':
      return { ...action.payload }
    default:
      return;
  }
}

const Provider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer<any>(reducer, initialState)
  const value = { state, dispatch }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export { Context, Provider }