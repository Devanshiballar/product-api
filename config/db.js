const { default: mongoose} = require('mongoose')

const db = mongoose
.connect("mongodb+srv://devanshiballar:jSaj1kKMCOKyMbuW@first-project.jiscmxo.mongodb.net/")
.then(()=>{
    console.log('database connected 👍')
})
.catch(()=>{
    console.log("database not connected")
})

module.exports = db