import KeychainSwift

@objcMembers
@objc(NSCKeychainSwift)
public class NSCKeychainSwift: NSObject {
  @objc public var onDoneCallBack: ((String)-> Void)? = nil;
  public func setAsync(key: String, data: String) {
    let keychain = KeychainSwift();
    keychain.set(data, forKey: key)

  }

  public func getAsync(key: String) {
    let keychain = KeychainSwift();
    return keychain.get(key);
  }
}