import bcrypt from 'bcryptjs';

export class CryptAdapter {
    static doCrypt(data: string) {
        const salt = bcrypt.genSaltSync();

        return bcrypt.hashSync(data, salt);
    }

    static validateCrypt(text1: string, text2: string) {
        return bcrypt.compareSync(text1, text2);
    }
}