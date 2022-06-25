const mongoose=require('mongoose');
const cities=require('./cities');
const{places,descriptors}=require('./seedHelpers');
const Campground=require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database connected");
});

const sample=array=>array[Math.floor(Math.random()*array.length)];

const seedDB=async()=>{
    await Campground.deleteMany({});
    for(let i=0;i<100;i++){
        const random1000=Math.floor(Math.random() * 50);
        const price=Math.floor(Math.random()*2000)+10;
        const camp=new Campground({
            author:'62b1fbcfc67667a279595a80',
            location: `${cities[random1000].City},${cities[random1000].State}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor vero deserunt, recusandae illo nihil autem? Reprehenderit blanditiis cum velit, repudiandae accusamus ea ab sed repellendus debitis voluptas deleniti laborum?',
            price,
            geometry:{
                type:"Point",
                coordinates:[cities[random1000].Longitude,cities[random1000].Latitude]
              },
            images:[
                    {
                      url: 'https://res.cloudinary.com/de14g3nai/image/upload/v1655974200/YelpCamp/gwc74bggsxiu33cmohou.avif',
                      filename: 'YelpCamp/gwc74bggsxiu33cmohou',
                    },
                    {
                      url: 'https://res.cloudinary.com/de14g3nai/image/upload/v1655974200/YelpCamp/cmoejorivlvyxuagm6te.avif',
                      filename: 'YelpCamp/cmoejorivlvyxuagm6te',
                    }
            ]
        })
        await camp.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})