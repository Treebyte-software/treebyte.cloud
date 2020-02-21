import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeSloganComponent } from './components/home-slogan/home-slogan.component';
import { HomeSectionStockstoreComponent } from './components/home-section-stockstore/home-section-stockstore.component';
import { HomeSloganBrandComponent } from './components/home-slogan-brand/home-slogan-brand.component';
import { HomeSectionFreeDemoComponent } from './components/home-section-free-demo/home-section-free-demo.component';
import { HomeSectioMobileposComponent} from './components/home-section-mobilepos/home-section-mobilepos.component';
import { HomeSectionStockstorecloudComponent } from './components/home-section-stockstorecloud/home-section-stockstorecloud.component';
import { HomeSectionHeaderComponent } from './components/home-section-header/home-section-header.component';
import { HomeSectionMainComponent } from './components/home-section-main/home-section-main.component';
import { HomeSectionMainraisedComponent } from './components/home-section-mainraised/home-section-mainraised.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HomeFeaturesComponent, HomeSloganComponent, HomeSectionStockstoreComponent, HomeSloganBrandComponent, HomeSectionFreeDemoComponent, HomeSectioMobileposComponent, HomeSectionStockstorecloudComponent, HomeSectionHeaderComponent, HomeSectionMainComponent, HomeSectionMainraisedComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class HomeModule { }
