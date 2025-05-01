import React from "react";
import { FaBook } from "react-icons/fa";
import { GiCharacter } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function MainPage() {
  return (
    <>
      <div className="main-page-main-div">
        <div className="main-page-div">
          <FaBook className="icon-big" />
          <p className="main-page-p">Books</p>
          <Link className="link" to="/books">
            See all
            <FaArrowRight className="icon-small" />
          </Link>
        </div>

        <div className="main-page-div">
          <GiCharacter className="icon-big" />
          <p className="main-page-p">Characters</p>
          <Link className="link" to='/characters'>
            See all
            <FaArrowRight className="icon-small" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainPage;
