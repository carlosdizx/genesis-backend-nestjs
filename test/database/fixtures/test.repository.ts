import { ModelCtor } from 'sequelize-typescript';
import AbstractRepository from '../../../src/database/repositories/abstract.repository';
import RepositoryOptionsInterface from '../../../src/database/interfaces/repository-options.interface';
import TestEntityModel from './test-entity.model';

export default class TestRepository extends AbstractRepository<TestEntityModel> {
  constructor(
    model: ModelCtor<TestEntityModel>,
    options: RepositoryOptionsInterface<TestEntityModel> = {},
  ) {
    super(model, options);
  }
}
