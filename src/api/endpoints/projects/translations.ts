import db from '../../db'
import { Payload } from '../..'
import { Translation } from '../../../entity/Translation'

export default (payload?: Payload) => {
  const where = payload && payload.params ? payload.params : {}

  return db
    .then(async connection => {
      return connection.getRepository(Translation).find({ where })
    })
}
