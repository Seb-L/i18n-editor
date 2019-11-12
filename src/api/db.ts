import { createConnection } from 'typeorm'
import { Project } from '../entity/Project'
import { Locale } from '../entity/Locale'
import { Translation } from '../entity/Translation'

export default createConnection({
  name: 'default',
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [
    Project,
    Locale,
    Translation
  ]
})
