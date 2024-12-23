# How to start
Install packages
```sh
npm install
```

Start dev server
```sh
npm run dev
```

open `http://localhost:5173`

# Preguntas
1. Manejo del DOM Virtual en ReactJS
- ¿Cómo ReactJS utiliza el DOM virtual para manejar el rendimiento de la interfaz?
Cuando cambia el estado o las props de un componente, React no actualiza inmediatamente el DOM. Lo que hace es actualizar el DOM Virtual, generando una nueva representación de la interfaz de usuario. Al comparar el DOM Virtual anterior con el nuevo se identifica que partes del árbol han cambiado. Una vez ya identificados los cambios, React actualiza las partes necesarias del DOM real, lo que es mucho más rápido que reconstruir todo el DOM.

- Implementa `useEffect` para gestionar la actualización del DOM al cargar datos:
En `src/views/medical-team/index.jsx` se ve como se usa el hook useEffect para cargar los datos de doctor una vez se inicializa el componente.

2. Creación y uso de referencias en react
En `src/views/contact/form.tsx` se utiliza useRef para referenciar el primer input y hacerle focus cuando se carga esa vista, de esta forma el usuario puede partir escribiendo inmediatamente.

3. Uso de fragmentos y contexto en ReactJS
Se pude ver el uso de fragmentos en `src/views/contact/index.jsx`.

En cuanto al contexto, podemos ver a un provider `DoctorsProvider` en uso en `src/main.tsx`. Este provider permite hacer una sola request para obtener los doctores y utilizar la respuesta en varios componentes hijos del Provider.

4. Verificación de tipos con PropTypes
Revisar implementación en:
- `src/views/home/services.jsx`
- `src/views/backoffice/appointments.jsx`
- `src/components/doctor-card/index.jsx`

5. Uso de componentes de Orden Superior y Portales
Se agrega un HOC en `src/hoc/modal/index.jsx` y se utiliza en `src/components/doctor-card` para mostrar un modal con más información del doctor.
