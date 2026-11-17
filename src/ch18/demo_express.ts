import express from 'express' // "strict": true才会报错

const app = express()

const router = express.Router()

app.use('/api/v1', router)
router.get('/list', (req, res)=>{
    res.json({
        code: 200,
    })
})
app.listen(9001, () => {
    console.log(9001)
})