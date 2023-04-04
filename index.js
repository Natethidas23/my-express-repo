import express from 'express';
import cors from 'cors';

//import CRUD functions 
import{addNewTv,getAllTv}from "./src/tvlibrary.js";
const PORT =3060;

const app= express();
app.use(cors());
app.use(express.json());
//get all tv shows 
app.get('/tvShows',getAllTv);
//add all tv shows 
app.post('/tvShows',addNewTv);

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost${PORT}`);
});

