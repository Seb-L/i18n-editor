import { PluginFunction } from 'vue'
import promiseIpc from 'electron-promise-ipc'
import { Api } from '@/api'
import { WebContents } from 'electron'

interface Endpoints {
  [key: string]: string
}

interface Options {
  endpoints: Endpoints
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $api: Api
  }

  export interface Vue {
    $api: Api
  }
}

const apiPlugin: PluginFunction<Options> = (_Vue, options = { endpoints: {} }) => {
  const apiInstance: Api = Object.entries(options.endpoints)
    .reduce((api: Api, [endpoint, path]) => {
      api[endpoint] = (payload = { params: {}, body: {} }) => promiseIpc.send(path, payload as WebContents)

      return api
    }, {})

  _Vue.prototype.$api = apiInstance
  _Vue.$api = apiInstance
}

export default apiPlugin
