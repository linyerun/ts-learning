import {dispatcher} from "./pubsub"

dispatcher.on('lyr', function (name: string) {
    console.log("1:",name)
})
dispatcher.on('lyr', function (name: string) {
    console.log("2:",name)
})
dispatcher.once('lyr', function (name: string) {
    console.log("once:",name)
})

dispatcher.emit('lyr', '加油!')
dispatcher.emit('lyr', '干就完了!')
