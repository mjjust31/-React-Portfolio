import "./Footer.scss";
import {
  GithubOutlined,
  LinkedinOutlined,
  // MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div className="custom-footer">
      <a href="https://github.com/mjjust31" target="_blank">
        <GithubOutlined />
      </a>
      <a href="https://www.linkedin.com/in/jessica-justmann31" target="_blank">
        <LinkedinOutlined />
      </a>
      <a href="tel:17736808837 ">
        <PhoneOutlined />
      </a>
    </div>
  );
}

export default Footer;
