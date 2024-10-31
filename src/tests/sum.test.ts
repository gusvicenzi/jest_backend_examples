import { sum } from '../functions/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 232 + 2 + 3213 to equal 3447', () => {
  expect(sum(232, 2, 3213)).toBe(3447)
})

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)

  // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/) // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/) // Test pass
})

test('no try catch', async () => {
  expect(() => returnError()).toThrow(Error)
  await expect(returnPromise()).resolves.toBe('sucesso')
  await expect(returnPromise(true)).rejects.toMatch('rejeita')
})

const returnError = () => {
  throw new Error('Error thrown')
}

const returnPromise = async (error = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) reject('rejeita')
      resolve('sucesso')
    }, 1000)
  })
}
