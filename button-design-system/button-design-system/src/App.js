import React from "react";
import "./App.scss";
import Button from './Button';

function App() {
  let onClickHandler = () => {
    alert('I am clicked')
  }
  return (
    <>
      <Button label="Home" type="primary" />
      <Button label="Home" type="success" size="large" />
      <Button label="Contact Us" type="danger" />
      <Button label="About Us" type="info" size="small" />
      <Button
        label="About Us"
        type="info"
        size="large"
        clickHandler={onClickHandler}
      />
      <Button />
    </>
  );
}

export default App;
