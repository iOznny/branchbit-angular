import { Component, Inject } from '@angular/core';

/* Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-profile',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule, 
    MatButtonToggleModule,
  ],
  templateUrl: './dialog-profile.component.html',
  styleUrl: './dialog-profile.component.css'
})

export class DialogProfileComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data.recordSelect)
  }
}
