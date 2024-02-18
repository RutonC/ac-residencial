import React from 'react'
import {Input, Form} from 'antd'

interface InputProps {
  name:string;
  placeholder?:string;
  field_require:boolean;
  message_require?:string;
  prefix?:boolean;
  label?:string;
  inputStyle?:string
  type: "textarea" | "text" | "number" | "password";
}

function InputItem({label,placeholder, field_require, message_require, prefix, name,inputStyle, type, ...props}:InputProps) {

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <span>+258</span>
    </Form.Item>
  );

  return (
    <Form.Item 
    label={label}
    name={name}
    rules={[{required:field_require, message:message_require}]}
    {...props}
    >
      {
        type === "text" &&
      <Input  addonBefore={prefix && prefixSelector} placeholder={placeholder} className={`${inputStyle} focus:border-golden-600 hover:border-golden-600`}/>
      }

      {
        type === "textarea" &&
      <Input.TextArea autoSize={{minRows:8}} placeholder={placeholder} className={`${inputStyle} focus:border-golden-600 hover:border-golden-600`}/>
      }

      {
        type === "password" &&
      <Input.Password placeholder={placeholder} className={`${inputStyle} focus:border-golden-600 hover:border-golden-600`}/>
      }
    </Form.Item>
  )
}

export default InputItem