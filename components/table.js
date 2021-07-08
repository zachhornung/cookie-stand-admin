export default function Table({ stand }){
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  const animals = ['Cow', 'Chicken', 'Goat', 'Baby Goat', 'Llama', 'Pig', 'Horse', 'Yak', 'Sheep', 'Farmer Jack', 'Farmer Jill', 'Panda', 'Polar Bear', 'Grizzly Bear', 'Ferrett', 'Frog', 'Whole Zoo', 'Manatee', 'Dolphin', 'Shark', 'Penguin', 'STORK', 'Albatross']
  return (
    <table className='w-2/3'>
      <thead className='text-center my-2 bg-green-100'>
        <tr>
          <th>Location</th>
          {hours.map(hour => <th>{hour}</th>)}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody className='text-center bg-green-50'>
        {stand.map(object => <ObjectRow obj={object} hours={hours}/>)}
      </tbody>
      <tfoot>
        <tr className='bg-green-900 tex-center'>
          <th className='bg-green-900 text-gray-50'>Totals</th>
          {hours.map(_ => <td className='bg-green-900 text-gray-50 text-center'>{animals[Math.floor(Math.random() * animals.length)]}</td>)}
          <td className='bg-black text-gray-50 text-center text-shadow'>THE WHOLE FARM</td>
        </tr>
      </tfoot>
    </table>
  )
}
function ObjectRow({obj, hours}){
  const random_hourly_totals = hours.map(_ => Math.floor(Math.random() * 99))
  return (
    <tr className='shadow-md'>
      <td classname='shadow-sm'>{obj.location}</td>
      {random_hourly_totals.map(hour => <td className='shadow-lg'>{hour}</td>)}
      <td>{random_hourly_totals.reduce((a, b) => a + b, 0)}</td>
    </tr>
    )
}
