import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OutsideService } from '../../services/outside/outside.service';
import { PartsService } from '../../services/parts/parts.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    urlForm = new FormGroup({
        webapiUrl: new FormControl('https://next.json-generator.com/api/json/get/Eks2b7gdd', [Validators.required]),
    });

    registerForm = new FormGroup({
        partsJson: new FormControl('', [Validators.required]),
    });

    matSnackBarConfig = {
        duration: 4000,
    };

    constructor(
        private matSnackBar: MatSnackBar,
        private outsideService: OutsideService,
        private partsService: PartsService,
    ) { }

    ngOnInit(): void {
    }

    urlFormSubmit() {
        this.outsideService.getData(this.urlForm.controls.webapiUrl.value).subscribe((items) => {
            this.registerForm.controls.partsJson.setValue(JSON.stringify(items));
        });
    }

    registerFormSubmit() {
        const parts = JSON.parse(this.registerForm.controls.partsJson.value);
        
        this.partsService.saveParts(parts).subscribe(
            () => this.matSnackBar.open('added', 'ok', this.matSnackBarConfig),
            (error) => this.matSnackBar.open('error happened', 'ok', this.matSnackBarConfig)
        );
    }

}
