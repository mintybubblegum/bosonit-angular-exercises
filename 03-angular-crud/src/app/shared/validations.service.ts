import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class ValidationsService {

    public isNotValidField( form: FormGroup, field: string ){ 
        return form.controls[field].errors && form.controls[field].touched;    
    }

    public isFieldOneEqualToFieldTwo(field1: string, field2: string) {
    
        return ( formGroup: AbstractControl ): ValidationErrors | null => {
        
            const fieldValue1 = formGroup.get(field1)?.value;
            const fieldValue2 = formGroup.get(field2)?.value;

            if ( fieldValue1 !== fieldValue2 ) {
                formGroup.get(field2)?.setErrors({ notEqual: true })
                return { notEqual: true }
            }

            formGroup.get(field2)?.setErrors(null);
            return null;
        }

    }
}