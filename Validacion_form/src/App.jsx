
import Form from "../Components/FormValidation"


function App() {
  const initialState = {
    firstName: {
      value: '',
      error: null
    },
    lastName: {
      value: '',
      error: null
    },
    email: {
      value: '',
      error: null
    }
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          [action.field]: {
            value: action.value,
            error: null
          }
        };
      case 'VALIDATE':
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            error: action.error
          }
        };
      default:
        return state;
    }
  };
  

  return (
    <>
      <div className = "text-center mt-5">
        <Form inicio = {initialState} formReducer = {formReducer}/>
      </div>
    </>
  )
}

export default App
