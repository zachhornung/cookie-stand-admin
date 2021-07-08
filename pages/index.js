import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'

export default function Home() {

  const [stand, setStand] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.minCustomers = parseInt(event.target.minCustomers.value);
    standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
    standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

    setStand([...stand, standInfo]);
  }

  return (
    <div>
        <Head>
            <title>Cookie Stand Admin</title>
        </Head>
      <Header/>
      <Main submitHandler={submitHandler} stand={stand}/>
      <Footer/>
    </div>
  )
}