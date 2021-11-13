export const isObject = (fn: any): fn is object => typeof fn === 'object';

export function validateObjectId(param): boolean {
    const regExp = /^[0-9a-fA-F]{24}$/
    return  regExp.test(param)
}