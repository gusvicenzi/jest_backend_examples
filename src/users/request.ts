import axios from 'axios'
import { User } from './user'

export const request = async (url: string) => {
  const { data } = await axios.get<User>(url)

  // console.log('função request retorno', data)
  return data
}
