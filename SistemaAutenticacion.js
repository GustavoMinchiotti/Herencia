export class SistemaAutenticar {
    static login(usuario, clave) {         //creo la función estática
        if ('autenticable' in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
    }
}