export default function CookieStandForm({onCreate}) {

  function handleSubmit(event){
    event.preventDefault();
    onCreate({
      location:event.target.location.value,
      min:event.target.minCustomers.value,
      max:event.target.maxCustomers.value,
      avg:event.target.avgCookies.value
    });
  } 

  return (
      <form className="w-2/3 py-2 mx-auto my-8 bg-green-200" onSubmit={handleSubmit}>
        <fieldset className="w-full p-2">
          <legend className="text-xl font-semibold text-center">Create Cookie Stand</legend>
          <div className="flex">
            <label className="" htmlFor="location">Location</label>
            <input className="flex-auto" id="location" name="location" type="text" />
          </div>
          <div className="flex gap-4 my-4">
            <div className="flex-1">
              <label htmlFor="min-customers">Minimum Customers per Hour</label>
              <input id="min-customers" name="minCustomers" type="number" required />
            </div>
            <div className="flex-1">
              <label htmlFor="max-customers">Maximum Customers per Hour</label>
              <input id="max-customers" name="maxCustomers" type="number" required />
            </div>
            <div className="flex-1">
              <label htmlFor="avg-cookies">Average Cookies per Sale</label>
              <input id="avg-cookies" name="avgCookies" type="number" step=".1" required />
            </div>
            <button className="flex-1 py-2 bg-green-500 rounded">Create</button>
          </div>
        </fieldset>
      </form>
  )
}