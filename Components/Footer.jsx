import React from 'react'
import { AppContext } from './AppContextProvider'

export default function Footer(){
  const [state, setState] = React.useState({
    caption: '',
    license: {
      copyright: 'MyResume',
      link: `https://bootstrapmade.com/`,
      designedBy: 'BootstrapMade',
      editedBy: 'alifata.com'
    }
  })
  const { name, sosmed } = React.useContext(AppContext)
  const { caption, license } = state

	return <>
    <footer id="footer">
      <div className="w3-container w3-theme w3-center">
        <h3 className="name">{name}</h3>
        <p className="caption">{caption}</p>
        <div className="social-links">
         {sosmed.map(item => (
            <a 
              key={item.name} 
              href={item.link} 
              target="_blank"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>  

        <div className="copyright">
          &copy; Copyright {' '}
          <strong><span>{license.copyright}</span></strong>. 
          All Rights Reserved
        </div>
        <div className="credits">
          Designed by  {' '}
          <a href={license.link}>{license.designedBy}</a>
          {' '}Edited by {license.editedBy}
        </div>
      </div>
    </footer>

    <style jsx>{`
      .w3-container {
        padding: 35px 10px;
      }

      .name {
        font-size: 32px;
        font-weight: 700;
        line-height: 56px;
      }

      .social-links {
        margin: 50px 0px;
      }

      .social-links a {
        font-size: 24px;
        display: inline-block;
        color: #826200;
        line-height: 1;
        margin-right: 20px;
        transition: 0.3s;
      }

      .social-links a:hover {
        color: #fffbf0;
      }

      @media (min-width:601px){
        .name {
          font-size: 48px;
        }
      }
    `}</style>
  </>
}