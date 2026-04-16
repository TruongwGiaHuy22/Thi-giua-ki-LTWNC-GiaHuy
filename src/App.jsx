const anh = import.meta.glob("./assets/*.{png,jpg,jpeg}", { eager: true });
const hinh = {};
for (const duongDan in anh) {
  const ten = duongDan.split("/").pop();
  hinh[ten] = anh[duongDan].default;
}
import './App.css'
function App() {
  return (
    <div className="khung-chinh">
      <div className="khung-banner">
        <img className="anh-banner" src={hinh['banner.png']} alt="Banner" />
        <div className="header-top">
          <img className="logo-chan" src={hinh['logo.png']} alt="Logo Footer" />
          <div className="danh-muc">
            <span>Trang chủ</span>
            <span>Giới thiệu</span>
            <span>Thực đơn</span>
            <span>Tin tức</span>
            <span>Liên hệ</span>
            <span>Đặt bàn</span>
          </div>
        </div>
      </div>

      <div className="khung-duoi">
        <div className="anh-lon">
          <img src={hinh['anh-cafe-1.png']} alt="Cafe chính" />
        </div>
        <div className="anh-nho-cot">
          <div className="anh-nho">
            <img src={hinh['anh-cafe-2.png']} alt="Cafe nhỏ 1" />
          </div>
          <div className="anh-nho">
            <img src={hinh['anh-cafe-3.png']} alt="Cafe nhỏ 2" />
          </div>
        </div>
      </div>

      <div
        className="Khung-Cua-Menu"
        style={{
          backgroundImage: ` url(${hinh['back_menu.png']})`,
        }}
      >
        <h1 className="Menu">Menu</h1>

        <div className="Nuoc-Uong">
          <div className="cot-menu">
            <p>
              <span>Cà phê sữa</span>
              <span className="dot-line" />
              <span>25k</span>
            </p>
            <p>
              <span>Cà phê muối</span>
              <span className="dot-line" />
              <span>25k</span>
            </p>
            <p>
              <span>Cà phê sữa dừa</span>
              <span className="dot-line" />
              <span>25k</span>
            </p>
            <p>
              <span>Cà phê sữa Sài Gòn</span>
              <span className="dot-line" />
              <span>25k</span>
            </p>
            <p>
              <span>Cà phê đen</span>
              <span className="dot-line" />
              <span>20k</span>
            </p>
          </div>
          <div className="cot-menu">
            <p>
              <span>Cà phê Expresso</span>
              <span className="dot-line" />
              <span>35k</span>
            </p>
            <p>
              <span>Cà phê Mocha</span>
              <span className="dot-line" />
              <span>35k</span>
            </p>
            <p>
              <span>Cà phê Capuchino</span>
              <span className="dot-line" />
              <span>35k</span>
            </p>
            <p>
              <span>Cà phê Latte</span>
              <span className="dot-line" />
              <span>35k</span>
            </p>
            <p>
              <span>Cà phê IceCream Latte</span>
              <span className="dot-line" />
              <span>40k</span>
            </p>
          </div>
        </div>

        <div className="nut-xem-them">
          <img src={hinh['button.png']} alt="Xem thêm menu" />
          <span>Xem thêm menu</span>
        </div>
      </div>

      <div className="Che-bien-ca-phe-chu">
        <div className="haianh-chebiencaphecon">
          <div className="the-card">
            <img src={hinh['cafe-hien-nay.jpg']} alt="cà phê hiện nay" />
            <h2>Chế biến cà phê</h2>
            <p>Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kì loại bột, phụ gia nào.</p>
          </div>
          <div className="the-card">
            <img src={hinh['ca-phe-che-bien.jpg']} alt="cà phê chế biến" />
            <h2>Cà phê phổ biến được ưa chuộng ở VN</h2>
            <p>Điểm danh 20 loại cà phê phổ biến được ưu chuộng tại Việt Nam.</p>
          </div>
        </div>
      </div>
     
      <footer className="chan-trang">
        <div className="dong-logo">
              <img className="logo-chan" src={hinh['logo.png']} alt="Logo Footer" />
              <h3>Trương Gia Huy Coffee</h3>
            </div>
        <div className="phan-chan">
          <div className="cot-gioi-thieu">
            <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <p>
              Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee.
            </p>
            <div className="mang-xa-hoi">
              <span>facebook</span>
              <span>instagram</span>
              <span>twitter</span>
              <span>youtube</span>
              <span>TikTok</span>
            </div>
          </div>
          <div className="cot-thong-tin">
            <h4>LIÊN HỆ</h4>
            <p>Xã Ia Krêl, Tỉnh Gia Lai</p>
            <p>Hotline: 037 463 5321</p>
            <p>Email:tghuy.k24tt@kontum.udn.vn</p>
            <p>Facebook: Gia Huy</p>
          </div>
          <div className="cot-thong-tin">
            <h4>CHÍNH SÁCH</h4>
            <p>Trang chủ</p>
            <p>Giới thiệu</p>
            <p>Thực đơn</p>
            <p>Tin tức</p>
            <p>Liên hệ</p>
            <p>Đặt bàn</p>
          </div>
          <div className="cot-thong-tin cot-fanpage">
            <h4>FANPAGE</h4>
            <div className="hop-fanpage">
              <div className="logo-fanpage">Meta</div>
              <p>106 triệu người theo dõi</p>
            </div>
            <button className="dat-ban">ĐẶT BÀN</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;