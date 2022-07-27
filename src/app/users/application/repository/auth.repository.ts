import { UserModel } from '../models/user.model';
import { JWTAdapter } from 'core/interfaces/jwt.adapter';
import { CryptAdapter } from 'core/interfaces/crypt.adapter';

export class AuthRepository {
    static async doLogin(username: string, password: string) {
        const user = await UserModel.findOne({ email: username });

        if (!user?._id) {
            throw new Error("The username or password isn't correct");
        }

        if (!CryptAdapter.validateCrypt(password, user.password)) {
            throw new Error("The username/password isn't correct");
        }

        const token = JWTAdapter.generateJWT({ uid: user._id, role: user.role });

        // TODO: return JWT
        return token;
    }
}
