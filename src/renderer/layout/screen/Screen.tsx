import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components';


export default function Layout({children}: PropsWithChildren<{}>) {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/')}>Home</Button>
      {children}
    </div>
  )
}
