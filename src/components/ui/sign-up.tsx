import React from 'react'
import logo from '../../assets/img/logo.png'
import InputItem from './input'
import { Form } from 'antd'

function SignUp() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
      <img src={logo} className='h-12'/>
      </div>
      <h1 className='text-center text-3xl font-semibold text-gray-700 mt-6 mb-2'>Increva-se</h1>
      <p className='text-center text-gray-500 tracking-widest mt-4'>É bom lhe ver devo aqui. Acesse a sua conta  </p>

      <Form
        layout='vertical'
        className='mt-5'

      >
      <InputItem label='Nomel' field_require name='name' type='text' message_require='Nome obrigatório' inputStyle='h-10 focus:ring-golden-600'/>
      <InputItem label='E-mail' field_require name='email' type='text' message_require='E-mail obrigatório' inputStyle='h-10 focus:ring-golden-600'/>
      <InputItem label='Telefone' prefix field_require name='phone' type='text' message_require='Número de telefone obrigatório' inputStyle='h-10 focus:ring-golden-600'/>

      <InputItem label='Senha' field_require name='password' type='password' inputStyle='h-10 focus:ring-golden-600' message_require='Senha obrigatório'/>

        <button type='submit' className='h-10 w-full bg-golden-600 my-6 rounded-md text-white font-medium hover:bg-golden-700 tracking-widest'>Registrar</button>

      </Form>
      
    </div>
  )
}

export default SignUp