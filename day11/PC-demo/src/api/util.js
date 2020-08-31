import { get } from "axios"

function getData(){
    return get('/getdata').then(data=>{
        let list = data.data.getNewsList;
        console.log(list)
        return Promise.resolve(list)
    })
}

export default {
    getData
}