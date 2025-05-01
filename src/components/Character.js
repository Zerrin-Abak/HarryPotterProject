import React from "react";

function Character({ element }) {
    
  return (
    <>
      <div className="character-main-div">
        <div className="img-div">
            <img src={`/images/${element.nickname}.png`}/>
        </div>
        <h3 className="fullname-h3">Name : {element.fullName}</h3>
        <p className="info-p">Nickname : {element.nickname}</p>
        <p className="info-p">Hogwarts House : {element.hogwartsHouse}</p>
        <p className="children-p">Children : </p>
          <ul className="list">
            {element.children.length !== 0 ? (
              element.children.map((value) => {
                return <li>{value}</li>;
              })
            ) : (
              <li>Has no children.</li>
            )}
          </ul>
      </div>
    </>
  );
}

export default Character;
