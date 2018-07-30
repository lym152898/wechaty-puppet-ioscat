import { FileBox }  from 'file-box'
import qrImage      from 'qr-image'

export function qrCodeForChatie (): FileBox {
  const CHATIE_OFFICIAL_ACCOUNT_QRCODE = 'http://weixin.qq.com/r/qymXj7DEO_1ErfTs93y5'
  const name                           = 'qrcode-for-chatie.png'
  const type                           = 'png'

  const qrStream = qrImage.image(CHATIE_OFFICIAL_ACCOUNT_QRCODE, { type })
  return FileBox.fromStream(qrStream, name)
}

export const UUID = 'C08E89B931699B60C0551FA6D4A4343C55DE183D';
export const CONSTANT = {
  serviceID: 13,
  NAN: 0,
  NULL: '',
  LIMIT: 1000,
  P2P: 1,
  G2G: 2,
  CUSTOM_ID: 'dancewuli'
}

/**
 * 关系状态 1 运营号请求, 2 联系人请求, 3 通过好友, 4 删除好友
 */
export const enum STATUS {
  OPERATOR_REUQEST = 1,
  CONTACT_REQUEST = 2,
  FRIENDS_ACCEPTED = 3,
  FRIENDS_DELETED = 4

}

import {
  // Brolog,
  log,
}                       from 'brolog'

// export const log = new Brolog()
export {
  log,
}

export function ioscatToken(): string {
  if (process.env.WECHATY_PUPPET_IOSCAT_TOKEN) {
    return process.env.WECHATY_PUPPET_IOSCAT_TOKEN
  }

  throw new Error('Wechaty Puppet Ioscat needs a token, please set it in environment variable WECHATY_PUPPET_IOSCAT_TOKEN')
}