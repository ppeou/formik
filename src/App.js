import React from 'react';
import { Formik } from 'formik';

import './App.css';
import Components from "./Components";
import validators from './validators';

const layout = {
  comp_name: 'BoxLayout',
  meta_data: {},
  items: [
    {
      comp_name: 'TextInput',
      meta_data: {field: 'name', validatorName:'validateEmail'},
    },
    {
      comp_name: 'NumberInput',
      meta_data: {field: 'age',  validatorName:'validateAge'},
    },
    {
      comp_name: 'DateInput',
      meta_data: {field: 'dob'},
    }
  ]};

let data = {
  name: 'hello',
  age: 12,
  dob: new Date(2001, 0, 1).toISOString().split('T')[0],
};

function App() {
  const onSaveClick = (errors) => {
    console.log(errors);
  };
  return (
    <div>
      <h1>My Form</h1>
      <Formik initialValues={data}>
        {props => (<>
          <Components {...layout}
                      validators={validators}
                      value={props.values}
                      setFieldValue={props.setFieldValue} />
          {Object.keys(props.errors).map(k => (<div id="feedback">{props.errors[k]}</div>))}
          <button type="submit" disabled={Object.keys(props.errors).length > 0}
                  onClick={() => props.validateForm().then(onSaveClick)}>
            Submit
          </button>
        </>)}
      </Formik>
    </div>
  );
}

export default App;
