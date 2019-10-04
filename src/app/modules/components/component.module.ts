import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarSelectorComponent} from './avatar-selector/avatar-selector.component';
import {IonicModule} from '@ionic/angular';
import {MapaComponent} from './mapa/mapa.component';
import {CardImageComponent} from './card-image/card-image.component';
import {ItemSeleccionadoComponent} from './item-seleccionado/item-seleccionado.component';
import {ArticuloSlideComponent} from './articulo-slide/articulo-slide.component';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
    declarations: [AvatarSelectorComponent, MapaComponent, CardImageComponent, ItemSeleccionadoComponent, ArticuloSlideComponent],
    exports: [
        AvatarSelectorComponent, MapaComponent, CardImageComponent, ItemSeleccionadoComponent, ArticuloSlideComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        PipesModule
    ]
})
export class ComponentModule {
}