
import {useState} from 'react'





const Home = () => {
  const [handsOn, setHandsOn] = useState([
    'JAVASCRIPT', 'C++', "NODE JS", "EXPRESS JS",
    'MONGO DB', 'REACT', "REACT NATIVE", "FIREBASE",
    "AND MORE","STYLING (CSS)"
  ]);
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
            <img className="profile_img" src="/0cb72a78db43c9d1050339968d38b900.jpg" alt="img"/>
          </div>
        </section>
      </div>
      <div className='sub_container_3'>
        <section className="section_1_">
          <div>
          <div className="section_text_header">Hand On</div>
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

      <div className='sub_container_4'>
        <section className="section_1_">
          <div className="contact-info">
            <div className="social-list">
              <a href="https://www.linkedin.com/in/akanbi-joseph-10783219a" className="icon-list">Linkedin</a>
              <a href="https://m.me/Dextobi" className="icon-list">facebook</a>
              <a href="https://wa.me/qr/ECKIS2LZY7Z4K1" className="icon-list">whatssap</a>
            </div>
            <input className="email_input" type="email" required placeholder="example@email.com"/>
            <textarea className="text_input" placeholder="say something" />
            <button className="send_mail">Send</button>
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