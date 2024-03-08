import React from 'react';
import { useReducer } from 'react';

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

const FormValidation = ({ inicio }) => {
  const [state, dispatch] = useReducer(formReducer, inicio);

  const handleChange = (field, value) => {
    dispatch({
      type: 'CHANGE',
      field,
      value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.firstName.value.trim() === '') {
      dispatch({
        type: 'VALIDATE',
        field: 'firstName',
        error: 'El nombre es obligatorio'
      });
    } else {
      dispatch({
        type: 'VALIDATE',
        field: 'firstName',
        error: null
      });
    }

    if (state.lastName.value.trim() === '') {
      dispatch({
        type: 'VALIDATE',
        field: 'lastName',
        error: 'El apellido es obligatorio'
      });
    } else {
      dispatch({
        type: 'VALIDATE',
        field: 'lastName',
        error: null
      });
    }

    if (state.email.value.trim() === '') {
      dispatch({
        type: 'VALIDATE',
        field: 'email',
        error: 'El gmail es obligatorio'
      });
    } else {
      dispatch({
        type: 'VALIDATE',
        field: 'email',
        error: null
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor='name'>Nombre: </label>
          <input type='text' name='name' value={state.firstName.value} onChange={(e) => handleChange('firstName', e.target.value)}/>
          {state.firstName.error !== null && (
            <p className="error text-danger">{state.firstName.error}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor='lastname'>Apellido: </label>
          <input type='text' name='lastname' value={state.lastName.value} onChange={(e) => handleChange('lastName', e.target.value)} />
          {state.lastName.error !== null && (
            <p className="error text-danger">{state.lastName.error}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor='email'>Gmail: </label>
          <input type='email' name='email' value={state.email.value} onChange={(e) => handleChange('email', e.target.value)}/>
          {state.email.error !== null && (
            <p className="error text-danger">{state.email.error}</p>
          )}
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default FormValidation;
