import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ["WOMAN", "MAN", "KIDS", "ZARA SRPLS", "HOME", "BEAUTY"]
  let [width, setWidth] = useState(0)
  const navigate = useNavigate()
  const search = (event) => {
    if(event.key == "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value
      //URL을 바꿔준다
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={()=>setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={()=>setWidth(250)} />
        </div>
        {authenticate
        ?(<div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor:"pointer"}}>로그아웃</span>
          </div>)
        :(<div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor:"pointer"}}>로그인</span>
        </div>)}
      </div>
        <div className="nav-logo">
          <Link to="/">
            <img 
            width={150}
            src="data:image/png;base64,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"/>
          </Link>
        </div>
        <div className="nav-menu-area">
          <ul className="menu">
            {menuList.map((menu, index)=>(
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
          </ul>
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="제품검색" onKeyPress={(event)=>search(event)}/>
          </div>
        </div>
    </div>

  )
}

export default Navbar
