import React from 'react'

import ContentWrapper from '../contentWrapper/ContentWrapper'

import './style.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="links">
          <li>
            <a href="https://github.com/yahyamomin" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yahya-momin-53794225a" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div className="infoText">
          Contect Me Here -
          <a className="email" href="mailto:yahyamomin06@gmail.com" target="_blank" rel="noreferrer">
            Yahyamomin06@gmail.com
          </a>
        </div>

        <div className="infoText">@ copyRight all rights reserved - ClineHub inc private limited</div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
