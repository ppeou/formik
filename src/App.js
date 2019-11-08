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
      meta_data: {field: 'age'},
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
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={data}
      >
        {props => (<>
          <Components {...layout}
                      validators={validators}
                      value={props.values}
                      setFieldValue={props.setFieldValue} />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </>)}
      </Formik>
    </div>
  );
}

export default App;
