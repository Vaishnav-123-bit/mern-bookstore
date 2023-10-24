import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
const EditBook = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageUrl,category,bookDescription,bookPDFUrl}=useLoaderData();
  
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
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageUrl=form.imageUrl.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFUrl=form.bookPDFUrl.value;

    const updatebookObj={
      bookTitle,authorName,imageUrl,category,bookDescription,bookPDFUrl
    }
    // console.log(bookObj)

    //update book
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatebookObj)
    }).then(res => res.json()).then(data=>{
      // console.log(data)
      alert("Book is updated sucessfully !!!")
      
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
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
            defaultValue={bookTitle}
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
              defaultValue={authorName}
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
            defaultValue={imageUrl}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPDFUrl}
          />
        </div>

        <Button type="submit" className='mt-5'>
          Update Book
        </Button>
      
    </form>
    </div>
  )
}

export default EditBook