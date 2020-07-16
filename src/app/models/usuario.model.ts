export class UsuarioModel {
    public nombre: string;
    public correo: string;
    public password: string;
    public generoMusicaFav: string;

    constructor(  ) {
        this.nombre = '';
        this.correo = '';
        this.password = '';
        this.generoMusicaFav = '';
    }
}