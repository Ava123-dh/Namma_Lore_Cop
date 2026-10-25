import BookShelf from '../components/BookShelf'
import { books } from '../data/books'

// Books: a shelf of reading on Karnataka and Bengaluru by Indian writers.
// Take one down to read the synopsis and reviews; Goodreads is one more click.
const Books = () => (
  <div className="books">
    <header className="books-head">
      <p className="books-kicker">
        The bookshelf <span aria-hidden="true">·</span> <span lang="kn">ಪುಸ್ತಕಗಳು</span>
      </p>
      <h1 className="books-title">
        Books on Karnataka <em>&amp; Bengaluru</em>
      </h1>
      <p className="books-blurb">
        {books.length} books, all by Indian writers, from the Chalukyas to the Cantonment. Drag
        the shelf along, tap a book to open it, then tap it again for Goodreads.
      </p>
    </header>

    <BookShelf books={books} />
  </div>
)

export default Books
