import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private apiRequestService: ApiRequestService) { }

  getAllGames (search?: string) {
    const axiosInstance = this.apiRequestService.getAxiosInstance();
    return axiosInstance.get('http://localhost:8000/api/v1/games?search='+search)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.error('Error fetching games:', error);
      throw error;
    });
  }

  getGame (id: number) {
    const axiosInstance = this.apiRequestService.getAxiosInstance();
    return axiosInstance.get('http://localhost:8000/api/v1/games/'+id)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.error('Error fetching games:', error);
      throw error; 
    });
  }
}
