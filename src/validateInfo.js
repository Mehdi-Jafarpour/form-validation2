export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Field is required";
  } else if (values.firstName.length < 3) {
    errors.firstName.length = "to few symbols";
  }else if (values.firstName.length>99){
      errors.firstName = "Max length is 99 symbols"
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Field is required";
  } else if (values.lastName.length < 3 ) {
    errors.lastName = "to few symbols";
  }else if (values.lastName.length>99){
    errors.lastName = "Max length is 99 symbols"
}
  if (!values.website.trim()) {
    errors.website = "the field is required";
  } else if (values.website.length < 1) {
    errors.website = "Enter at least 1 symbol";
  }else if (values.website.length>20){
    errors.firstName = "Max length is 20 symbols"
}
if (!values.age.trim()) {
    errors.age = "Field is required";
  } else if (values.age < 18) {
    errors.age = "Too young!";
  }else if (values.age > 99){
    errors.age = "Oppps,sorry!"
}

  if (!values.email) {
    errors.email = "Field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Incorrect format";
  }
  if (!values.country.trim()) {
    errors.country = "Field is required";
  } else if (values.country.length < 2) {
    errors.country = "Enter at least 2 symbol";
  }else if (values.country.length>30){
    errors.country = "Max length is 30 symbols"
}
if (!values.city.trim()) {
    errors.city = "Field is required";
  } else if (values.city.length < 2) {
    errors.city = "Enter at least 2 symbol";
  }else if (values.city.length>30){
    errors.city = "Max length is 30 symbols"
}
if (!values.catchPhrase.trim()) {
    errors.catchPhrase = "Field is required";
  } else if (values.catchPhrase.length < 5) {
    errors.catchPhrase = "Enter at least 5 symbol";
  }else if (values.catchPhrase.length>100){
    errors.catchPhrase = "Max length is 100 symbols"
}

  return errors;
}
