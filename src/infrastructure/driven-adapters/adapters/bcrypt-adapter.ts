import bcrypt from "bcrypt"
import {IHashCompareRepository, IHashRepository} from "@/domain/models";

export class BcryptAdapter implements IHashRepository, IHashCompareRepository {
    async hashRepository(text: string): Promise<string> {
        return bcrypt.hash(text, 12);
    }

    async compareRepository(text: string, verify: string): Promise<boolean> {
        return bcrypt.compare(text, verify)
    }
}