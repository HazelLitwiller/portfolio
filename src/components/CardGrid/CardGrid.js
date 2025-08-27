import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomCard from "../CustomCard";
import forest_loop from "../../audio/forest_loop.wav";
import outro from "../../audio/outro.wav";
import cardData from "./CardData.json";

const audioFiles = {
  forest_loop: forest_loop,
  outro: outro
};

function CardGrid({ type, title }) {
  if (cardData[type]) {
    return (
      <>
        <h1>{title}</h1>
        <Container fluid>
          <Row style={{ width: "fit-content" }}>
            {cardData[type].map((data) => (
              <Col md="auto" style={{ marginTop: "20px" }}>
                <CustomCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  buttons={data.buttons}
                  buttonLink={data.buttonLink}
                  buttonText={data.buttonText}
                  audioSrc={audioFiles[data.audioSrc]}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default CardGrid;
