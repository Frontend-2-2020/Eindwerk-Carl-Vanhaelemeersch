import React, { Component } from "react";
import "../css/footer.css";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid text-center footer">
        <div className="row">
          <div className="col-sm">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </div>
          <div className="col-sm">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>
          <div className="col-sm">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </div>
        </div>
        <div className="companyText">Rechten voorbehouden aan Nerding inc</div>
      </div>
    );
  }
}

export default Footer;
