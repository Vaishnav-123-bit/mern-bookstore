const express=require('express');
const app=express();
const PORT=process.env.PORT||5000;
const cors=require('cors');
const mongoose=require('mongoose')


//middlewares 
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`sever runnin on ${PORT}`)
})



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const bookCollections=client.db("bookInventory").collection("books");

    // insert a book into db using post 

    app.post('/upload-book',async(req,res)=>{
        const data=req.body;
        const result=await bookCollections.insertOne(data);
        res.send(result);
    })

    //getting all the books
    // app.get("/all-books",async(req,res)=>{
    //     const books=bookCollections.find();
    //     const result=await books.toArray();
    //     res.send(result);
    // })

    //update book

    app.patch("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const updateBookData=req.body;
        const filter={_id:new ObjectId(id)};
        const options={upsert:true};

        const updateDoc={
            $set:{
                ...updateBookData
            }
        }
        const result=await bookCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    //delete book 
    app.delete("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await bookCollections.deleteOne(filter);
        res.send(result);
    })

    //fiind by category 
    app.get("/all-books",async(req,res)=>{
        let query={};
        if(req.query?.category){
            query={category:req.query.category}
        }
        const result=await bookCollections.find(query).toArray();
        res.send(result);
    })
    app.get("/books/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollections.findOne(filter);
      res.send(result);

    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
