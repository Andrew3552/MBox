import Header from './components/Header/Header'
import MainSection from './components/MainTitle/MainTitle'
import TvShows from './components/TvShows/TvShows'
import Movies from './components/Movies/Movies'
import Popular from './components/Popular/Popular'
import Actors from './components/Actors/Actors'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'


import './App.css'

function App() {
 

  return (
    <>
      <Header />
      <MainSection />
      <TvShows />
      <Movies />
      <Popular />
      <Actors />
      <ComingSoon />
      <Banner />
      <Footer />
    </>
  )
}

export default App
