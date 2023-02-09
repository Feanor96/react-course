import React from "react";

import './index.css';

function Book () {
    return (
        <div>
            Book
            <Image />
            <Title />
            <Author />
        </div>
    )
}

const Image = () => <img src="https://images.booksense.com/images/975/741/9781419741975.jpg" />
const Title = () => <p>Kill me</p>
const Author = () => <p>Donald Trump</p>

export default function Booklist() {
  return (
    <section>
      <Book />
    </section>
  )
}