import { eth, getInstance } from './provider'
import UserController from "./artifacts/UserController.json"
import UserStorage from "./artifacts/UserStorage.json"

export const getUserInfo = async (userId) => {
    const storage = await getInstance(UserStorage)
    const { id, username } = await storage.profiles.call(userId)
  
    return {
      id: parseInt(id),
      username: eth.extend.utils.toAscii(username),
    }
  }

export const createUser = async (username) => {
    const controller = await getInstance(UserController)
  
    try {
      await ethereum.enable()
      const addresses = await eth.getAccounts()
      const byte32username = await eth.extend.utils.asciiToHex(username)
      const result = await controller.createUser(
       byte32username,
      {
        from: addresses[0],
      })
  
      return result
    } catch (err) {
      console.error("Err:", err)
    }
  }