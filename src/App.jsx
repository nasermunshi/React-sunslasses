import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const watches = [
  {id: 1, name: 'apple Watch', price: 200},
  {id: 2, name: 'samsu Watch', price: 200}, 
  {id: 3, name: 'mi Watch', price: 200}  
  ]

  return (
    <>
     
      <h1>Vite + React</h1>
     {
     watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
     }
    </>
  )
}

export default App
