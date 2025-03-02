import React from 'react'
import Languages from '../languages/Languages'
import { useTranslation } from 'react-i18next'


const Home = () => {
  const {t} = useTranslation()
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-4xl'>{t('PageName')}</h1>
      <Languages/>
    </div>
  )
}

export default Home