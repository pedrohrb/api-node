import mongoose from 'mongoose'

const conn = mongoose.connect("mongodb://localhost:27017/apinode", {
 useNewUrlParser: true ,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: true
}).then(() => {
    console.log('Db On!')
}).catch((err) => {
    console.warn('Db error: ' + err)
})



export default conn