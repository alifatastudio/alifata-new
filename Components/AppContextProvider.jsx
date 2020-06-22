import React from 'react'

export const AppContext = React.createContext()

function AppContextProvider(props){
	const WA_ = '6285875204463'

	const [state, setState] = React.useState({
		name: 'Fikri Ali Fata',
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
    sosmed: [
      {
        name: 'twitter', 
        link: `https://twitter.com/alifata_`,
        icon: 'fa fa-twitter'
      },
      {
        name: 'facebook', 
        link: `https://facebook.com/me.alifata`,
        icon: 'fa fa-facebook'
      },
      {
        name: 'instagram', 
        link: `https://instagram.com/ali.fata`,
        icon: 'fa fa-instagram'
      },
      {
        name: 'whatsapp', 
        link: `https://wa.me/${WA_}`,
        icon: 'fa fa-whatsapp'
      }
    ]
	})

	return <AppContext.Provider value={{
		...state
	}}>
		{props.children}
	</AppContext.Provider>
}

export default AppContextProvider