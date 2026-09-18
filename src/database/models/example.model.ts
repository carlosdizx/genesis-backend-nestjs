import {
  AllowNull,
  Column,
  DataType,
  Default,
  Table,
} from 'sequelize-typescript';
import { SoftDeleteModel } from './base.model';

// Demo model showing how to extend SoftDeleteModel. Delete this file (and
// its migration) once real models exist — remove it from models/index.ts too.
interface ExampleAttributes {
  id: string;
  title: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

type ExampleCreationAttributes = Omit<
  ExampleAttributes,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

@Table({ tableName: 'examples', underscored: true, paranoid: true })
export class ExampleModel extends SoftDeleteModel<
  ExampleAttributes,
  ExampleCreationAttributes
> {
  // id, createdAt, updatedAt, deletedAt come from SoftDeleteModel — don't redeclare them.

  @Column
  declare title: string;

  @AllowNull
  @Column(DataType.STRING)
  declare description: string | null;

  @Default(true)
  @Column
  declare isActive: boolean;
}
