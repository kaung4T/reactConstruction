import React, { FC } from 'react'
import ItemCompoent from '../component/item/item'
import { useNavigate } from 'react-router-dom'

type props = {
  name: string,
  children: Readonly<React.ReactNode>,
  open: Boolean | null
}

const Item : FC<props> = ( { name, children, open } ) => {

  return (
    <>

    <ItemCompoent />


    {
      open && (
      <div>
        { name }
        { children}
      </div>
      ) 
    }
    </>
  )
}

export default Item