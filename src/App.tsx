import { useState } from 'react'
import { Button } from 'tdesign-react'
import nodeLogo from './assets/node.svg'
import Update from '@/components/update'
import 'tdesign-react/es/style/index.css'
import './App.less'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div>
        <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
          <img src='./electron-vite.svg' className='logo' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className='card'>
        <Button theme="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Electron + Vite logo to learn more
      </p>
      <div className='flex-center'>
        Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src={nodeLogo} alt='Node logo' />
      </div>

      <Update />
    </div>
  )
}

export default App
