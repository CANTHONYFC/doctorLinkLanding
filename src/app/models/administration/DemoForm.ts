export class DemoForm {
    nombreCompleto: string = '';
    especialidad: string = '';
    correo: string = '';
    celular: string = '';
    pais: string = '';
    procesoAutomatizar: string = '';

    constructor(init?: Partial<DemoForm>) {
        Object.assign(this, init);
    }
}
