import { SecureStorageCommon, ERROR_CODES } from './common';

declare const NSCSwiftMessages;

export class SecureStorage extends SecureStorageCommon {
  private keystoreKeyAlias: string;
  private data: string;
  private promiseResolve; // Used for async/callback
  private promiseReject; // Used for async/callback
  /**
   * @jsdoc method
   * @name setAsync
   * @description Encrypt the data and store it in shared preference of android
   * @memberof NsfsecureService
   * @param keystoreKeyAlias
   * @param data
   */
  setAsync(keystoreKeyAlias: string, data: string): Promise<void> {
    const keychain = NSCSwiftMessages.new();
    return new Promise((resolve, reject) => {
      this.promiseResolve = resolve;
      this.promiseReject = reject;
      try {
        keychain.setAsync(data, keystoreKeyAlias);
        resolve();
      } catch (ex) {
        console.trace(ex);
        reject({
          code: ERROR_CODES.DEVELOPER_ERROR,
          message: ex.message,
        });
      }
    });
  }

  /**
   * @jsdoc method
   * @name getAsync
   * @description Decypt the data and return it from shared preference of android
   * @memberof NsfsecureService
   * @param keystoreKeyAlias
   */
  getAsync(keystoreKeyAlias: string): Promise<string> {
    const keychain = NSCSwiftMessages.new();
    return new Promise((resolve, reject) => {
      this.promiseResolve = resolve;
      this.promiseReject = reject;
      try {
        let value = keychain.getAsync(keystoreKeyAlias);
        resolve(value);
      } catch (ex) {
        reject({
          code: ERROR_CODES.DEVELOPER_ERROR,
          message: ex.message,
        });
      }
    });
  }
}
