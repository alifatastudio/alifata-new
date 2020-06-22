import React from 'react'
import { AppContext } from './AppContextProvider'

export default function Hero(){
  const [state, setState] = React.useState({
    iam: [
      'Your Partner', 
      'Web Developer',
      'a Student at University' 
    ],
    bgHero: '/media/hero.png',
  })
  const { name, sosmed } = React.useContext(AppContext)
  const { iam, bgHero } = state
  const [typed, setTyped] = React.useState({
    current: 0, sub: 0
  })

  React.useEffect(() => {
    const max_ = iam.length - 1

    const intervalTyped = setInterval(() => {
      setTyped(prevState => {
        const submax_ = iam[prevState.current].length + 5
        
        if(prevState.sub == submax_){
          
          if(prevState.current == max_) return {
            current: 0, sub: 0
          }

          return {
            current: prevState.current + 1, 
            sub: 0
          }

        }
        
        return {
          current: prevState.current,
          sub: prevState.sub + 1
        }
      })
    }, 200);
    
    return () => clearInterval(intervalTyped);
  }, []);

	return <>
    <section id="hero">
      <div className="w3-display-container">
        <div className="content">
          <h1 className="name">{name}</h1>
          <p className="iam">I'm <span>{iam[typed.current].substr(0, typed.sub)}</span></p>
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
        </div>
      </div>
    </section>

    <style jsx>{`
      #hero {
        width: 100%;
        height: 100vh;
        background: url(${bgHero}) top center no-repeat;
        background-size: cover;
        position: relative;
      }

      #hero:before {
        content: "";
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
      }

      .w3-display-container {
        width: 100%;
        height: 100%;
      }

      .content {
        position:absolute;
        top:50%;
        left:50%;
        width: 100%;
        transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%);
        text-align:center;
      }

      .name {
        font-size: 32px;
        font-weight: 700;
        line-height: 56px;
      }

      .iam {
        margin: 15px 0 0 5px;
        font-size: 19px;
        font-family: "Poppins", sans-serif;
      }

      .iam span {
        font-size: 21px;
        font-weight: 500;
        line-height: 56px;
        color: #ffc107;
        font-family: "Poppins", sans-serif;
      }

      .social-links {
        margin: 30px 0 0 5px;
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
        color: #ffc107;
      }

      @media (min-width:601px){
        .name {
          font-size: 48px;
        }

        .iam {
          font-size: 24px;
        }

        .iam span {
          font-size: 26px;
        }
      }
      
      @media (min-width: 992px) {
        .content {
          left:0%;
          width: auto;
          padding-left: 160px;
          text-align:left;
          transform:translate(0%,-50%);
          -ms-transform:translate(-0%,-50%);
        }

        .name {
          font-size: 64px;
        }

        .iam {
          font-size: 34px;
        }

        .iam span {
          font-size: 36px;
        }
      }
    `}</style>
  </>
}