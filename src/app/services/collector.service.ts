import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  readonly endpoint = environment.urlBase;

  constructor(private httpClient: HttpClient,
    private router: Router) { }

    
}
