import React from 'react'

export default function Skills(){
  const [state, setState] = React.useState({
    title: 'SKills',
    caption: '',
    skillOnLeft: [
      {name: 'HTML', value: '80%' },
      {name: 'CSS', value: '70%' },
      {name: 'Javascript', value: '45%' }
    ],
    skillOnRight: [
      {name: 'React JS', value: '62%' },
      {name: 'Next JS', value: '56%' }
    ],
  })

  const {
    title, caption,
    skillOnLeft,
    skillOnRight
  } = state

	return <>
    <section id="skills">
     <div className="w3-container">

       <div className="section-title">
         <h2>{title}</h2>
         <p>{caption}</p>
       </div>

       <div className="w3-row">

         <div className="w3-col l6">
          {skillOnLeft.map(item => (
            <div className="skill" key={item.name}>
              <div className="w3-display-container">
                <span className="w3-display-left">
                  {item.name}
                </span>
                <span className="w3-display-right">
                  {item.value}
                </span>
              </div>
              <div className="w3-theme-l3 w3-round-large">
                <div 
                  className="progress w3-container w3-theme w3-round-large" 
                  style={{ width: item.value }}></div>
              </div>
            </div>
          ))}
         </div>

         <div className="w3-col l6">
          {skillOnRight.map(item => (
            <div className="skill" key={item.name}>
              <div className="w3-display-container">
                <span className="w3-display-left">
                  {item.name}
                </span>
                <span className="w3-display-right">
                  {item.value}
                </span>
              </div>
              <div className="w3-theme-l3 w3-round-large">
                <div 
                  className="progress w3-container w3-theme w3-round-large" 
                  style={{ width: item.value }}></div>
              </div>
            </div>
          ))}
         </div>

       </div>

     </div>
    </section>

    <style jsx>{`
      section {
        padding: 60px 0px;
        overflow: hidden;
      }

      .section-title {
        text-align: center;
        padding-bottom: 30px;
      }

      .section-title h2 {
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;
        color: #45505b;
      }

      .section-title h2::before {
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
      }

      .section-title h2::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #ffc107;
        bottom: 0;
        left: calc(50% - 20px);
      }

      .section-title p {
        margin-bottom: 0;
      }

      .skill {
        margin: 15px 5px;
      }

      .skill .w3-display-container {
        height: 25px;
      }

      .progress {
        height: 15px;
      }

      @media (min-width: 992px) {
        section {
          padding: 60px 0px 60px 160px;
        }
      }
    `}</style>
  </>
}