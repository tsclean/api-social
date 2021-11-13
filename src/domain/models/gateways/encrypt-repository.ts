export const ENCRYPT_REPOSITORY = "ENCRYPT_REPOSITORY";

export interface IEncryptRepository {
    encryptRepository: (text: unknown) => Promise<string>;
}