import React from 'react'
import {Modal, } from 'antd'

interface ModalProps {
  children:React.ReactNode;
  onOk?:React.ReactEventHandler;
  onCancel?:React.ReactEventHandler;
  open?:boolean
}
function ModalUi({children, onCancel, onOk, open, ...props}:ModalProps) {
  return (
    <Modal onOk={onOk} onCancel={onCancel} open={open} {...props} footer={null}>
      {children}
    </Modal>
  )
}

export default ModalUi