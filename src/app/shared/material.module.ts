import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatFormFieldModule, MatSelectModule, MatButtonModule, MatOptionModule, MatToolbarModule,
    MatInputModule, MatCheckboxModule, MatMenuModule, MatListModule, MatIconModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

const mods = [MatFormFieldModule, MatButtonModule, MatOptionModule, MatToolbarModule,
    DragDropModule, MatSelectModule,
    MatInputModule, MatCheckboxModule, MatMenuModule, MatListModule, MatIconModule];
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        mods,
    ],
    exports: [mods]
})
export class MaterialModule { }
