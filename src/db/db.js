import mongoose from 'mongoose'

const conn = mongoose.connect("mongodb+srv://deploy:2901bina@cluster0-cinvk.mongodb.net/test?retryWrites=true&w=majority", {
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