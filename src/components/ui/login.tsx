import React from 'react'
import logo from '../../assets/img/logo.png'
import { Button } from 'antd'
import {Form} from 'antd'
import InputItem from './input'
import {FcGoogle} from 'react-icons/fc'

interface LoginProps {
  handleSign: () => {};
}

function Login() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
      <img src={logo} className='h-12'/>
      </div>
      <h1 className='text-center text-3xl font-semibold text-gray-700 mt-6 mb-2'>Bem-vindo de volta</h1>
      <p className='text-center text-gray-500 tracking-widest'>É bom lhe ver devo aqui. <br/> Acesse a sua conta  </p>

      <Button icon={<FcGoogle size={18}/>} className='flex items-center justify-center w-full h-10 my-5' >Entrar com Google</Button>
      <Form
        layout='vertical'

      >
        <InputItem label='Nome de usuário ou e-mail' field_require name='email' type='text' message_require='Nome do usuário ou email obrigatório' inputStyle='h-10 focus:ring-golden-600'/>

        <InputItem label='Senha' field_require name='password' type='password' inputStyle='h-10 focus:ring-golden-600' message_require='Senha obrigatório'/>

        <button type='submit' className='h-10 w-full bg-golden-600 my-6 rounded-md text-white font-medium hover:bg-golden-700 tracking-widest'>Login</button>
      </Form>

      <p className='text-center text-sm text-gray-500'>
        Ainda não possui conta? 
      <a className='text-golden-600 hover:text-golden-700'> Inscreva-se</a>
      </p>


    </div>
  )
}

export default Login