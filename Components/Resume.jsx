import React from 'react'

export default function Resume(){
  const [state, setState] = React.useState({
    title: 'Resume',
    caption: '',

  })

  const { title, caption } = state

	return <>
    <section id="resume" className="resume">
      <div className="W3-container">

        <div className="section-title">
          <h2>{title}</h2>
          <p>{caption}</p>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item">
              <h4>Fikri Ali Fata</h4>
              <p><em></em></p>
              <ul>
                <li>Pekalongan, Jawa Tengah 51161</li>
                <li>+62 858 7520 4463</li>
                <li>me.alifata@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Management</h4>
              <h5>2019 - Present</h5>
              <p><em>Universitas Islam Indonesia, Yogyakarta</em></p>
              <p></p>
            </div>
          </div>
          <div className="w3-col l6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Intership Web Developer</h4>
              <h5>2020 (3 month)</h5>
              <p><em>Pola Kreatif, Yogyakarta</em></p>
              <ul>
                <li>Membuat Font End App Laundry</li>
                <li>Mengintegrasikan Font End dengan Back End</li>
                <li>Menyelesaikan Big Project CMS App Laundry</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    <style jsx>{`
      #resume {
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

      .resume .resume-title {
        font-size: 26px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #45505b;
      }

      .resume .resume-item {
        padding: 0 0 20px 20px;
        margin-top: -2px;
        border-left: 2px solid #ffc107;
        position: relative;
      }

      .resume .resume-item h4 {
        line-height: 18px;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        color: #eab000;
        margin-bottom: 10px;
      }

      .resume .resume-item h5 {
        font-size: 16px;
        background: #f7f8f9;
        padding: 5px 15px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .resume .resume-item ul {
        padding-left: 20px;
      }

      .resume .resume-item ul li {
        padding-bottom: 10px;
      }

      .resume .resume-item:last-child {
        padding-bottom: 0;
      }

      .resume .resume-item::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        left: -9px;
        top: 0;
        background: #fff;
        border: 2px solid #ffc107;
      }

      @media (min-width: 992px) {
        #resume {
          padding: 60px 0px 60px 160px;
        }
      }
    `}</style>
  </>
}