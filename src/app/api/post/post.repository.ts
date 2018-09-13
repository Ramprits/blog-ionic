import { HttpClient } from '@angular/common/http';
import { IGeneric } from '../../shared/generic/igeneric';
import { Observable } from 'rxjs';

export abstract class PostRepository<T, id> implements IGeneric<T, id> {
  create(
    t: T
  ): Observable<{
    message: string;
    data: T;
  }> {
    throw new Error('Method not implemented.');
  }
  update(
    id: id,
    t: T
  ): Observable<{
    message: string;
    data: T;
  }> {
    throw new Error('Method not implemented.');
  }
  getOne(
    id: id
  ): Observable<{
    message: string;
    data: T;
  }> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<{
    message: string;
    data: T[];
  }> {
    throw new Error('Method not implemented.');
  }
  delete(id: id): Observable<any> {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
}
