export class GenericoTableSmtpDto {
    tituloTabla: string = '';
    campos: MailCampoDto[] = [];

    constructor(init?: Partial<GenericoTableSmtpDto>) {
        if (init?.campos) {
            this.campos = init.campos.map(c => new MailCampoDto(c));
        }
        Object.assign(this, init);
    }
}

export class MailCampoDto {
    titulo: string = '';
    descripcion: string = '';

    constructor(init?: Partial<MailCampoDto>) {
        Object.assign(this, init);
    }
}
