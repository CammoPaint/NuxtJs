import {HTTP} from '../services/base.http'

export default {
  get(success, error) {
    HTTP.get('photos')
      .then(response => {
        success(response.data)
      })
      .catch(e => {
        error(e)
      })
  }
}
