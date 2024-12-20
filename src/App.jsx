import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TelegramLoginButton from "react-telegram-login";
import {TLoginButtonSize} from "react-telegram-auth";
import LoginButton from "./btnAuth/BtnAuth.tsx";
import {getTokenAccess} from "./api/getTokenAccess.ts";

function BotButton() {
    const url = '/api/auth/getJwtByInitData'
    const onAuth = (user) => {
        console.log(user, 'awdawd');
    };

    return <TelegramLoginButton botName="testbtnbbot" dataOnAuth={(user) => onAuth(user)} buttonSize={'large'} />;
}

function App() {
  const [count, setCount] = useState(0)
    const [data, setData] = useState()

    const handleTelegramResponse = async (user) => {
         await getTokenAccess(user.id)
        // Здесь можно сохранить данные пользователя в state или отправить на сервер
    };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      {/*<BotButton/>*/}
          <LoginButton
              botName="testbtnbbot"
              buttonSize={TLoginButtonSize.Large}
              lang="en"
              usePic={false}
              cornerRadius={20}
              onAuthCallback={(user) => handleTelegramResponse(user)}
              requestAccess={'write'}
          />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
