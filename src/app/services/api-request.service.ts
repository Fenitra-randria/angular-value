import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private axiosInstance!: AxiosInstance;

  constructor() {
    this.initializeAxios();
  }

  private initializeAxios() {
    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': '*',
        Accept: '*',
      },
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
