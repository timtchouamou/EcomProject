import react from "react";
import Book from "./ui/Book";
import { books } from "../data"; // books in {} because it is a Fake data
console.log(books) // to display on console all the Fake data in books
console.log(books.filter((b) => b.rating ===5).slice(0,4)) // filter books by 5 starts rating

const Featured = () => {

    return(

<section id="features">
    <div className="container">
        <div className="row">
            <h2 className="section__title">
                Featured <span className="purple">Books</span>
            </h2>
            <div className="books">

                {books
                .filter((book) => book.rating === 5)
                .slice(0,4)
                .map((book) => (<Book book={book} key={book.id} />))}
               
            </div>
        </div>
    </div>
</section>

    );
}
export default Featured;

 