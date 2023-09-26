import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <main>
        <div className="newsletter-container">
          Newsletter
          <form>
            <input placeholder="email@example.com"></input>
            <button>Join Us</button>
          </form>
        </div>
        <ul>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Affiliate Program</a>
          </li>
          <li>
            <a>Work With Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Shipping and Returns</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Policty Privacy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Pinterest</a>
          </li>
        </ul>
      </main>

      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Mourato</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
