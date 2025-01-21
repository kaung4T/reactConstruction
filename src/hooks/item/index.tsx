import { NavigateFunction, useNavigate } from "react-router-dom"
import Server from "../../utils/hook"

type itemType = {
  name: string
}

type itemDataType = {
  data?: itemType[] | undefined,
  message?: string | undefined
}

type item = {
  data: itemDataType
}

const ItemHook = async () => {
  const item : item = await Server.get('all/all_item')

  return item.data
}

export default ItemHook