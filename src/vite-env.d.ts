/// <reference types="vite/client" />

// Here the env variables
interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
