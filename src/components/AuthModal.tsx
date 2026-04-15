import React from 'react'

interface IProps {
    open: boolean;
    onClose: () => void;
}

const AuthModal = ({open, onClose}: IProps) => {
  return (
    <div>AuthModal</div>
  )
}

export default AuthModal