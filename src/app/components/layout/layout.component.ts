import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

/* Angular Material */
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

/* Constants */
import { ELEMENT_DATA } from '../../constants/layout.contants';

/* Interfaces */
import { PeriodicElement } from '../../interfaces/layout.interface';

/* Components */
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {

  /* References */
  readonly dialog = inject(MatDialog);
  public dataSource: PeriodicElement[] = ELEMENT_DATA;
  public displayedColumns: string[] = ['name', 'folio', 'sac', 'mv', 'register', 'options', 'details'];
  public chips: string[] = ['Identificación', 'Comprobante', 'Propiedad', 'Contrato', 'Contacto', 'Fotografía'];
  public images: string[] = [
    'assets/images/img1.png',
    'assets/images/img2.png',
    'assets/images/img3.png'
  ];

  /**
   * Create Profile Form
  */
  public profileForm = new FormGroup({
    recordSelect: new FormControl('', [Validators.required]),
    digitalizationId: new FormControl('', [Validators.required]),
    bothId: new FormControl('', [Validators.required]),
    externalLinks: new FormControl('', [Validators.required]),
    currentConsultation: new FormControl('', [Validators.required]),
    currentConsultationMath: new FormControl('', [Validators.required]),
    requestResponse: new FormControl('', [Validators.required]),
    requestReason: new FormControl('', [Validators.required]),
    observations: new FormControl('', [Validators.required]),
  });

  /**
   * Open Dialog
   */
  public openDialog() {
    this.dialog.open(DialogProfileComponent, { 
      data: this.profileForm.value
    });

    this.profileForm.reset();
  }

  /**
   * Shuffle Images
   */
  public shuffleImages(): void {
    console.log('Change picture');
    this.images = this.shuffleArray([...this.images]);
  }

  /**
   * Return random ordering images
   * @param array String[]
   * @returns String[]
   */
  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
}
