import { Observable } from 'rxjs';

export default interface RepositoryInterface<T> {
  get(params: any): Observable<T[]>;

  getById(id: String): Observable<T>;

  create(model: T): Observable<T>;

  update(id: String, model: T): Observable<T>;

  delete(id: String): Observable<T>;
}