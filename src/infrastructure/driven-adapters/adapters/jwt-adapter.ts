import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import {IEncryptRepository} from "@/domain/models";

dotenv.config({path: ".env"})

export class JwtAdapter implements IEncryptRepository {

    async encryptRepository(text: string): Promise<string> {
        const payload = {id: text}
        return jwt.sign({account: payload}, process.env.JWT_SECRET, {expiresIn: "1d"})
    }
}