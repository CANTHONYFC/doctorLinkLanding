export const BAGTAX = 0.3;
export const RECEIPT_TYPE_LIST = [{
    id: 'b2d517fe-9f77-45c3-a6cK-09c2cabc4615',
    name: 'FACTURA',
    code: '01',
},
{
    id: 'b2d517fe-9f77-45c3-a6cK-09c2cabc4616',
    name: 'BOLETA',
    code: '03',
},

];
export const PAYMENT_RECEIPT_STATUS = [
    { code: 0, value: 'Emitido', name: 'emitted' },
    { code: 1, value: 'Pagado', name: 'paid' },
    { code: 2, value: 'Anulado', name: 'annul' },
    { code: 3, value: 'Devuelto', name: 'return' },
    { code: '', value: 'Sin estado', name: 'all' },
];
export const PAYMENT_RECEIPT_TYPE = [
    { code: 0, value: 'Contado', name: 'counted' },
    { code: 1, value: 'Otros', name: 'credit' },
    { code: 2, value: 'Sin estado', name: 'without' },
    { code: '', value: 'Todos', name: '' },
];
export const BUTTONS_DEFAULT_LIST = [
    {
        id: '1',
        type: 'mat-mini-fab',
        shown: true,
        icon: 'mat_outline:delete_sweep',
        tooltip: 'Limpiar Filtros',
    },
    {
        id: '2',
        type: 'mat-mini-fab',
        shown: true,
        class: 'mx-1',
        icon: 'feather:filter',
        tooltip: 'Buscar',
    },
    {
        id: '3',
        type: 'mat-mini-fab',
        shown: true,
        icon: 'heroicons_outline:plus',
        tooltip: 'Registrar',
    }
]