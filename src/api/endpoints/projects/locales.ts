import db from '../../db'
import { Payload } from '../..'
// import { Project } from '../../../entity/Project'
import { Locale } from '../../../entity/Locale'

export default (payload?: Payload) => {
  const where = payload && payload.params ? payload.params : {}

  return db
    .then(async connection => {
      // return connection.getRepository(Project).find({ where, relations: ['locales'] })
      return connection.getRepository(Locale).find({ locale: { projectId: where.projectId } })
    })
}
