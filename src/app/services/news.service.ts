import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.production";

@Injectable({
    providedIn: 'root'
})
export class NewsService{
    private http = inject(HttpClient);
    private apiBaseUrl = environment.apiUrl;

    getAllNews(){
        return this.http.get<NewsResponse[]>(`${this.apiBaseUrl}/api/news`);
    }

    getNewsByExtractionDate(date: string){
        return this.http.get<NewsResponse[]>(`${this.apiBaseUrl}/api/news/byExtractionDate?date=${date}`);
    }

    getNewsByExtractionDateRange(from: string, to: string){
        return this.http.get<NewsResponse[]>(`${this.apiBaseUrl}/api/news/byExtractionDate?from=${from}&to=${to}`);
    }

    getNewsByPublicationDate(date: string){
        return this.http.get<NewsResponse>(`${this.apiBaseUrl}/api/news/byPublishedDate?date=${date}`)
    }
    
    getNewsByPublicationDateRange(from: string, to: string){
        return this.http.get<NewsResponse[]>(`${this.apiBaseUrl}/api/news/byPublishedDate?from=${from}&to=${to}`)
    }

    getNewsBySlug(slug: string | null){
        if(slug == null) return null;
        return this.http.get<NewsResponse>(`${this.apiBaseUrl}/api/news/${slug}`);
    }

    getNewsByCategory(category: string | null){
        if(category == null) return null;
        return this.http.get<NewsResponse[]>(`${this.apiBaseUrl}/api/news/byCategory?category=${category}`);
    }

    getNewsByMultipleFilters(filters: NewsFilters){
        let params = new HttpParams();
        for (const [key, value] of Object.entries(filters)) {
            if (value != null && value !== '') params = params.set(key, String(value));
        }
        return this.http.get<PagedNewsResponse>(`${this.apiBaseUrl}/api/news`, { params });
    }

}