# AppBooks

[Angular CLI] version 13.3.0.

# Modules

- Auth - Modulo principal en donde se trabaja toda la autentificacion del usuario (registro/login) e implementa guards que no permiten acceder y cargar otros modulos hasta que el usuario este conectado.
- Author - Modulo de autores, en donde se pueden ver, crear y modificar autores
- Book - Modulo de libros, en donde se pueden ver, crear, modificar libros y tambien se pueden ver los libros favoritos de un usuario. Así como agregar o quitar libros a favoritos, tambien implementa un pipe en el caso que el libro no tenga imagen agrega un por defecto. 
- Shared- Modulo general con componentes y clases compartidas
