import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";



const SubmitForm = () => {
  const { handleChange, values, handleSubmit, errors, handleOnBlur} =
    useForm(validate);
  
  
  return (
    <div>
      <form onSubmit={handleSubmit} onBlur={handleOnBlur} >
        <div className="input-items">
          <input
            name="firstName"
            placeholder="Name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <br />
          {errors.firstName && (
            <span className="errors">{errors.firstName}</span>
          )}
        </div>
        <div className="input-items">
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={values.lastName}
            onChange={handleChange}
          />
          <br />
          {errors.email && <span className="errors">{errors.lastName}</span>}
        </div>
        <div className="input-items">
          <input
            name="website"
            placeholder="Website"
            type="text"
            value={values.website}
            onChange={handleChange}
          />
          <br />
          {errors.website && <span className="errors">{errors.website}</span>}
        </div>
        <div className="select">
          <select
            name="sex"
            placeholder="sex"
            value={values.sex}
            onChange={handleChange}
          >
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            name="marride"
            value={values.marride}
            onChange={handleChange}
          ></input>
          <label> Marrid</label>
        </div>
        <div className="input-items">
          <input
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            min="0"
            placeHolder="Age"
          />
          <br />
          {errors.age && <span className="errors">{errors.age}</span>}
        </div>
        <div className="input-items">
          <input
            name="email"
            placeholder="E-mail"
            type="text"
            value={values.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && <span className="errors">{errors.email}</span>}
        </div>
        <div className="input-items">
          <input
            name="country"
            placeholder="Country"
            type="text"
            value={values.country}
            onChange={handleChange}
          />
          <br />
          {errors.country && <span className="errors">{errors.country}</span>}
        </div>
        <div className="input-items">
          <input
            name="city"
            placeholder="City"
            type="text"
            value={values.city}
            onChange={handleChange}
          />
          <br />
          {errors.city && <span className="errors">{errors.city}</span>}
        </div>
        <div className="input-items">
          <input
            name="catchPhrase"
            placeholder="Catch Prase"
            type="text"
            value={values.catchPhrase}
            onChange={handleChange}
          />
          <br />
          {errors.catchPhrase && (
            <span className="errors">{errors.catchPhrase}</span>
          )}
        </div>
        <button>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default SubmitForm