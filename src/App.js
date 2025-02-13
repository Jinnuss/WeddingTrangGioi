import { useState } from 'react';
import './App.css';
import chure from './imgs/chure.jpg';
import codau from './imgs/codau.jpg';
import couple from './imgs/couple.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

AOS.init();
function App() {
  const [button1, setbutton1] = useState(false);
  const handleClickMoney = () => {
    setbutton1(true);
  }
  const closeQr = () => {
    setbutton1(false);
  }
  return (
    <>
      <div className="container text-center">
        <div className="content">

        </div>
        <div className="font1 text-[42px] lg:text-[60px] " data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
          Save The Date
        </div>
        <div className="font2 text-[32px] lg:text-[38px] " data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          Quản Giỏi & Tạ Trang
        </div>
        <div className="flex justify-center " data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
          <div className="img w-[285px] sm:h-[320px]   overflow-hidden imgshadow">
            <img src={couple} alt="ảnh 1" className="object-cover " />
          </div>
        </div>
        <div className="flex justify-center font3 mt-[10px] lg:mt-[0px]">
          <div className="" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            <div>
              17:00
            </div>
            <div>
              Thu 3
            </div>
          </div>
          <div className="mr-[20px] ml-[20px] text-[26px] lg:text-[32px] " data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            11.03
          </div>
          <div data-aos="fade-left">
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
            <img src={chure} alt="ảnh 1" className="object-cover img2" />
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
            <img src={codau} alt="ảnh 1" className="object-cover img2" />
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
            <img src={codau} alt="ảnh 1" className="object-cover img2" />
          </div>
          <div className="w-[38%] md:w-[285px] md:h-[320px] mr-[10px] ml-[10px]" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
            <img src={chure} alt="ảnh 1" className="object-cover img2" />
          </div>
          <div className="w-[30%] md:w-[285px] md:h-[320px] mr-[10px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <img src={codau} alt="ảnh 1" className="object-cover img2" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center khung md:w-[50%] ">
            <div className='font5 text-[30px] mb-[10px]' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">Tiệc Cưới Nhà Trai</div>
            <div className='font3' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">THU 7 | 17H00</div>
            <div className='font3' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">23.11.2024</div>
            <div className='font2 text-[20px] mt-[20px]' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">(Tức Ngày 12 Tháng 2 Âm lịch, Năm ẤT Tỵ.)</div>
            <div className='flex justify-center'>
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

      </div>
    </>
  )
}

export default App;
