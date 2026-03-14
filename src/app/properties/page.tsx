import React from 'react'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import { properties } from '@/data/properties';

const Properties = () => {
  return (
    <>
      <FirstSection/>
      <SecondSection properties={properties}/>
      <ThirdSection/>
    </>
  )
}

export default Properties