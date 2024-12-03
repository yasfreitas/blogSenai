import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { posts } from './data/mock-dados';
import { Ipost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar posts da API, usando posts locais:', error);
        return of (posts);
      })
    );
  }

  getPostById(id: number): Observable<Ipost> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ipost>(url).pipe(
      catchError(error => {
        console.error(`Erro ao buscar o post com ID ${id}:`, error);
        return of (null as any);
      })
    );
  }

  addPost(newPost: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(this.apiUrl, newPost).pipe(
      catchError(error => {
        console.error('Erro ao adicionar um novo post:', error);
        return of (null as any);
      })
    );
  }

  updatePost(updatedPost: Ipost): Observable<Ipost> {
    const url = `${this.apiUrl}/${updatedPost.id}`;
    return this.http.put<Ipost>(url, updatedPost).pipe(
      catchError(error => {
        console.error(`Erro ao atualizar o post com ID ${updatedPost.id}:`, error);
        return of (null as any);
      })
    );
  }

  deletePost(id: number): Observable<void>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(error => {
        console.error(`Erro ao deletar o post com ID ${id}:`, error);
        return of ();
      })
    );
  }
}
