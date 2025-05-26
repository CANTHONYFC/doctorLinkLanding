import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    isMobileMenuOpen = false;
    isFuncionesOpen = false;

    toggleMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    toggleFunciones() {
        this.isFuncionesOpen = !this.isFuncionesOpen;
    }

    // Opcional: cerrar al hacer clic fuera del menú
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
        const target = event.target as HTMLElement;
        // Aquí pones el id o clase del menú para comparar
        if (!target.closest('.funciones-menu')) {
            this.isFuncionesOpen = false;
        }
    }

    isMobileFuncionesOpen = false;



    toggleMobileFunciones() {
    this.isMobileFuncionesOpen = !this.isMobileFuncionesOpen;
    }

}
