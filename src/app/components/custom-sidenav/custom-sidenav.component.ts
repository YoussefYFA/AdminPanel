import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
  <div class="sidenav-header">
    <img  [width]="profilePicSize()" [height]="profilePicSize()" src="/assets/profile-pic.jpg"/>
    <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
      <h2> Your channel </h2>
      <p> YFA </p>
    </div>
  </div>
<mat-nav-list> 
    <a mat-list-item *ngFor="let item of menuItems()" [routerLink]="item.route"
    class="menu-item"
    [routerLink]="item.route"
    routerLinkActive="selected-menu-item"
    #rla="routerLinkActive"
    [activated]="rla.isActive"
    >

    <mat-icon [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined'"
    matListItemIcon>{{ item.icon }}</mat-icon>
      <span mat-ListItemTitle *ngIf="!sideNavCollapsed()">{{ item.label }}</span>
  </a>
    
</mat-nav-list>
  `,
  styles: [
`
      :host * { 
    transition: all 500ms ease-in-out;
  }


    .sidenav-header {
      padding-top:24px;
      text-align: center;

      > img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;

      }

      .header-text {
        height: 3rem;

        > h2 {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }
        > p {
          margin: 0;
          font-size: 0.8rem;
        }
      }
    }
    
    .hide-header-text {
    opacity: 0;
    height: 0px !important;
    /* important helps us ovverride the height 3 
    value of the original header-test above */
    }
    
    .menu-item {
      border-left: 3.5px solid;
      border-left-color: rgba(0,0,0,0);
    }
    .selected-menu-item {
      border-left: 5px solid;
      border-left-color: var(--primary-color);
      background: rgba(0,0,0,0.05);
    }
   ` 
  ]

})

//  templateUrl: './custom-sidenav.component.html',
//styleUrl: './custom-sidenav.component.css'
//return template into html, return these inside component

export class CustomSidenavComponent {

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
    }
    
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100'); 

}
//store, map, layers, filter_list view_comfy (categories) video_library , analytics , comment , perm_identity , 