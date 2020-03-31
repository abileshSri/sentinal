import { ApiHelper } from './helper/ApiHelper';

const apiHelper = new ApiHelper();

export class CommonService {
    constructor() {
    }
    
    get() {
        const uri = ``
        return apiHelper.get(uri);
    }
    // put(data) {
    //     const uri = ``
    //     return apiHelper.put(uri, data)
    // }
    // post(data) {
    //     const uri = ``
    //     return apiHelper.post(uri, data)
    // }
    // remove(data) {
    //     const uri = ``
    //     return apiHelper.remove(uri, data)
    // }

}