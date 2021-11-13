export const HASH_COMPARE_REPOSITORY = "HASH_COMPARE_REPOSITORY";

export interface IHashCompareRepository {
    compareRepository: (text: string, verify: string) => Promise<boolean>
}