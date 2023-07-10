import { Observable } from '@nativescript/core';

export class SecureStorageCommon extends Observable {
  setAsync(keystoreKeyAlias: string, data: string): Promise<void> {
    return new Promise((resolve, reject) => {});
  }
  getAsync(keystoreKeyAlias: string, data: string): Promise<string> {
    return new Promise((resolve, reject) => {});
  }
}

export enum ERROR_CODES {
  DEVELOPER_ERROR = 10, // Unexpected error, report to maintainer of plugin please
  TAMPERED_WITH = -5, // Datta changed since last successful authentication, maybe a hacker was on your device
}
