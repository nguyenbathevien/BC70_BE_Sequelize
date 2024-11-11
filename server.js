import express from "express"
import rootRouter from "./src/routes/root.router.js";
import { handleError } from "./src/common/helpers/error.helper.js";

const app = express()

app.use(express.json());
app.use(rootRouter)
app.use(handleError)

const PORT = 3069
app.listen(PORT, () => {
    console.log(`Server online at ${PORT} `)
})

