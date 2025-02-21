import { useState } from 'react';
import './App.css';
import chure from './imgs/chure.jpg';
import codau from './imgs/codau.jpg';
import couple from './imgs/couple.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import cap1 from './imgs2/cap1.jpg';
import cap2 from './imgs2/cap2.jpg';
import cap3 from './imgs2/cap3.jpg';
import cap4 from './imgs2/cap4.jpg';
import cap5 from './imgs2/cap5.jpg';
import cap6 from './imgs2/cap6.jpg';
import cap7 from './imgs2/cap7.jpg';
import cap8 from './imgs2/cap8.jpg';
import cap9 from './imgs2/cap9.jpg';
import cap10 from './imgs2/cap10.jpg';
import cap11 from './imgs2/cap11.jpg';
import cap12 from './imgs2/cap12.jpg';
import cap13 from './imgs2/cap13.jpg';
import cap14 from './imgs2/cap14.jpg';
import cap15 from './imgs2/cap15.jpg';
import cap16 from './imgs2/cap16.jpg';
import cap17 from './imgs2/cap17.jpg';
import cap18 from './imgs2/cap18.jpg';
import cap19 from './imgs2/cap19.jpg';
import cap20 from './imgs2/cap20.jpg';
import cap21 from './imgs2/cap21.jpg';
import cap22 from './imgs2/cap22.jpg';
import cap23 from './imgs2/cap23.jpg';
import cap24 from './imgs2/cap24.jpg';
import cap25 from './imgs2/cap25.jpg';
import cap26 from './imgs2/cap26.jpg';
import cap27 from './imgs2/cap27.jpg';
import cap28 from './imgs2/cap28.jpg';
import cap29 from './imgs2/cap29.jpg';
import cap30 from './imgs2/cap30.jpg';
import cap31 from './imgs2/cap31.jpg';
import cap32 from './imgs2/cap32.jpg';
import cap33 from './imgs2/cap33.jpg';
import codau1 from './imgs2/codau1.jpg';
import codau2 from './imgs2/codau2.jpg';
import codau3 from './imgs2/codau3.jpg';
import codau4 from './imgs2/codau4.jpg';
import codau5 from './imgs2/codau5.jpg';
import chure1 from './imgs2/chure1.jpg';
import chure2 from './imgs2/chure2.jpg';

