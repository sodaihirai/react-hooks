import { shortIso } from './date-wrangler'

export const getData = (url) => {
  return fetch(url)
    .then(resp => {

      if(!resp.ok) {
        throw Error('There was a problem fetching data.')
      }

      return resp.json()
    })
}

export const getBookings = (bookableId, startDate, endDate) => {
    const start = shortIso(startDate)
    const end = shortIso(endDate) 
    const query = `?bookableId=${bookableId}&date_gte=${start}&date_lte=${end}`
    const root = 'http://localhost:3001/bookings'
    return getData(root + query)
}
