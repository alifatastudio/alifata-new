import React from 'react'

export default function Contact(){
  const [state, useState] = React.useState({
    title: 'Contact',
    location: {
      title: 'Lokasi', 
      value: 'Pekalongan, Jawa Tengah. 51161'
    },
    email: {
      title: 'Email',
      value: 'me.alifata@gmail.com'
    },
    phone: {
      title: 'Handphone',
      value: '+62 858 7520 4463',
      wa: '6285875204463'
    },
  })
  const [values, setValues] = React.useState({
    name: '', email: '', subject: '', message: ''
  })

  const handleOnChange = name => vent => {
    setValues(prevState => {
      return {
        ...prevState, 
        [name]: event.target.value
      }
    })
  }
  
  const { title, location, email, phone } = state
  const msg_ = `Nama = ${values.name}, Email= ${values.email}, Subjek= ${values.subject}, Pesan= ${values.message}`
  const encodedMsg_ = encodeURIComponent(msg_)
  const SendToWA = `https://wa.me/${phone.wa}?text=${encodedMsg_}`

	return <>
    <section id="contact" className="contact">
      <div className="w3-container">

        <div className="section-title">
          <h2>{title}</h2>
        </div>

        <div className="w3-row">

         <div className="w3-col l4">
           <div className="info">
             <div className="address">
               <i className="fa fa-map"></i>
               <h4>{location.title} :</h4>
               <p>{location.value}</p>
             </div>

             <div className="email">
               <i className="fa fa-envelope"></i>
               <h4>{email.title} :</h4>
               <p>{email.value}</p>
             </div>

             <div className="phone">
               <i className="fa fa-phone"></i>
               <h4>{phone.title} :</h4>
               <p>{phone.value}</p>
             </div>

            </div>

          </div>

          <div className="w3-col l8 w3-margin-top">
             <div className="w3-row">
               <div className="w3-half name">
                 <input 
                    type="text" 
                    name="name" 
                    className="w3-input w3-border w3-border-theme w3-margin-bottom" 
                    id="name" 
                    placeholder="Nama" 
                    onChange={handleOnChange('name')}
                  />
               </div>
               <div className="w3-half">
                 <input 
                    type="email" 
                    name="email" 
                    className="w3-input w3-border w3-border-theme w3-margin-bottom" 
                    id="email" 
                    placeholder="example@domain.com" 
                    onChange={handleOnChange('email')}
                  />
               </div>
             </div>
              <input 
                type="text" 
                name="subject" 
                className="w3-input w3-border w3-border-theme w3-margin-bottom" 
                id="subject" 
                placeholder="Subjek pesan" 
                onChange={handleOnChange('subject')} 
              />
              <textarea 
                rows='9'
                type="text" 
                name="message" 
                className="w3-input w3-border w3-border-theme w3-margin-bottom" 
                id="message" 
                placeholder="Tulis pesan Anda..." 
                onChange={handleOnChange('message')} 
              />
             <a 
              href={SendToWA} 
              target="_blank" 
              className="btn-send w3-btn w3-round-xlarge"
              >
              Kirim ke WhatsApp
             </a>

         </div>

       </div>

     </div>
   </section>

    <style jsx>{`
      #contact {
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

      .info {
        width: 100%;
        background: #fff;
      }

      .info i {
        font-size: 20px;
        color: #fff;
        float: left;
        width: 44px;
        height: 44px;
        background: #ffc107;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
      }

      .info h4 {
        padding: 0 0 0 60px;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #45505b;
      }

      .info p {
        padding: 0 0 0 60px;
        margin-bottom: 0;
        font-size: 14px;
        color: #728394;
      }

      .info .email, .info .phone {
        margin-top: 40px;
      }

      .info .email:hover i, .info .address:hover i, .info .phone:hover i {
        background: #ffe69b;
        color: #000;
      }

      .w3-input {
        border-radius: 11px;
      }

      .btn-send {
        width: 100%;
        background: #ffc107;
        color: #fff;
      }

      @media (min-width: 601px) {
        .name {
          padding-right: 10px;
        }
      }

      @media (min-width: 992px) {
        #contact {
          padding: 60px 0px 60px 160px;
        }
      }
    `}</style>
  </>
}