AOS.init();
function App() {
  const [button1, setbutton1] = useState(false);
  const [date, setDate] = useState("07-01-2024");
  const handleClickMoney = () => {
    setbutton1(true);
    console.log(date);
  }
  const closeQr = () => {
    setbutton1(false);
  }
  return (
    <>
      <div className="container text-center">
        <div className="content">

        </div>
        <div className="font1 text-[38px] lg:text-[60px] " data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
          Save The Date
        </div>
        <div className="font2 text-[28px] lg:text-[38px] " data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          Quản Giỏi & Tạ Trang
        </div>
        <div className="flex justify-center " data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
          <div className="img w-[280px] sm:h-[320px]   overflow-hidden imgshadow">
            <img src={cap20} alt="ảnh 1" className="object-cover " />
          </div>
        </div>
        <div className="flex justify-center font6 mt-[10px] lg:mt-[0px]">
          <div className="text-[28px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            <div>
              17:00
            </div>
            <div>
              Thu 3
            </div>
          </div>
          <div className="mr-[40px] ml-[40px] text-[40px] lg:text-[40px] pt-[20px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            11.03
          </div>
          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" className='text-[28px]'>
            <div>20</div>
            <div>25</div>
          </div>
        </div>
        <div className="font2  text-[24px] font-medium" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          (Ngày 12 Tháng 2 Âm
          lịch, Năm ẤT
          Tỵ.)
        </div>
        <div className="font2 text-[28px] lg:text-[38px] mt-[50px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          Hôn nhân là chuyện cả đời,
        </div>
        <div className="font2 text-[28px] lg:text-[38px] " data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
          Yêu người vừa ý, cưới người mình thương...
        </div>
        <div className="flex justify-center mt-[30px] mb-[30px] md:mb-[130px]">
          <div className="w-[50%] md:w-[285px] md:h-[320px] mr-[10px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            <img src={chure2} alt="ảnh 1" className="object-cover img2" />
          </div>
          <div className=" w-[40%] md:w-[285px] sm:h-[320px] font4 text-[15px] md:text-[26px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <div>
              <div className="item">
                NHÀ TRAI
              </div>
              <div className="item">ÔNG QUẢN VĂN TÁ</div>
              <div className="item">BÀ NGUYỄN THỊ THẬP</div>
              <div className="item mt-[10px]">Địa chỉ</div>
              <div className="item">Xóm 10 Thôn Thành Vật</div>
              <div className="item"> Đồng Tiến - Ứng Hòa - Hà Nội</div>
              <div className="item mt-[10px]">
                CHÚ RỂ
              </div>
            </div>
            <div className="font2 text-[20px] lg:text-[28px] mt-[10px]">QUẢN <span className="ml-[20px]">GIỎI </span> </div>
          </div>

        </div>
        <div className="flex justify-center mt-[30px] mb-[30px] md:mb-[130px]">
          <div className=" w-[40%] md:w-[285px] sm:h-[320px] font4 text-[15px] md:text-[26px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            <div>
              <div className="item">
                NHÀ TRAI
              </div>
              <div className="item">ÔNG QUẢN VĂN TÁ</div>
              <div className="item">BÀ NGUYỄN THỊ THẬP</div>
              <div className="item mt-[10px]">Địa chỉ</div>
              <div className="item">Xóm 10 Thôn Thành Vật</div>
              <div className="item"> Đồng Tiến - Ứng Hòa - Hà Nội</div>
              <div className="item mt-[10px]">
                CÔ DÂU
              </div>
            </div>
            <div className="font2 text-[20px] lg:text-[28px] mt-[10px]">TẠ <span className="ml-[20px]">TRANG </span> </div>
          </div>
          <div className="w-[50%] md:w-[285px] md:h-[320px] ml-[10px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <img src={codau5} alt="ảnh 1" className="object-cover img2" />
          </div>
        </div>
        <div className="font1 text-[42px] lg:text-[60px] mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
          Thư Mời
        </div>
        <div className="font2 text-[20px] lg:text-[28px] mb-[20px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          Tham dự lễ thành hôn của Quản Giỏi & Tạ Trang
        </div>
        <div className="flex justify-center mt-[30px] mb-[30px] md:mb-[130px]">
          <div className="w-[30%] md:w-[285px] md:h-[320px] ml-[10px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            <img src={cap25} alt="ảnh 1" className="object-cover img2" />
          </div>
          <div className="w-[38%] md:w-[285px] md:h-[320px] mr-[10px] ml-[10px]" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
            <img src={cap26} alt="ảnh 1" className="object-cover img2" />
          </div>
          <div className="w-[30%] md:w-[285px] md:h-[320px] mr-[10px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <img src={cap24} alt="ảnh 1" className="object-cover img2" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center khung md:w-[50%] ">
            <div className='font5 text-[30px] mb-[10px]' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">Tiệc Cưới Nhà Trai</div>
            <div className='font6 text-[24px]' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">THU 7 | 17H00</div>
            <div className='font6 text-[24px]' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">23.11.2024</div>
            <div className='font2 text-[18px] mt-[10px]' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">(Tức Ngày 12 Tháng 2 Âm lịch, Năm ẤT Tỵ.)</div>
            <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
              <Flatpickr
                className=' text-center mt-[10px] mb-[10px] font3 text-[12px] lich'
                value={date}
                options={{
                  dateFormat: "d-m-Y"
                }}
                onChange={(dateSelect) => setDate(dateSelect)}
              />
            </div>
            <div className='flex justify-center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
              <div onClick={handleClickMoney} className='button-86' > Gửi Mừng Cưới </div>
            </div>
          </div>
        </div>
        {/* <div className='qr'>
          <div className='content'>
            <div className='flex justify-end'>
              <div className='text-[24px] mb-[20px] iconClose' onClick={handleClickMoney}>
                <IoIosCloseCircleOutline />
              </div>
            </div>
            <div className="img w-[285px] sm:h-[320px]   overflow-hidden imgshadow">
              <img src={couple} alt="ảnh 1" className="object-cover " />
            </div>
          </div>
        </div> */}
        {
          button1 ? (
            <div className='qr'>
              <div className='content'>
                <div className='flex justify-end'>
                  <div className='font2 text-[16px] mr-[20px]'> Ít thì 5 trứng, nhiều thì 1 TÊN LỬA </div>
                  <div className='text-[24px] mb-[20px] iconClose' onClick={closeQr}>
                    <IoIosCloseCircleOutline />
                  </div>
                </div>
                <div className="img w-[285px] sm:h-[320px]   overflow-hidden imgshadow">
                  <img src={couple} alt="ảnh 1" className="object-cover " />
                </div>
              </div>
            </div>
          ) :
            (
              <>
              </>
            )
        }
        <div className='flex justify-center'>
          <div className=''>
            <iframe className='map w-[300px] h-[350px] md:w-[600px] md:h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4418.672181496057!2d105.80151037584059!3d20.989762089115654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbfeb557d3b%3A0x18a21f588b4fd5ee!2zODYgxJAuIE5ndXnhu4VuIFhp4buDbiwgVGhhbmggWHXDom4gTmFtLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1740037319734!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>
          <div className="font1 text-[42px] lg:text-[60px] mt-[50px] mb-[30px]">
            Album Ảnh Cưới
          </div>
        </div>




      </div>
    </>
  )
}

export default App;
