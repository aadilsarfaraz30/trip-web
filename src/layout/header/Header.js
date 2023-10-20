import React from 'react'
import style from './header.module.css';

const Header = () => {

  const navbar = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Categories',
      link: '/'
    },
    {
      title: 'Destination',
      link: '/'
    },
    {
      title: 'Blog',
      link: '/'
    },
    {
      title: 'Pages',
      link: '/'
    },
    {
      title: 'Dashboard',
      link: '/'
    },
    {
      title: 'Contact',
      link: '/'
    },
  ]


  return (
    <div className={style['header-container']}>
      <section className={style['header-title']}> 
        <h1>TripWeb</h1>
      </section>
      <section className={style['header-navbar']}>
        {navbar?.map((item,index) => (
          <div key={index}>
            {item?.title}
          </div>
        ))}
      </section>
      <section className={style['header-button']}>
        <button>Become an expert</button>
        <button>Sign in/Sign up</button>
      </section>
    </div>
  )
}

export default Header