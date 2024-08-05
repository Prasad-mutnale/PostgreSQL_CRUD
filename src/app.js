import express from 'express';
import cors from 'cors'
import bodyparser from 'body-parser'
import userRoutes from './view/routes.js'
export const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api', userRoutes)


