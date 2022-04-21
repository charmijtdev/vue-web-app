import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.airtable.com/v0/appH3qEH9UeJeIQTx/YT_DATA',
})
Axios.defaults.headers.common = {
  Authorization: 'Bearer keyOi1sxGzBYdKTS5',
}
export default {
  getProjects() {
    return Axios.get()
  },
}
