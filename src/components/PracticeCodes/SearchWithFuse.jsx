import React from 'react'
import Fuse from "fuse.js";

// Importing Fake Cities Data
const books = [
    {
      "title": "Old Man's War",
      "author": {
        "firstName": "John",
        "lastName": "Scalzi"
      }
    },
    {
      "title": "The Lock Artist",
      "author": {
        "firstName": "Steve",
        "lastName": "Hamilton"
      }
    }
    /*...*/
  ]


function SearchWithFuse() {
  const options = { keys: ['title', 'author.firstName'] }
  // Create the Fuse index
const myIndex = Fuse.createIndex(options.keys, books)
// initialize Fuse with the index
const fuse = new Fuse(books, options, myIndex)
console.log(fuse._docs)
    return (
        <div>
            
        </div>
    )
}

export default SearchWithFuse
