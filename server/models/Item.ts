import {Model, AllowNull, DataType, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import {Tables} from '../sequelize/Tables';

@Table({
  timestamps: true,
  tableName: Tables.ITEMS
})
export class Item extends Model<Item> {

  @AllowNull(false)
  @Column
  name: string;

  @Column
  active: boolean;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW
  })
  updatedAt: Date;

}
