import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form>
      <h1>POGODA DLA TWOJEGO MIASTA</h1>
      <input
        type="text"
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.change}
      />
    </form>
  );
};

export default Form;
