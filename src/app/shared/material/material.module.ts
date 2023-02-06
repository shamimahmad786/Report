import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule,
  MatToolbarModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatCardModule,
  MatInputModule, 
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatRadioModule,
  MatDividerModule, 
  MatTabsModule,
  MatGridListModule } from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatRadioModule,
  MatDividerModule,
  MatTabsModule,
  MatDatepickerModule,
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }


