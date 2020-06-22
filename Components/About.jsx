import React from 'react'

export default function About(){
  const [state, setState] = React.useState({
    title: 'About',
    caption: '',
    profile: '/media/profile.jpg',
    bio: `
     Hai, nama Saya Fikri Ali Fata.
     Suka baca buku, 
     belajar hal baru, 
     kenalan baru,
     bepergian, pesta, dan uang.
     Tertarik dengan wanita,
     luar angkasa, quantum, grafitasi, lubang hitam,
     anti materi, pasar uang, investasi, dan uang.
     Akan menjadi seorang miliarder dan bebas finansial.
   `,
    bioListLeft: [
      {
        name: 'Tanggal Lahir', 
        value: '19, July 2000',
        icon: 'fa fa-birthday-cake'
      },
      {
        name: 'Kota', 
        value: 'Pekalongan',
        icon: 'fa fa-map'
      },
      {
        name: 'Pendidikan',
        value: 'SMA 01 Pekalongan',
        icon: 'fa fa-graduation-cap'
      }
    ],
    bioListRight: [
      {
        name: 'Instagram', 
        value: `@ali.fata`,
        icon: 'fa fa-instagram'
      },
      {
        name: 'Nomer Hp.', 
        value: `+62 858 7520 4463`,
        icon: 'fa fa-whatsapp'
      },
      {
        name: 'Webiste', 
        value: `https://alifata.com`,
        icon: 'fa fa-globe'
      },
      {
        name: 'Email', 
        value: `me.alifata@gmail.com`,
        icon: 'fa fa-envelope'
      },
    ]
  });
  const { 
    title, caption, profile, bio,
    bioListLeft, bioListRight
  } = state;

	return <>
    <section id="about">
      <div className="w3-container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{caption}</p>
        </div>

        <div className="w3-row">
          <div className="w3-col w3-center l4">
            <p><img 
              src={profile}
              className="profile" 
              alt="My Profile" 
            /></p>
          </div>
          <div className="w3-col l8 w3-padding">
            <div className="w3-center">
              <p>
                {bio}
              </p>
            </div>
            <div className="w3-row-padding">
              <div className="w3-col m6">
                <ul>
                  {bioListLeft.map(item => (
                    <li key={item.name}>
                      <i className={item.icon}></i> 
                      <span>{item.value}</span> 
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w3-col m6">
                <ul>
                  {bioListRight.map(item => (
                    <li key={item.name}>
                      <i className={item.icon}></i> 
                      <span>{item.value}</span> 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <style jsx>{`
      #about {
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

      .profile {
        width: 100%;
        border-radius: 15px;
        box-shadow:0 .5rem 1rem rgba(0,0,0,.15)
      }

      .profile:hover {
        cursor: pointer;
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
      }

      ul {
        list-style: none;
        padding: 0;
      }

      ul li {
        padding-bottom: 10px;
      }

      ul i {
        font-size: 21px;
        color: #ffc107;
        padding-right: 19px;
      }
      
      @media (min-width: 601px){
        .profile {
          width: 450px;
        }
      }

      @media (min-width: 992px) {
        #about {
          padding: 60px 0px 60px 160px;
        }

        .profile {
          width: 100%;
        }
      }
    `}</style>
  </>
}