import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
const UploadBook = () => {
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
        <form className="flex lg:w-[1180] flex-wrap flex-col gap-4">
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="email1"
                value="Your email"
            />
            </div>
            <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            />
        </div>
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="password1"
                value="Your password"
            />
            </div>
            <TextInput
            id="password1"
            required
            type="password"
            />
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
            Remember me
            </Label>
        </div>
      <Button type="submit">
        Submit
      </Button>
    </form>


        
    </div>
  )
}

export default UploadBook