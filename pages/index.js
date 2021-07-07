import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [location, setLocation] = useState('');
  const [max, setMax] = useState('');
  const [min, setMin] = useState('');
  const [avg, setAvg] = useState('');
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
  }
  const info = `location: ${location}, minCustomers: ${min}, maxCustomers: ${max}, avgCookies: ${avg}`
  return (
    <body>
      <Header/>
      <main className='h-96 mx-auto'>
      <div className='h-88 mx-auto flex'>
        <Form onSubmit={handleSubmit} loc={setLocation} setMin={setMin} setMax={setMax} setAvg={setAvg} />
      </div>
      <ReportTable className='text-center'/>
      <Info info={info}/>
    </main>
      <Footer/>
    </body>
    
  )
}
function Form(props){
  return (
    <form onSubmit={props.handleSubmit} className='justify-center h-168 bg-green-300 p-2 mx-10 my-5 rounded'>
      <div>
        <h2 className='min-w-full text-center mx-auto p-2'>
          Create Cookie Stand
        </h2>
        <div className='flex m-2'>

          <label for='location' className='mx-2'>Location</label>
          <input name='location' type='text' className='flex-auto' onChange={e => props.loc(e.target.value)}/>
        </div>
        <div className='flex py-10 mx-1 items-center'>
          <div className='flex'>
            <div className='justify-items-start'>
              <label for='min' className='py-10'>Minimum Customers Per Hour</label>
              <input name='min' type='number' className='mx-1' onChange={e => props.setMin(e.target.value)}/>
            </div>
            <div>
              <label for='max'>Maxinum Customers Per Hour</label>
              <input name='max' type='number' className='mx-1' onChange={e => props.setMax(e.target.value)}/>
            </div>
            <div>
              <label for='avg'>Average Cookies per Sale</label>
              <input name='avg' type='number' className='mx-1' onChange={e => props.setAvg(e.target.value)}/>
            </div>
          </div>
          <button className='w-48 h-20 bg-green-500'>Create</button>
        </div>
      </div>
    </form>
  )
}


function Header(){
  return (
    <header className='text-4xl p-4 bg-green-400'>Cookie Stand Admin</header>
  )
  
}



function Footer(){
  return (
    <footer className='text-xs p-4 bg-green-400'>&copy; 2021</footer>
  )
}

function ReportTable(){
  return (
    <h1>Report Table Coming Soon .....</h1>
  )
}
function Info({info}){
  return (
    <h2>{info}</h2>
  )
}
