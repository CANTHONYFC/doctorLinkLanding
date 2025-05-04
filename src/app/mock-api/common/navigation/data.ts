/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
import * as Constants from 'app/shared/util/constants/menus';
export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: Constants.mn_home_shown,
        title: 'Inicio',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/admin/home'

    },
   
];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
