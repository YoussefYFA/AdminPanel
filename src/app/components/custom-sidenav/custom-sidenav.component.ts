import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, HeaderComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})

export class CustomSidenavComponent {

  username = "YFA";

  sideNavCollapsed = signal(false);
  
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  
  
  menuItems = signal<MenuItem[]>([
    
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'shopping_cart',
      label: 'Products',
      route: 'productspage',
    },
    {
      icon: 'layers',
      label: 'Categories',
      route: 'categoriespage',
    },
    {
      icon: 'dashboard',
      label: 'Register',
      route: 'registrationpage',
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100'); 

}

//other icon names for later:
//store, map, layers, filter_list view_comfy (categories) video_library , analytics , comment , perm_identity , 