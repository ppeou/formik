import React from 'react';
import { Field } from 'formik';
//import validators from './validators';

const BoxLayout = ({index, value, setFieldValue, validators, ...prop}) => {
  const children = (prop.items || []).map((prop1, idx) => {
    return (Components({...prop1, index: idx, value, setFieldValue, validators}));
  });
  return (
    <div key={index}>
      {children}
    </div>
  );
};

const GenericInput = ({type, index, ...prop}) => {
  const {value: data, meta_data: {field, validatorName}, setFieldValue, validators} = prop;
  const value = data[field];
  const onChange = (e) => {
    const _value = e.target.value;
    setFieldValue(field, _value, false);
  };
  const _prop = {};
  if(validatorName) _prop.validate = validators[validatorName];
  return (<Field key={index} id={field} name={field} type={type} value={value}
                 onChange={onChange} {..._prop} />);
};

const TextInput = (prop) => <GenericInput type="text" {...prop}/>;
const NumberInput = (prop) => <GenericInput type="number" {...prop}/>;
const DateInput = (prop) => <GenericInput type="date" {...prop}/>;

const component_map = {BoxLayout, TextInput, NumberInput, DateInput};

const Components = ({index, ...prop}) => {
  const Comp = component_map[prop.comp_name];
  return <Comp key={index} {...prop} />;
};

export default Components;
