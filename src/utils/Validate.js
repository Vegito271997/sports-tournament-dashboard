const Validate = (name, age) => {
  if (!name) return "Please enter name";
  if (!age) return "Please enter age";
  else if (age < 1 || age > 120) return "Please enter valid age";

  return null;
};

export default Validate;
