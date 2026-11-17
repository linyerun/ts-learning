import axios from "axios"

axios.
    get("http://localhost:9001/api/v1/list").
    then((res) => {
        console.log(res.data)
    })
