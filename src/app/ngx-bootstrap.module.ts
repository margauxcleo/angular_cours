import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

const modules: any[] = [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})

export class NgxBootstrapModule {}