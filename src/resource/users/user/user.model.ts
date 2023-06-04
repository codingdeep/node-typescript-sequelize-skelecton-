import {Model, Table, Column, DataType, BeforeCreate} from "sequelize-typescript";
import bcrypt from 'bcrypt'

interface UserAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date
}

export interface UserInput extends UserAttributes {
}

@Table({tableName: 'usr', timestamps: true})
class UserModel extends Model<UserAttributes, UserInput> implements UserAttributes {
    @Column({
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    )
    id!: number;

    @Column({type: DataType.STRING})
    firstName!: string;

    @Column({type: DataType.STRING})
    lastName!: string;

    @Column({type: DataType.STRING})
    emailAddress!: string;

    @Column({type: DataType.STRING})
    password!: string;

    @BeforeCreate
    static async hasPassword(instance: UserModel) {
        const hash = await bcrypt.hash(instance.password, 10);
        instance.password = hash;
    }

    async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

export default UserModel;