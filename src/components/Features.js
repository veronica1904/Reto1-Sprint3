import React from "react";
import { Card, Cards, FeaturesContainer } from "../styles/FeaturesStyles";

function Features() {
  return (
    <FeaturesContainer>
      <Cards>
        <Card>
          <img
            src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961135/sprint3-reto1/icon-access-anywhere_lq7u5y.svg"
            alt="icon-access-anywhere"
          />
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet or computer to access your
            account means your files follow you everywhere.
          </p>
        </Card>
        <Card>
          <img
            src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961135/sprint3-reto1/icon-security_c4fum0.svg"
            alt="icon-security"
          />
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a 
            couple of the security features we allow to help secure your files.
          </p>
        </Card>
      </Cards>
      <Cards>
        <Card>
          <img
            src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/cf0c047f5a6abe826366f7de423b7d04b8fa88b6/src/assets/img/icon-collaboration.svg"
            alt="icon-collaboration"
          />
          <h3>Real-time collaboration</h3>
          <p>
            Share and collaborate with friends and family anywhere you use Fylo.
            No matter if you're working in a shared space or on your laptop,
            Fylo is the right place for you to collaborate.
          </p>
        </Card>
        <Card>
          <img
            src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/cf0c047f5a6abe826366f7de423b7d04b8fa88b6/src/assets/img/icon-any-file.svg"
            alt="icon-any-file"
          />
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered. Keep documents, spreadsheets, and presentations in one
            place with Fylo.
          </p>
        </Card>
      </Cards>
    </FeaturesContainer>
  );
}

export default Features;
