import db from '../db'
import { Payload } from '..'
import { Locale } from '../../entity/Locale'

export default (payload?: Payload) => {
  const where = payload && payload.params ? payload.params : {}

  return db
    .then(async connection => {
      return connection.getRepository(Locale).find({ where })
    })
}
