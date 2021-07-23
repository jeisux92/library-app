import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    SideNavComponent,
  ],
  imports: [   
    MatSidenavModule,
    MatNativeDateModule
  ],
  exports:[
    SideNavComponent,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
