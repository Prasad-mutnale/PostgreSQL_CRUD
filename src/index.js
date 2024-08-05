// import {app} from "./app";
// import {app} from './app'
import {app}  from "./app.js"
import {connectDb} from './config/postgres.js'

const port = 8000

connectDb();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})