export class SistemaAutenticar {
    static login(usuario, clave) {         //creo la función estática
        return usuario.clave == clave;
    }
}