/// <reference types="vite/client" />
 
interface ImportMeta {
    readonly VITE_API_URL: string;
    // Agrega aquí otras variables de entorno si las tienes
  }
   
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }