export default interface RepositoryInterface<T> {
  get(): Array<T>;

  getById(id: string): T;

  create(model: T): T;

  update(id: string, model: T): T;

  delete(id: string): T;
}