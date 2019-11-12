import flat from 'flat'
import deepmerge from 'deepmerge'

export const getters = {
  locales: (state: any) => state.locales,
  flatMessagesLocales: (state: any) => Object.entries(state.locales)
    .reduce((locales: any, [locale, messages]) => {
      locales[locale] = flat(messages)
      return locales
    }, {}),
  localeList: (state: any) => Object.keys(state.locales)
    .map((key) => key),
  localesKeyList: (state: any) => {
    const messages: any = Object.values(state.locales)
    const concatLocales = deepmerge.all(messages)
    const flatKeys: any = flat(concatLocales)
    return Object.keys(flatKeys)
  }
}
