import './App.css'
import ReactPlayer from 'react-player'

function App() {
  const vidURL = 'https://www.youtube.com/watch?v=58qCba0BhHQ'
  return (
    <div className='App'>
      <h1>React Player Example</h1>
      <p>first: npm install react-player</p>
      <p>second: import ReactPlayer</p>
      <p>third: create vidURL const</p>
      <p>fourth: add ReactPlayer</p>

      <ReactPlayer url={vidURL} player={false} volume={0.5} />
    </div>
  )
}

export default App
