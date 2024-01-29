export function ResponseObject<T>(status: number, data: T | T[]) {
    return {
        status,
        result: data
    }
}