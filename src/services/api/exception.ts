export class ApiException extends Error {
    constructor(public readonly message: string = '') {
        super(message)
    }
}
  