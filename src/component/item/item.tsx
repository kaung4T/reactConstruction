import React, { useEffect, useState } from 'react'
import ItemHook from '../../hooks/item'
import { isDate } from 'util/types'

type itemType = {
  name: string
}

type itemDataType = {
  data?: itemType[] | undefined,
  message?: string | undefined
}

function ItemCompoent() {
  const [item, setItem] = useState<itemType[] | undefined | null>(null)

  useEffect(() => {
    const data = async () => {
      const iData : itemDataType = await ItemHook()

      if (iData.message === "Token refreshed") {
        const iData : itemDataType = await ItemHook()
        setItem( () => {
          return iData.data
        })
      }
      else {
        setItem( () => {
          return iData.data
        })
      }
    }
    data()
  }, [])

  return (
    <div>
        {
          item?.map( (d, i) => 
            <div key={i}>
              { d.name }
            </div>
          )
        }
        
    </div>
  )
}

export default ItemCompoent