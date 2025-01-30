

import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Item from './Item'
import ItemHook from '../hooks/item'
import ItemCompoent from '../component/item/item'
import Auth from '../utils/auth'
import { Form, useLocation, useNavigate } from 'react-router-dom'
import Child from './Child'
import Parent from './Parent'

const {
  login,
  logout
} = Auth()

type infoType = {
  name: string | null,
  age: number | null
}

type dataType = {
  data: infoType[]
}

const Home = () => {
  const data : dataType = { data : [{ name : "kaung", age : 25 }, { name : null, age : 25 }]}

  const [open, setOpen] = useState<boolean | null>(false)
  const [test, setTest] = useState<string[] | null>(["hi", "hello", "ss"])
  const navigate = useNavigate()

  function handleOpen () {
    setOpen(!open)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    await login({
      name: form.get("name"),
      password: form.get("password")
    })
    navigate('/item')
  }

  const handleLogout = async () => {
    await logout()
    navigate(0)
  }

  const c = new Child('ewfpokkweofwekfwfe')

  console.log(c.name)

  return (
    <>
        <div>home</div>

        <button onClick={ () => handleLogout() }>Logout</button>

        <form onSubmit={ (e) => handleSubmit(e)}>
          <input type="text" name='name' />
          <input type="text" name='password' />
          <button type='submit'>SUbmit</button>
        </form>

        {
          test?.map( (d,i) => 
            <div key={i}>{d}</div>
          )
        }

        <div>
          <button onClick={ () => handleOpen() }>Button Open</button>
        </div>

          <Item name='ffffffffff' open={open} >
            <h3>I am children</h3>
          </Item>        
        
    </>
  )
}

export default Home
