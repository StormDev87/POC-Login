import React from 'react';


interface IInputField {
  label?: string;
  placeholder?: string;
  type?: "number" | "password" | "email" | "text";
  onChange?: (value : string | number) => void;
}

const InputField : React.FC<IInputField> = (props) => {
  const {label, placeholder, type , onChange} = props;
  return (
    <div>
      <div>{label}</div>
      <input type={type} className={"rounded border-2 w-96 m-2.5"} onChange={(event)=>onChange?.(event.target.value)}/>
    </div>
  );
};

export default InputField;