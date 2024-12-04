declare namespace NodeJS {
  export interface ProcessEnv {
    VITE_ALLOW_ANONYMOUS: string;
    VITE_PLATFORM: string;
    VITE_LOG_WS: string;
    VITE_LOGIN_URL: string;
    VITE_APP_PORT: string;
    VITE_PORT: string;
    VITE_STUDIO_PORT: string;
    VITE_CONNECTION_ALIAS: string;
    VITE_MOCK_WS: string;
    VITE_LOG_WS: string;
    VITE_FOS_PORT: string;
    VITE_USE_FOS: string;
    VITE_WS_TIMEOUT: string;
    VITE_LOG_LEVEL: string;
    VITE_MOCK_FETCH: string;
  }
}
