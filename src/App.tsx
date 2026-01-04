import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='title'> ts-gantt-engine </h1>
        <div className='header-right'>
          <Link className='link' to={'play'}>Play</Link>
          <Link className='link' to={'docs'}>Docs</Link>
        </div>
      </div>
      <div className='body'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
