export type User = {
  name: string
}

import { request } from './request'

export async function getUserName(userID: number) {
  // console.log('função getUserName')

  const { name } = await request(`/users/${userID}`)

  // console.log('função getUserName retorno', name)

  return name
}
