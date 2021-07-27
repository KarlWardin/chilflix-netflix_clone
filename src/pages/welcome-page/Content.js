import React from 'react'
import "./Content.css"

const Content=()=> {
    return(
        <div className="content">
            <div className="item">
               <div className="texts">
                   <h1>Enjoy on your TV.</h1>
                   <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                   </div>
               <div>
                   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV"></img>
                </div>
            </div>
            <div className="hr"></div>
            <div className="item">
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Download"></img>
                </div>
                <div className="texts">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>
            <div className="hr"></div>
            <div className="item">
                 <div className="texts">
                     <h1>Watch everywhere.</h1>
                     <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                 </div>
                 <div>
                     <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="mobile watch"></img>
                 </div>
            </div>
            <div className="hr"></div>
            <div className="item">
                <div>
                    <img src="https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="cartoon"></img>
                </div>
                <div className="texts">
                    <h1>Create profiles for children.</h1>
                    <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
        </div>
    )
}

export default Content