import { UserModel } from 'app/users/application/models/user.model';
import { UserInterface } from 'app/users/domain/entities/user.interface';
import { User } from 'app/users/domain/models/user';
import { CryptAdapter } from 'core/adapters/crypt.adapter';
import { Pagination } from 'core/interfaces/pagination.interface';

export class UserRepository {

    static async createUser(body: UserInterface) {
        const user = new User(body);

        const password = CryptAdapter.doCrypt(user.password);

        const newUserModel = new UserModel(user.copyWith({ password }).toJsonModel());

        const newUser = await newUserModel.save();

        return newUser.toJSON();
    }

    static async listUsers({ limit, skip }: Pagination): Promise<UserInterface[]> {
        const data = await UserModel.find().skip(skip).limit(limit);

        return data.map<UserInterface>(user => new User(user.toJSON() as any));
    }

    static async retrieveUserById(userId: string) {
        const data = await UserModel.findById( userId );

        return data?.toJSON();
    }

    static async updateUser(userId: string, userData: UserInterface) {
        const userDataExist = await UserModel.findById(userId);

        if(!userDataExist?.id) {
            throw new Error(`The user ${userId} doesn't exist!`);
        }

        const newDataUser = new User(userDataExist.toJSON()).copyWith({ ...userData, updatedAt: new Date(Date.now()) }).toJsonModel();

        await UserModel.findByIdAndUpdate(userId, newDataUser);

        return newDataUser;
    }
}
