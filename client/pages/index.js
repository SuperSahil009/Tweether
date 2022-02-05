import React from 'react'
import { eth, getInstance } from '../web3/provider' 
import UserStorage from "../web3/artifacts/UserStorage.json"
import { getUserInfo, createUser } from "../web3/users"
import { getTweetInfo, createTweet } from "../web3/tweets"
import { Page } from "../components/Layout"
import Anime from "../icons/Anime.png"
export default class IndexPage extends React.Component {
    logUser = async () => {
        const userInfo = await getUserInfo(1)
        console.log(userInfo)
        }
  
    createUser = async () => {
        const tx = await createUser("tristan")
        console.log(tx)
        }
    logTweet = async () => {
        const tweetInfo = await getTweetInfo(1)
        console.log(tweetInfo)
        }
    
    createTweet = async () => {
    const tx = await createTweet("Hello world!")
    console.log(tx)
    }
    async componentDidMount() {
        try {
            await ethereum.enable() // Prompt user to let our DApp access their addresses
            const addresses = await eth.getAccounts() // Get user's ETH addresses
            console.log(addresses)

            const balance = await eth.getBalance(addresses[0])


            const storage = await getInstance(UserStorage)
            const { username } = await storage.profiles.call(1)
        } catch (err) {
        console.error("User denied access to their ETH addresses!")
        }
    }

  render() {
    return (
        <Page>
        <button onClick={this.logUser}>
          Get user with ID 1
        </button>

        {/* ... */}
        {/* <img src={Anime}/> */}
        <button onClick={this.createTweet}>
          Create tweet
        </button>
      </Page>
    )
  }
}