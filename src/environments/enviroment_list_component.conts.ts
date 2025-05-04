//LISTA DE COMPONENTES 🚀
export const LISTVIEW = {
    company_basa: 'COMPANY_BASA',
    company_facusa: 'COMPANY_FACUSA',
    company_azaleia: 'COMPANY_AZALEIA',
    company_lazzos:'COMPANY_LAZZOS',
    show_all_permissions: 'SHOW_ALL_PERMISSIONS'
}

const ALL_VIEW = [
    LISTVIEW.show_all_permissions
]

export const GET_VIEW = {
    BASA: [
        LISTVIEW.company_basa,
        ...ALL_VIEW
    ],
    FACUSA: [
        LISTVIEW.company_facusa,

    ],
    AZALEIA: [
        LISTVIEW.company_azaleia,
    ],
    LAZZOS: [
        LISTVIEW.company_lazzos,
    ]
}


