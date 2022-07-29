import { UserInterface, UserJsonInterface, UserModelInterface } from 'app/users/domain/entities/user.interface';
import { UserGender } from 'app/users/domain/entities/user_gender.enum';
import { UserRole } from 'app/users/domain/entities/user_role.enum';
import { UserState } from 'app/users/domain/entities/user_state.enum';
import { UserDocumentType } from 'app/users/domain/entities/user_document_type.enum';

export class User {
    public readonly id: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly email: string;
    public readonly password: string;
    public readonly documentType: UserDocumentType;
    public readonly document: string;
    public readonly gender: UserGender;
    public readonly birthdate: Date | null;
    public readonly picture: string;
    public readonly role: UserRole;
    public readonly state: UserState;
    public readonly createdAt: Date | null;
    public readonly updatedAt: Date | null;

    constructor(user: UserInterface) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.documentType = user.documentType;
        this.document = user.document;
        this.gender = user.gender;
        this.birthdate = user.birthdate;
        this.picture = user.picture;
        this.role = user.role;
        this.state = user.state;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

    public copyWith(partial: Partial<UserInterface>): User {
        return new User({
            id: partial.id || this.id,
            firstName: partial.firstName || this.firstName,
            lastName: partial.lastName || this.lastName,
            email: partial.email || this.email,
            password: partial.password || this.password,
            documentType: partial.documentType || this.documentType,
            document: partial.document || this.document,
            gender: partial.gender || this.gender,
            birthdate: partial.birthdate || this.birthdate,
            picture: partial.picture || this.picture,
            role: partial.role || this.role,
            state: partial.state || this.state,
            createdAt: partial.createdAt || this.createdAt,
            updatedAt: partial.updatedAt || this.updatedAt,
        });
    }

    public toJson(): UserJsonInterface {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            documentType: this.documentType,
            document: this.document,
            gender: this.gender,
            birthdate: this.birthdate,
            picture: this.picture,
            role: this.role,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    public toJsonModel(): UserModelInterface {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            documentType: this.documentType,
            document: this.document,
            gender: this.gender,
            birthdate: this.birthdate,
            picture: this.picture,
            role: this.role,
            state: this.state,
        };
    }

    static pure(): User {
        return new User({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            documentType: UserDocumentType.CC,
            document: '',
            gender: UserGender.MALE,
            birthdate: null,
            picture: '',
            role: UserRole.USER,
            state: UserState.ACTIVE,
            createdAt: null,
            updatedAt: null,
        });
    }
}
