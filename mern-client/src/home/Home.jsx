import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
   <div>
      <Banner/>
      <BestSeller/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
   </div>
  )
}

export default Home