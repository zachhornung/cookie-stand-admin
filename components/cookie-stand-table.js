import {hours} from '../data'

export default function CookieStandTable({ stands, onDelete}) {

  const hourlyTotals = []
  for (let i = 0; i < hours.length; i++){
    hourlyTotals.push(stands.reduce((acc, curr) => acc + curr.cookiesEachHour[i], 0))
  }

  function handleDelete(event, obj){
    event.preventDefault();
    onDelete(obj);
  }


  return (
    <table className='w-5/6 mx-auto mb-5'>
      <thead className='text-center my-2 bg-green-100 w-5/6 mx-auto'>
        <tr>
          <th>Location </th>
          {hours.map(hour => <th>{hour}</th>)}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody className='text-center bg-green-50'>
        {stands.map((object, i) => <ObjectRow handleDelete={handleDelete} obj={object} />)}
      </tbody>
      <tfoot>
        <tr className='bg-green-900 tex-center'>
          <th className='bg-green-900 text-gray-50'>Totals</th>
          {hourlyTotals.map((total, i) => <td key={i}>{total}</td>)}
          <td className='bg-black text-gray-50 text-center text-shadow'>{hourlyTotals.reduce((acc, curr) => acc + curr)}</td>
        </tr>
      </tfoot>
    </table>
  );
}
function ObjectRow({obj, handleDelete}){
  
  return (
    <tr className='shadow-md odd: bg-green-500'>
      <td className='shadow-sm'>{obj.location} <button onClick={(event) => handleDelete(event,obj)}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="red">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></button></td>
      {obj.cookiesEachHour.map((hour, i) => <td key={i} className='shadow-lg'>{hour}</td>)}
      <td>{obj.totalDailyCookies}</td>
    </tr>
    )
}