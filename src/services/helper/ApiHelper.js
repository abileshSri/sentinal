import axios from 'axios';


const BASE_HEADERS = "";
const validStatuses = [200, 201, 400];

// alert(process.env.LOCAL_URL)
const API_URL = ""
// const REDIRECT_URL = process.env.VUE_APP_REDIRECT_URL;

export class ApiHelper {
    constructor() { }
    // download document
    downloadFile(uri, data = {}) {
        return axios.get(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false,
            responseType: 'blob',
        })
            .then((res) => {
                this.checkResponse
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', res.config.url.split(/_(.+)/)[1]); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
            .catch(this.handleError)
    }
    /*
    * Wraps axios and provides
    * more convenient get method
    * calls with data.
    */
    getContent(uri, data = {}) {
        // if (Object.keys(data).length > 0) {
        //   uri = `${uri}?${qs(data)}`
        // }
        return axios.get(`${API_CONTENT_URL}` + uri, {
            // headers: this.getHeaders(),
            withCredentials: false
        })
            .then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
    * Wraps axios and provides
    * more convenient get method
    * calls with data.
    */
    get(uri, data = {}) {
        // if (Object.keys(data).length > 0) {
        //   uri = `${uri}?${qs(data)}`
        // }
        return axios.get(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false
        })
            .then(this.checkResponse)
            .catch(this.handleError)
    }


    getExternal(url) {
        return axios.get(url).then(this.checkResponse)
            .catch(this.handleError)
    }


    /*
    * Wraps axios and provides
    * more convenient post method
    * calls with payload data
    */
    post(uri, data) {
        return axios.post(`${API_URL}` + uri, data, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }
    // let config = {
    //   header: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // };

    // axios.post("/api", data, config).then(response => {});

    postFile(uri, formData) {
        return axios.post(`${API_URL}` + uri, formData, {
            headers: this.getHeaders(true),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
        // let config = {
        //     // header: {
        //     //     "Content-Type": "multipart/form-data"
        //     // },
        //     headers: this.getHeaders(true),
        //     withCredentials: false
        // };
        // axios.post(`${API_URL}` + uri, formData, {
        //     headers: this.getHeaders(),
        //     withCredentials: false
        // }).then(response => { });
    }

    /*
     * Wraps axios and provides
     * more convenient put method
     * calls with data
     */
    put(uri, data) {
        return axios.put(`${API_URL}` + uri, data, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
     * Wraps axios and provides
     * more convenient delete method
     */
    remove(uri, data) {
        return axios.delete(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false, data: data
        }).then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
    * Wraps axios and provides
    * more convenient post method
    * calls with payload data
    */
    login(uri, data) {
        return axios.post(`${API_URL}` + uri, data, {
            // headers: this.getHeaders(),
            withCredentials: false
        }).then(response => {
            // console.log(response.data.accessToken)
            // store.commit('setToken', response.headers['token'] ? response.headers['token'] : '');
            sessionStorage.setItem('Sentinel_Token', response.data.accessToken ? response.data.accessToken : '');
            return response;
        }).catch(this.handleError)
    }

    logout(uri) {
        // store.commit('setToken', '');
        return axios.post(`${API_URL}` + uri, {}, {
            // headers: this.getHeaders(),
            withCredentials: false
        }).then(response => {
            sessionStorage.removeItem('Sentinel_Token');
            window.location.href = `${LOGOUT_URL}`;
        }).catch(this.handleError);
    }

    /*
    * Returns default headers list
    * which will be used with every request.
    */
    getHeaders(multipart = false) {
        let defaultHeaders = BASE_HEADERS
        if (multipart) {
            defaultHeaders = {}
        }
        if (sessionStorage.getItem('Sentinel_Token')) {
            defaultHeaders = {
                'Authorization': "Bearer " + sessionStorage.getItem('Sentinel_Token'),
                ...defaultHeaders
            }
        }
        return defaultHeaders
    }

    /*
    * Wraps error responses from the API
    * and returns `Promise.reject` with error
    */
    checkResponse(response) {
        if (validStatuses.includes(response.status)) {
            if (response.data.errorCode === '401' || response.data.errorCode === '403') {
                sessionStorage.removeItem('Sentinel_Token');
                // window.location.href = `${REDIRECT_URL}`;
                alert("Access Denied")
                window.close();
                return Promise.reject(new Error('USER_ANONYMOUS'))
            } else if (response.data.errorCode === '440') {
                sessionStorage.removeItem('Sentinel_Token');
                // window.location.href = `${REDIRECT_URL}`;
                alert("Session Expired")
                window.close();
                return Promise.reject(new Error('USER_ANONYMOUS'))
            }
            return response.data
        }
        // If not authorized then reset token
        // and redirect to login page
        if (response.status === 401) {
            sessionStorage.removeItem('Sentinel_Token');
            // window.location.href = `${REDIRECT_URL}`;
            alert("Access Denied")
            return Promise.reject(new Error('USER_ANONYMOUS'))
        } else {
            // store.commit('showApiError', true);
            let err = new Error(response.statusText)
            err.response = response
            return Promise.reject(err)
        }
    }

    handleError(error) {
        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 401:
                    sessionStorage.removeItem('Sentinel_Token');
                    // window.location.href = `${REDIRECT_URL}`;
                    alert("Access Denied")
                    return error.response;
                // return Promise.reject(new Error('USER_ANONYMOUS'))
                case 400:
                    return Promise.reject(error.response.data);
                case 404:
                    return Promise.reject(error.response.data);
                case 403:
                    sessionStorage.removeItem('Sentinel_Token');
                    return error.response;
                default:
                    // store.commit('showApiError', true);
                    let err = new Error(error.response);
                    return Promise.reject(err);
            }
        } else {
            // store.commit('showApiError', true);
            let err = new Error(error.response);
            return Promise.reject(err)
        }

    }
}