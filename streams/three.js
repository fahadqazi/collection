const {Writable} = require('stream')
const {Readable} = require('stream')

// const outStream = new Writable({
//     write(chunk, encoding, callback){
//         console.log(chunk.toString())
//         callback()
//     }
// })

const inStream = new Readable({
    read(){

    }
})
inStream.push('hello world')
inStream.push('Hello new world')
inStream.push(null)

inStream.pipe(process.stdout)


// process.stdin.pipe(outStream)
