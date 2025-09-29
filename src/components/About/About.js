import "./About.scss";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <p className="intro">
        Xin chào! Mình là <b>Hoàn</b> 👋, hiện tại mình đang học tập và rèn luyện 
        để trở thành một <b>Fullstack Developer</b>.
      </p>

      <p className="description">
        Đây là project cá nhân giúp mình thực hành phát triển ứng dụng web 
        từ frontend đến backend. Thông qua project, mình không chỉ rèn luyện kỹ năng code 
        mà còn học cách <b>tư duy hệ thống</b>, <b>thiết kế cơ sở dữ liệu</b>, 
        và triển khai một sản phẩm hoàn chỉnh.
      </p>

      <h2>Các công nghệ & chức năng đã áp dụng</h2>

      <section>
        <h3>Frontend (ReactJS)</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Phân trang khi hiển thị danh sách (Pagination)</li>
          <li><FaCheckCircle className="icon" /> Clone Element: thêm mới chức năng Roles một cách linh hoạt</li>
          <li><FaCheckCircle className="icon" /> Sử dụng Ref để Parent gọi Child Functions</li>
          <li><FaCheckCircle className="icon" /> Quản lý state với React Context API</li>
          <li><FaCheckCircle className="icon" /> React Private Routes: kiểm soát quyền người dùng ở Frontend</li>
          <li><FaCheckCircle className="icon" /> Customize Axios: tối ưu hóa việc call RESTful APIs</li>
          <li><FaCheckCircle className="icon" /> Kết hợp React + Bootstrap 5 để tạo giao diện Responsive</li>
        </ul>
      </section>

      <section>
        <h3>Backend (NodeJS + Express)</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Sử dụng JWT (JSON Web Token) cho xác thực & phân quyền</li>
          <li><FaCheckCircle className="icon" /> Middleware check người dùng đã đăng nhập? có quyền hạn không?</li>
          <li><FaCheckCircle className="icon" /> Sử dụng Cookies và Bearer Token Header để định danh người dùng</li>
        </ul>
      </section>

      <section>
        <h3>Database (MySQL + Sequelize)</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Hiểu và thiết kế database dựa trên yêu cầu thực tế</li>
          <li><FaCheckCircle className="icon" /> Thiết kế database chuẩn hoá và có phân quyền người dùng</li>
        </ul>
      </section>

      <h2>Mục tiêu</h2>
      <p className="goal">
        Mục tiêu của mình là xây dựng được nhiều project thực tế, 
        áp dụng kiến thức đã học và không ngừng cải thiện kỹ năng lập trình 
        để có thể làm việc trong môi trường chuyên nghiệp.
      </p>
    </div>
  );
};

export default About;
