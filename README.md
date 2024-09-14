# Notes



## Flujo de datos

* Los datos del usuario llegan desde Supabase en el archivo `src/app/page.tsx` y pasan al componente `InitNote` donde llegan al gestor de estado global.

* Se utiliza [Zustand](https://zustand-demo.pmnd.rs/) para el acceso y administración del estado global de la aplicación.

* La interfaz de los datos y la definición de su acceso y modificación esta definida en el archivo `src/store/index.ts`.
