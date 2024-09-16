import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    codeLivreur: string = '';
    nomLivreur: string = '';
    tel: string = '';

    constructor(public layoutService: LayoutService ) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menu',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
                    { label: 'Article', icon: 'pi pi-fw pi-file', routerLink: ['article'] },
                    {
                        label: 'Operation',
                        icon: 'pi pi-plus',
                        routerLink: ['/Operation'],
                        items: [
                            { label: 'Creer', icon: 'pi pi-plus', routerLink: ['/operation/creer'] },
                            { label: 'Modifier', icon: ' pi pi-pencil', routerLink: ['/operation/Modifier'] },
                            { label: 'Copier', icon: 'pi pi-copy', routerLink: ['/operation/Copier'] },
                            { label: 'Consulter', icon: 'pi pi-eye', routerLink: ['/Operation/Consulter'] },
                            { label: 'Supprimer', icon: 'pi pi-trash', routerLink: ['/Operation/Supprimer'] },
                            { label: 'Fermer', icon: 'pi pi-times', routerLink: ['/Operation/Fermer'] },
                            // Ajoutez d'autres sous-opérations ici si nécessaire
                        ]
                    },
                    { label: 'Edition', icon: 'pi pi-pencil', routerLink: ['/Edition'] },
                ]
            }
        ];
    }
}
