export interface fileServiceInterface {
    // eslint-disable-next-line no-unused-vars
    send(file: any): Promise<{status: number, message: string}>
}