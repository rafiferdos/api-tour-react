import './App.css'
import Navbar from './Navbar/Navbar'
import ScrollToTop from 'react-scroll-to-top'
import Users from './Users/Users'

function App() {
  const loading = window.onload = () => {
    setTimeout(() => {
      document.getElementById('webpage').classList.remove('hidden')
      document.getElementById('loader-container').classList.add('hidden')
    }, 1500)
  }
  if (loading) {
    return (
      <div className='container mx-auto w-11/12 lg:w-10/12'>
        <ScrollToTop className='!rounded-full !flex !justify-center !items-center ' smooth color="#6f00ff" />
        <div id="loader-container" className="flex items-center justify-center min-h-screen">
          <span className="items-center justify-center loading loading-infinity text-primary lg:w-20 w-14"></span>
        </div>
        <div id='webpage' className="hidden">
          <Navbar />

          <Users />

        </div>
      </div>
    )
  }



  // return (
  //   // show loader for 1.5s and then hide it then show the return statement
  //   // <div className='container mx-auto w-11/12 lg:w-10/12'>
  //   //   <span id="loader" className="loading loading-infinity loading-lg"></span>
  //   //   <Navbar />
  //   // </div>
  //   <div className='container mx-auto w-11/12 lg:w-10/12'>
  //     <span id="loader" className="loading loading-infinity loading-lg"></span>
  //     <Navbar />
  //   </div>
  // )

}

export default App
