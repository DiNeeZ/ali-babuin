export const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export const pluralToSingular = (str) => {
  const lastLetter = str.slice(-1);
  let categoryItem;
  lastLetter === 's' ? (categoryItem = str.slice(0, -1)) : (categoryItem = str);
  categoryItem.toLowerCase();

  return `${categoryItem.charAt(0).toUpperCase()}${categoryItem.slice(1)}`;
};

export const capitalizeFirstLetter = (str) => {
  let lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export const stringToUppercase = (str) => {
  const arr = str.split(' ');
  const upperArr = arr.map((item) => {
    item.toLowerCase();
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return upperArr.join(' ');
};

export const registerValidate = (values) => {
  let errors = {};

  if (!values.displayName) {
    errors.displayName = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password field is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (values.password.length >= 6) {
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password field is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not mutch';
    }
  }

  return errors;
};
