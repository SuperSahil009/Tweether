import React from 'react'
import Link from "next/link"

import { Center } from "./Layout"
import {ReactComponent as Logotype} from "../icons/logotype.svg"
import Anime from "../icons/Anime.png"
export default class Header extends React.Component {

  render() {
    return (
      <div>
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              {/* <Logotype /> */}
              {/* <img src={Logotype} alt='FATGYA'></img> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"/> */}
            </a>
          </Link>
        </Center>
        <style jsx>{`
          header {
            background-color: #FFFFFF;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.14);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `}</style>
      </header>
      </div>
    )
  }
}