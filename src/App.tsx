// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Modal } from '../lib/main'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Modal visibleBool={true} injectedText="Test" />
      <p>Coucou</p>
    </div>
  )
}

export default App
