import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import {IEncryptRepository} from "@/domain/models";
import {AccessResourceInterface, ExecutionContextInterface} from "@tsclean/core";

dotenv.config({path: ".env"})

export class JwtAdapter implements IEncryptRepository, AccessResourceInterface {

    constructor(
        private readonly roles: string[]
    ) {
    }
    
    async encryptRepository(text: string, roles: []): Promise<string> {
        const payload = {id: text, roles: roles}
        return jwt.sign({account: payload}, process.env.JWT_SECRET, {expiresIn: "1d"})
    }

    accessResource(context: ExecutionContextInterface): boolean | Promise<boolean> {
        try {
            const request = context.getHttp().getRequest();
            const token = request.rawHeaders[1].split(" ")[1];

            if (token) {
                const decode = jwt.verify(token, process.env.JWT_SECRET);
                const roles = decode["account"].roles;

                let assignRole = false;

                for (const role of roles) {
                    assignRole = false;
                    for (const roleElement of this.roles) {
                        let roleExist = role.role === roleElement;
                        if (roleExist) assignRole = roleExist;
                        if (assignRole) return true;
                    }
                }
            }
        } catch (e) {
            return false;
        }
    }
}