import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome !</h1>
      <p>
        <b>Project cá nhân: Fullstack Website với React, Node.js & MySQL</b>
      </p>

      <p>
        Đây là một ứng dụng web được xây dựng nhằm mục đích{" "}
        <b>thực hành và rèn luyện kỹ năng lập trình Fullstack</b>. Toàn bộ hệ
        thống được phát triển từ đầu, kết hợp cả <b>frontend</b> và{" "}
        <b>backend</b>.
      </p>

      <p>Project được xây dựng dựa trên các công nghệ chính:</p>

      <ol>
        <li>
          <b>React.JS</b> – dùng để phát triển giao diện người dùng, tối ưu trải
          nghiệm và quản lý component hiệu quả.
        </li>
        <li>
          <b>Node.JS & Express</b> – xây dựng API server, xử lý request/response
          và kết nối với cơ sở dữ liệu.
        </li>
        <li>
          <b>MySQL Database</b> – nơi lưu trữ dữ liệu, thiết kế bảng và quản lý
          mối quan hệ giữa các thực thể.
        </li>
        <li>
          <b>Responsive UI</b> – giao diện thân thiện, hiển thị tốt trên nhiều
          thiết bị với sự hỗ trợ của Bootstrap 5.
        </li>
      </ol>

      <p>
        Với project này, em hướng đến việc rèn luyện khả năng thiết kế hệ thống,
        viết API, cũng như triển khai frontend kết hợp backend một cách hoàn
        chỉnh. Đây là bước quan trọng trong hành trình học tập và phát triển kỹ
        năng lập trình của bản thân.
      </p>
    </div>
  );
};

export default HomePage;
