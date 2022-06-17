import * as jwt_decode from 'jwt-decode';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as generator from 'generate-password';

export class AuthenticationUtility {

    public static jwtSign(secret: string, payload: any, expiresIn: number): string {
        return jwt.sign(payload, secret, { expiresIn: expiresIn });
    }

    public static jwtVerify(secret: string, token: string): boolean {
        return jwt.verify(token, secret) != null;
    }


    public static jwtDecode(token: string): any {
        return jwt_decode(token);
    }

    public static jwtDecodeAs<T>(token: string): T {
        return jwt_decode(token) as T;
    }

    public static jwtVerifyAndDecodeAs<T>(secret: string, token: string): T {
        return jwt.verify(token, secret) as any;
    }

    public static hashPassword(password: string): string {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }

    public static comparePassword(enteredPassword: string, hash: string): boolean {

        const compare = bcrypt.compareSync(enteredPassword, hash);
        return compare;
    }

    public static randomPassword(): string {

        var password = generator.generate({
            length: 8,
            numbers: true
        });

        return password;
    }
}
