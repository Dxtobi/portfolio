
import {useState} from 'react'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {RiGhostSmileFill}from 'react-icons/ri'


const Home = () => {
  const [handsOn, setHandsOn] = useState([
    'JAVASCRIPT', "NODE JS", "EXPRESS JS",
    'MONGO DB', 'REACT', "REACT NATIVE", "FIREBASE",
   "STYLING (CSS)","GRAPHICS DESIGN", "AND MORE",
  ]);

  const [textArea, setTxt] = useState("")
  const [email, setEmail] = useState("")
  //console.log(od)
  return (
    <div>
        <div className='sub_container'>
        <section className="section_1_">
          <div className="section_1_text">
            <div className="section_1_text_hello">Hello!</div>
            <div className="section_1_text_dic">
              <div className="section_1_text_dic_1">You are welcome to my</div>
              <div className="section_1_text_dic_2">Portfolio am a web </div>
              <div className="section_1_text_dic_3">Developer.</div>
              <div className="section_1_text_dic_4">Oluwatobi Joseph Akanbi.</div>
            </div>
          </div>
          <div  className="profile_img_holder">
            <div className="pro-img-con">
              <div className="pro-img-con1">
                <img className="profile_img" src="/0cb72a78db43c9d1050339968d38b900.jpg" alt="img"/>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='sub_container_2'>
        <section className="section_1_">
          <div className="section_1_text">
            <div className="section_text_header">What can i do for You?</div>
            <button className="section_text_web">Build me a website</button>
            <button className="section_text_app">Build me an android App</button>
            <button className="section_text_web">Want something else?</button>
          </div>
          <div  className="profile_img_holder">
            <img className="profile_img" src="/kisspng-web-development-responsive-web-design-web-page-5b555321a165b9.6558344215323184976611.png" alt="img"/>
          </div>
        </section>
      </div>
      <div className='sub_container_3'>
        <section className="section_1_">
          <div>
          <div className="section_text_header">Hands On</div><br/>
          <div className="section_1_text_list">
            {
              handsOn.map((h, i) => {
                return (<div key={i} className="like_list_item">{h}</div>)
              })
            }
          </div>
       </div>
        </section>
      </div>
      <div className='sub_container_4_1'>
        <section className="section_1_">
          <div className='project_holder'>
            <h1>Projects</h1><br />
            <div>sorry <RiGhostSmileFill/></div>
            <div>Working on this..</div>
           </div>
        </section>
      </div>
      <div className='sub_container_4'>
        <section className="section_1_">
          <div className="contact-info">
            <div className="social-list">
              <a href="https://www.linkedin.com/in/akanbi-joseph-10783219a" className="icon-list"><div>Linkedin</div> <AiFillLinkedin size={25} /></a>
              <a href="https://github.com/Dxtobi" className="icon-list"><div>Github</div> <AiFillGithub size={25}/></a>
            <a href="https://m.me/Dextobi" className="icon-list"><div>facebook</div> <BsFacebook size={25}/></a>
             <a href="https://wa.me/qr/ECKIS2LZY7Z4K1" className="icon-list"><div>whatssap</div> <BsWhatsapp size={25}/></a>
            </div>
            <input className="email_input" type="email" required placeholder="example@email.com" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
            <textarea className="text_input" placeholder="say something" onChange={(e)=>setTxt(e.target.value)}  value={textArea}/>
            <button onClick={() => {
              setTxt("")
              setEmail("")
            }} className="send_mail">Send</button>
          </div>
          <div  className="profile_img_holder">
           
                <img className="profile_img" src="/0cb72a78db43c9d1050339968d38b900.jpg" alt="img"/>
            
          </div>
        </section>
      </div>
     
      <div className='sub_container_5'>
        <section className="section_1_footer">
            Made with love by Oluwatobi Joseph Akanbi.
        </section>
      </div>
   </div>
    
  );
};

export default Home