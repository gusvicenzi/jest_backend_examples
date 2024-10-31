import { User } from '../users/user'

export const usersList: User[] = [
  { name: 'Mark' },
  { name: 'Paul' },
  { name: 'John' },
  { name: 'Arthur' }
]

export const axiosUserGetMock = async (url: string) => {
  const userID = parseInt(url.slice('/users/'.length), 10)
  // console.log('userID', userID)

  const user = usersList[userID]
  // console.log('user', user)

  if (!user) throw new Error('Nenhum usuário encontrado')

  return { data: user }
}
