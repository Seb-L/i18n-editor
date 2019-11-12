import db from '../db'
import { Payload } from '..'
import { Project } from '../../entity/Project'

export default (payload?: Payload) => {
  const where = payload && payload.params ? payload.params : {}

  return db
    .then(async connection => {
      return connection.getRepository(Project)
        .find({ where })
    })
}
