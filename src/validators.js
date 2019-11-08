const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validateAge = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else {
    const _v = Number(value);
    if (!_v) {
      error = 'Invalid value';
    } else {
      if(_v < 1 || _v > 100) {
        error = 'age must between 1 and 99';
      }
    }
  }
  return error;
};

export default {validateEmail, validateAge};
