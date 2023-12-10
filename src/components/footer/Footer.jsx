import "./Footer.scss";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div className="custom-footer">
      <a>
        <GithubOutlined />
      </a>
      <a>
        <LinkedinOutlined />
      </a>
      <a>
        <MailOutlined />
      </a>
      <a>
        <PhoneOutlined />
      </a>
    </div>
  );
}

export default Footer;
