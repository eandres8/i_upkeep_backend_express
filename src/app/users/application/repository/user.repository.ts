import { UserModel } from 'app/users/application/models/user.model';
import { UserInterface } from 'app/users/domain/entities/user.interface';
import { User } from 'app/users/domain/models/user';
import { CryptAdapter } from 'core/interfaces/crypt.adapter';

export class UserRepository {

    static async createUser(body: UserInterface) {
        const user = new User(body);

        const password = CryptAdapter.doCrypt(user.password);

        const newUserModel = new UserModel(user.copyWith({ password }).toJsonModel());

        const newUser = await newUserModel.save();

        return newUser.toJSON();
    }

    static async listUsers(): Promise<UserInterface[]> {
        const data = await UserModel.find();

        return data.map<UserInterface>(user => new User(user.toJSON() as any));
    }

    static async retrieveUserById(userId: string) {
        const data = await UserModel.findById( userId );

        return data?.toJSON();
    }

}
