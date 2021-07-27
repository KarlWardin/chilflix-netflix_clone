import React from 'react'
import Top from './Top'
import Content from './Content'
import Section from './Section'
import Footer from './Footer'

const Welcome = ()=> {
   return(
       <div>
           <Top/>
           <div className="hr"></div>
           <Content/>
           <div className="hr"></div>
           <Section/>
           <div className="hr"></div>
           <Footer/>
       </div>
   )
}

export default Welcome;