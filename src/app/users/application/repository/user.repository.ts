import { UserModel } from 'app/users/application/models/user.model';
import { UserInterface } from 'app/users/domain/entities/user.interface';
import { User } from 'app/users/domain/models/user';

export class UserRepository {

    static async createUser(body: UserInterface) {
        const user = new User(body);

        const newUserModel = new UserModel(user.toJsonModel());

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
