import { ModelCtor } from 'sequelize-typescript';
import { ExampleModel } from './example.model';

// Register every @Table model here (never BaseModel/SoftDeleteModel).
// Consumed by databaseOptionsUtil so both the Nest app and the CLI
// (migrator/seeder) share the exact same set of models.
const models: ModelCtor[] = [ExampleModel];

export default models;
