import http from '../http-common'

class ContactServices {
    submitForm(data){
        return http.post('/contact', data)
    }
}

export default new ContactServices()