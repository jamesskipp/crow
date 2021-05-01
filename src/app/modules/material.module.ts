import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
