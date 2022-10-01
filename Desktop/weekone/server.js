import express from 'express';
import exphbs from 'express-handlebars';
const app= express()
const PORT = process.env.PORT || 3000;

//Middleware
app.engine('handlebars', exphbs.engine({ defaultLayout : 'main' }) ) ;
app.set('view engine','handlebars');
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// Get method
app.get('/',(req,res)=>{
    res.send('hello from backend to frontend!')
})

// Post method
app.post('/weather',(req,res)=>{
    let cityName=req.body.cityName
    res.send(cityName)
})

app.listen(PORT, () => console.log(`Server running listening on port ${PORT}`));