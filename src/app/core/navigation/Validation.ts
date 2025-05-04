export class Validation {
    static hasAccess(route: string): boolean {
        const menu = localStorage.getItem('Menus');
        if (!menu) {
            return true;//si menu no existe es porque estas desconetado
        }

        const menuItems = JSON.parse(menu);
        let menuDigest = [];
        menuItems.forEach(item => {
            menuDigest.push(item);
            if(item.children !== undefined){
                item.children.forEach((child: any) => {
                    menuDigest.push(child);
                });
            }
        });
        return menuDigest.some((item: any) => item.link === route && !item.hidden);
    }

    static getCurrentRoute(): string {
        return window.location.pathname;
    }

    static getCurrentRouteByHash(): string {
        return window.location.hash.slice(1);
    }

    static validateAccess(): void {
        const currentRoute = this.getCurrentRouteByHash();
        let hasAccess = this.hasAccess(currentRoute);
        console.log('%cSalida::::::', 'color: red; font-weight: bold;');
        console.log(hasAccess,this.getCurrentRouteByHash());
        console.log('%cSalida::::::', 'color: yellow; font-weight: bold;');
        if(!hasAccess){
            console.log('salir');
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
    }
}
