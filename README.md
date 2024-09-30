# Notes



## Flujo de datos

Obtención de datos y su uso:

* Los datos del usuario llegan desde Supabase en el archivo `src/app/page.tsx` y pasan al componente `InitNote` donde llegan al gestor de estado global.

* Se utiliza [Zustand](https://zustand-demo.pmnd.rs/) para el acceso y administración del estado global de la aplicación.

* La interfaz de los datos y la definición de su acceso y modificación esta definida en el archivo `src/store/index.ts`.

## Casos de uso

### Crear una tarea

Implementado en el componente `NewNote` en [src/components/NewNote.tsx](src/components/NewNote.tsx).

1. Al crear una nueva tarea esta se envía a Supabase a través de la función `submitNotes` en `src/supabase/submitNotes.ts`. 

2. Justo después de enviar la tarea a Supabase esta se guarda en el estado global usando la función `setNotes` de Zustand.

### Eliminar una tarea

Implementado en el componente `Notes` en [src/components/Notes.tsx](src/components/Notes.tsx).

1. Al eliminar una tarea la consulta a Supabase se hace a través de la función `deleteNote` en `src/supabase/deleteNote.tsx`.

2. Justo después de hacer la consulta a Supabase para eliminar la tarea esta se elimina del estado global usando la función `deleteThisNote` de Zustand.

## Levantar proyecto

Localmente:

1. Remplazar el archivo `.env.local.example` por un archivo `.env.local` con el contenido de las variables de entorno.

2. Instalar las dependencias y correr el servidor de desarrollo:

```
npm i
```

```
npm run dev
```