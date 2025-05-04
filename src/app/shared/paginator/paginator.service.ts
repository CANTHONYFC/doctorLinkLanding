import { Injectable } from '@angular/core';
import { MatLegacyPaginatorIntl as MatPaginatorIntl } from '@angular/material/legacy-paginator';
import { Subject } from 'rxjs';
@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
    changes = new Subject<void>();

    firstPageLabel = `Primera página`;
    itemsPerPageLabel = `Registros por página: `;
    lastPageLabel = `última página`;

    // You can set labels to an arbitrary string too, or dynamically compute
    // it through other third-party internationalization libraries.
    nextPageLabel = 'Siguiente página';
    previousPageLabel = 'Anterior página';

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0) {
            return `Página 1 de 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return `Página ${page + 1} de ${amountPages}`;
    }
}
