import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Xin chào, mình là <span className="highlight">Hoàn</span> 👋
        </h1>
        <p>
          Đây là không gian để mình chia sẻ quá trình học tập và rèn luyện kỹ
          năng để trở thành một <b>Fullstack Developer</b>. Mình xây dựng ứng
          dụng này để thực hành từ <b>Frontend</b> đến <b>Backend</b>, kết nối
          với <b>Database</b>, và triển khai đầy đủ tính năng.
        </p>
        <div className="hero-actions">
          <a
            href="https://github.com/nikanila"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            🚀 Xem Projects
          </a>
          <Link to="/about" className="btn btn-secondary">
            👨‍💻 Giới thiệu thêm
          </Link>
        </div>
      </section>

      {/* Highlight Features */}
      <section className="features">
        <h2>Điểm nổi bật</h2>
        <ul>
          <li>✅ Giao diện trực quan, Responsive với React + Bootstrap 5</li>
          <li>✅ Quản lý quyền người dùng bằng React Context + JWT</li>
          <li>✅ API Backend xây dựng với Express & MySQL</li>
          <li>✅ Tích hợp Sequelize ORM để quản lý database</li>
        </ul>
      </section>

      {/* Learning Path */}
      <section className="learning">
        <h2>Lộ trình học tập & thực hành</h2>
        <div className="cards">
          <div className="card">
            <h3>Frontend</h3>
            <p>
              ReactJS, React Router, Axios, Context API, Pagination, Bootstrap
              5.
            </p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>
              NodeJS, ExpressJS, Middleware, Authentication & Authorization.
            </p>
          </div>
          <div className="card">
            <h3>Database</h3>
            <p>MySQL, Sequelize ORM, thiết kế bảng dữ liệu & phân quyền.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Bắt đầu khám phá nào 🚀</h2>
        <p>Hãy thử trải nghiệm các tính năng của ứng dụng ngay bây giờ!</p>
        <Link to="/users" className="btn btn-success">
          👉 Xem danh sách Users
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
