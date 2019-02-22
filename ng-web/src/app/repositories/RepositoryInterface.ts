import { Observable } from 'rxjs';

export default interface RepositoryInterface<T> {
  get(params: any): Observable<T[]>;

  getById(id: string): Observable<T>;

  create(model: T): Observable<T>;

  update(id: string, model: T): Observable<T>;

  delete(id: string): Observable<T>;
}