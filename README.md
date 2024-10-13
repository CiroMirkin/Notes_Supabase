# Notes



## Flujo de datos

Obtención de datos y su uso:

* Los datos del usuario llegan desde Supabase en el archivo `src/app/page.tsx` y pasan al componente `InitNote` donde llegan al gestor de estado global.

* Se utiliza [Zustand](https://zustand-demo.pmnd.rs/) para el acceso y administración del estado global de la aplicación.

* La interfaz de los datos y la definición de su acceso y modificación esta definida en el archivo `src/store/index.ts`.

## Casos de uso

### Crear una tarea

Implementado en el componente `NewNote` en [src/components/NewNote.tsx](src/components/NewNote.tsx).

1. Al crear una nueva tarea esta se envía a Supabase a través de la función `submitNotes` en `src/supabase/submitNotes.ts`. Justo después de enviar la tarea a Supabase esta se guarda en el estado global usando la función `setNotes` de Zustand.

### Eliminar una tarea

Implementado en el componente `Notes` en [src/components/Notes.tsx](src/components/Notes.tsx).

### Editar una nota

Implementado en el componente `EditNote` en [src/components/EditNote.tsx](src/components/EditNote.tsx).

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