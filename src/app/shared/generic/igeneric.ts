import { Observable } from 'rxjs';
export interface IGeneric<T, Id> {
  create(t: T): Observable<{ message: string; data: T }>;
  update(id: Id, t: T): Observable<{ message: string; data: T }>;
  getOne(id: Id): Observable<{ message: string; data: T }>;
  getAll(): Observable<{ message: string; data: T[] }>;
  delete(id: Id): Observable<any>;
}
