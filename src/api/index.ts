import promiseIpc from 'electron-promise-ipc'

export interface Payload {
  params?: any,
  body?: any
}

export interface Api {
  [key: string]: (payload?: Payload) => Promise<any>
}

const ctx = require.context('./endpoints/', true, /\.ts$/)

export default () => ctx.keys()
  .forEach((key: string) => {
    const path = key
      .replace('./', '')
      .split('/')
      .map((fragment: string) => fragment.split('.')[0])
      .join('/')

    promiseIpc.on(`api/${path}`, ctx(key).default)
  })
