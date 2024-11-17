import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TelegramLoginButton from "react-telegram-login";

function BotButton() {
    const onAuth = ctx => {
        console.log(ctx);
    };

    return <TelegramLoginButton botName="testbtnbbot" requestAccess={'7837491841:AAEB2DdjfsEU5C1Kcd9GJL0X2uKyk1wbmk8'} dataOnAuth={onAuth} buttonSize={'large'}  dataAuthUrl={'https://test-telegram-auth.vercel.app/'}/>;
}

function App() {
  const [count, setCount] = useState(0)


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
      <BotButton/>
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
