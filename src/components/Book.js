import React from 'react'

function Book({element, index}) {
  let imgNumber = parseInt(index);
  imgNumber++;
 
  return (
    <div className="book-main-div">
        <div className="img-div">
            <img src={`/images/${imgNumber}.png`}/>
        </div>
        <h3 className="title-h3">Title : {element.title}</h3>
        <p className="book-info-desc">Description : {element.description}</p>
      </div>
  )
}

export default Book