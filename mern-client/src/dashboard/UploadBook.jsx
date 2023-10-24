import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories=[
    "Fiction",
    "non-fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biblography",
    "Autobiography",
    "History",
    "Memoir",
    "Self-Help",
    "Buisness",
    "Children Book",
    "Travel",
    "Religion",
    "Art and Design"
   ]
  
  const[selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0])
  const handleChangeSelectedValue=(event)=>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  //handle book submission
  const handleBookSubmission=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageUrl=form.imageUrl.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFUrl=form.bookPDFUrl.value;

    const bookObj={
      bookTitle,authorName,imageUrl,category,bookDescription,bookPDFUrl
    }
    console.log(bookObj)

    //send data to db
    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res => res.json()).then(data=>{
      // console.log(data)
      alert("Book uploaded sucessfully !!!")
      form.reset();
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={handleBookSubmission} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="bookTitle"
              value="Book Title"
            />
          </div>
          <TextInput
            id="bookTitle"
            name='bookTitle'
            placeholder="Book Name"
            required
            type="text"
          />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              placeholder="Author Name"
              required
              type="text"
            />
          </div>

          
        </div>


        {/**second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="imageUrl"
              value="Book Image URL"
            />
          </div>
          <TextInput
            id="imageUrl"
            name='imageUrl'
            placeholder="Book image url"
            required
            type="text"
          />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
            onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
              }
              
            </Select>

              
            </div>

          
        </div>

        {/**description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book description"
            />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription'
            placeholder="Write your book description...."
            required
            className='w-full'
            rows={4}
          />

          
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFUrl"
              value="Book pdf URl"
            />
          </div>
          <TextInput
            id="bookPDFUrl"
            name='bookPDFUrl'
            placeholder="enter pook pdf url"
            required
            type="text"
          />
        </div>

        <Button type="submit" className='mt-5'>
          Upload Book
        </Button>
      
    </form>
    </div>
  )
}

export default UploadBook