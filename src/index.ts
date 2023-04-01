import express, {Request, Response} from "express"
const app = express();
const port = 4000;


app.get('/', (req: Request, res: Response) => {
    res.send("hi")
})

app.listen( port, () => {
    console.log(`Server running on port ${port}`)
})