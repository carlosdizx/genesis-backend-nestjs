import {
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';

export abstract class BaseModel<
  TModelAttributes extends object = any,
  TCreationAttributes extends object = TModelAttributes,
> extends Model<TModelAttributes, TCreationAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}

export abstract class SoftDeleteModel<
  TModelAttributes extends object = any,
  TCreationAttributes extends object = TModelAttributes,
> extends BaseModel<TModelAttributes, TCreationAttributes> {
  @DeletedAt
  declare deletedAt: Date | null;
}
