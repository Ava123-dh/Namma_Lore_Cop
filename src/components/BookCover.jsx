// A book's real front cover. The shelf shows the small copy; the open book
// shows the large one over the small, so the cover is never blank while the
// large one loads.

const coverSrc = (book, small) =>
  `${import.meta.env.BASE_URL}images/books/${book.id}${small ? '-sm' : ''}.jpg`

const BookCover = ({ book, large = false }) => (
  <img
    className="book-cover"
    src={coverSrc(book, !large)}
    style={large ? { backgroundImage: `url(${coverSrc(book, true)})` } : undefined}
    alt={large ? `Cover of ${book.title}` : ''}
    width={large ? 900 : 360}
    height={Math.round((large ? 900 : 360) / book.aspect)}
    draggable={false}
    decoding="async"
  />
)

export default BookCover
