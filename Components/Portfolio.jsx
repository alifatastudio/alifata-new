import React from 'react'

const initialModal = {
  isOpen: false,
  item: {
    name: '',
    imgs: [
      {img: '', caption: ''}
    ]
  }
}

export default function Portfolio(){
  const [state, setState] = React.useState({
    title: 'Portfolio',
    caption: '',
    portfolio: {
      left: [
        {
          name: 'Simple Laundry App',
          imgs: [
            {img: '/media/portfolio/laundry-01.png', caption: ''},
            {img: '/media/portfolio/laundry-02.png', caption: ''},
            {img: '/media/portfolio/laundry-03.png', caption: ''},
            {img: '/media/portfolio/laundry-04.png', caption: ''},
            {img: '/media/portfolio/laundry-05.png', caption: ''}
          ],
          desc: 'Projek dalam rangka mengikuti magang dari Pola Kreatif. Menyelesaika Big Project berupa CMS Simple Laundry App. Menggunakan Framework Laravel, backend MySql. Terdapat fontend dan juga backend, fitur edit berbagai konten halaman (ex: Jumbotron, About Us, Title, Contact Info, etc), dan CRUD berbagai hal yang dibutuhkan (ex: Product, Slide Promotion, etc).'
        }
      ],
      center: [
    
      ],
      right: [
          
      ]
    }
  })
  const [modal, setModal] = React.useState({...initialModal})
  const [indexSlide, setIndexSlide] = React.useState(0)

  const { title, caption, portfolio } = state

  const openModal = item => () => {
    setModal({...modal, isOpen: true, item: item })
  }

  const closeModal = () => {
    setModal({...initialModal})
  }

  const handleSlide = plusOrMinus => () => {
    const newIndex = indexSlide + plusOrMinus;
    const slideMax_ = modal.item.imgs.length -1
    setIndexSlide(prevState => {
      if(newIndex > slideMax_) return slideMax_
      if(newIndex < 0) return 0
      return newIndex
    })
  }

	return <>
    <section id="portfolio" className="portfolio">
     <div className="w3-container">

       <div className="section-title">
         <h2>{title}</h2>
         <p>{caption}</p>
       </div>
        <div className="w3-third wrap">
          {portfolio.left.map(item => (
            <div 
              onClick={openModal(item)}
              className="w3-display-container portfolio-item" key={item.name}>
              <img 
                src={item.imgs[0].img}
                className="img-fluid"
              />
              <div className="w3-display-middle w3-center menu">
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="w3-third wrap">
          {portfolio.center.map(item => (
            <div className="w3-display-container portfolio-item" key={item.name}>
              <img 
                src={item.imgs[0].img}
                className="img-fluid"
              />
              <div className="w3-display-middle w3-center menu">
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="w3-third wrap">
          {portfolio.right.map(item => (
            <div className="w3-display-container portfolio-item" key={item.name}>
              <img 
                src={item.imgs[0].img}
                className="img-fluid"
              />
              <div className="w3-display-middle w3-center menu">
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div 
          id="modal-portfolio" 
          className="w3-modal" 
          style={{display: modal.isOpen? 'block': 'none', overflowY: 'auto'}}>
          <div className="w3-modal-content w3-animate-zoom w3-card-4">
            <header className="w3-container w3-teal w3-center" style={{height: '60px'}}> 
              <span onClick={closeModal}
                className="w3-button w3-display-topright">&times;</span>
            </header>
            <div className="w3-container">
              <div className="w3-display-container">
                {modal.item.imgs.map((value, index) => (
                  <div 
                    className="w3-display-container mySlides" 
                    key={value.img} 
                    style={{display: index === indexSlide ? 'block': 'none'}}
                    >
                    <img src={value.img} style={{width:'100%', borderRadius: '15px'}} />
                    <div className="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black">
                      {value.caption}
                    </div>
                  </div>
                ))}
                <button 
                  className="w3-button w3-display-left w3-theme" 
                  onClick={handleSlide(-1)}>&#10094;</button>
                <button 
                  className="w3-button w3-display-right w3-theme" 
                  onClick={handleSlide(1)}>&#10095;</button>
              </div>
                  
            </div>
            <footer className="w3-container w3-center">
              <h2 className="">{modal.item.name}</h2>
              <p className="w3-padding">{modal.item.desc}</p>
            </footer>
          </div>
        </div>

      </div>
   </section>

    <style jsx>{`
      #portfolio {
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

      .wrap {
        padding-right: 15px;
        padding-left: 15px;
      }

      .portfolio-item {
        margin-bottom: 18px;
        cursor: pointer;
      }

      .portfolio-item .menu {
        display: none;
      }

      .portfolio-item:hover img {
        opacity: 0.4;
        transition: 0.3s;
      }

      .portfolio-item:hover .menu {
        display: block;
        transition: 0.3s;
      }

      .portfolio-item h4 {
        color: #45505b;
        font-size: 16px;
        font-weight: 700;
      }
      
      .img-fluid {
        width: 100%;
        border-radius: 15px;
        box-shadow:0 .5rem 1rem rgba(0,0,0,.15)
      }

      @media (min-width: 992px) {
        #portfolio {
          padding: 60px 0px 60px 160px;
        }
        .portfolio-item h4 {
          font-size: 21px;
        }
      }
    `}</style>
  </>
}