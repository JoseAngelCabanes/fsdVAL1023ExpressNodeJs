import express from "express";

import { router } from "./routes/filmsRoutes";

const app = express()

const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())

app.use('/films', router)

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
})