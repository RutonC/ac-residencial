import { Layout } from 'antd'
import React from 'react'
import {HomeOutlined} from '@ant-design/icons'

const {Content} = Layout;

function Dashboard() {
  return (
    <Layout>
      <Content className='p-12'>
        <div className='flex flex-col border rounded-md p-12'>
          <div className='flex justify-center mb-9'>
          <HomeOutlined className='text-5xl text-gray-500'/>
          </div>
          <div  className='flex flex-col justify-center items-center'>
            <span className='text-gray-500 text-2xl font-medium mb-4'>No painel da sua conta, você pode:</span>
            <div className='flex flex-row justify-center items-center gap-8'>
              <button className='border px-4 py-2 rounded-sm border-golden-600 text-golden-600 hover:bg-golden-600 hover:text-white'>Ver pedidos</button>
              <button className='border px-4 py-2 rounded-sm border-golden-600 text-golden-600 hover:bg-golden-600 hover:text-white'>Gerenciar Seus Pedidos</button>
              <button className='border px-4 py-2 rounded-sm border-golden-600 text-golden-600 hover:bg-golden-600 hover:text-white'>Editar seu perfil</button>
            </div>

          </div>

        </div>

      </Content>
    </Layout>
  )
}

export default Dashboard