export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super();
    this.name = 'NotFoundError';
    this.message = message;
    this.statusCode = 404;
  }
}
