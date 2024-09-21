# Notes



## Flujo de datos

Obtención de datos y su uso:

* Los datos del usuario llegan desde Supabase en el archivo `src/app/page.tsx` y pasan al componente `InitNote` donde llegan al gestor de estado global.

* Se utiliza [Zustand](https://zustand-demo.pmnd.rs/) para el acceso y administración del estado global de la aplicación.

* La interfaz de los datos y la definición de su acceso y modificación esta definida en el archivo `src/store/index.ts`.

Persistencia de datos:

Los datos se envían a Supabase a través de la función `submitNotes` en `src/supabase/submitNotes.ts`.

## Levantar proyecto

Remplazar el archivo `.env.local.example` por un archivo `.env.local` con el contenido de las variables de entorno.