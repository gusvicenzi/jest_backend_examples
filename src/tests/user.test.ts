import axios from 'axios'
import { getUserName } from '../users/user'
import { axiosUserGetMock, usersList } from '../__mocks__/request'

jest.mock('axios')

test('get user name', async () => {
  const axiosGet = axios.get as jest.Mock
  const userIndex = 1
  expect(jest.isMockFunction(axiosGet)).toBeTruthy()

  axiosGet.mockImplementation(axiosUserGetMock)
  // axiosGet.mockResolvedValue({ data: usersList[userIndex] })

  const name = await getUserName(userIndex)
  console.log("user's name:", name)

  expect(name).toBe(usersList[userIndex].name)
})
