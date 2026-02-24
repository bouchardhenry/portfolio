import './App.css'
import AppRouter from './Router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  )
}

export default App
