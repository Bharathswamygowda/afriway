import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(
    private toastController: ToastrService
  ) { }





  sucessMessage(data:any) {
    this.toastController.success(data);
  }

  errorMessage(data:any) {
    this.toastController.error(data);
  }



}
