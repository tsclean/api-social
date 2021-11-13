export const HASH_REPOSITORY = "HASH_REPOSITORY";

export interface IHashRepository {
    hashRepository: (text: string) => Promise<string>
}