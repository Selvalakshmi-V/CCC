import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';
import { Router } from '@angular/router';
import { TempService } from '../data/temp.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'You are successfully Registered!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private formDataService: FormDataService, private router: Router, private tempService: TempService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['/homePage']);
    }
}
