import Loader from "./Loader";

const ShowRandom = (props) => {
  if(!props.loadedList) {
    return (<div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div>)
  }
  if(props.loadedList && !props.clicked) {
    return (<span onClick={props.handleClick} className="main-btn">Find book</span>)
  } else if(!props.loadedBook) {
    return (<div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div>)
  } else if (props.loadedBook && props.clicked) {
      return (
        <div className="book-card">
          <img className='book-img' src={props.randomBook.book_image} alt={props.randomBook.title} height="340px" width="240px"/>
          <div className="book-info">
            <p>Title: {props.randomBook.title}</p>
            <p>Author: {props.randomBook.author}</p>
            <p>About: {props.randomBook.description}</p>
          </div>
        </div>
      )
  }
}

export default ShowRandom;