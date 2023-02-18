import JSEncrypt from 'jsencrypt'

// 对密码进行RSA加密
export const RSAEncrypt = (content:string) => {
    let encryptor = new JSEncrypt() // 创建加密对象实例
  // 公钥
  let pubKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJNWsggxWl+EM3T9b+vM2nI2QTXllGRZ3OlzpSZwp3tFjN5+o1XP3oju2e/u4Ss3gxbEuzfjDpQC35DIFwd7scys+RKGKLFtuH0DbTs9AO7UGd1nZhvl3brMWxCDwTD9WGHCOI8uFkeq1lixn9RS7Dn/s2WvqE5zhm5yEq7cYCPwIDAQAB-----END PUBLIC KEY-----'
 
  encryptor.setPublicKey(pubKey) // 设置公钥
 
  return encryptor.encrypt(content) // 对内容进行加密, 可以在此打印下密文串
}