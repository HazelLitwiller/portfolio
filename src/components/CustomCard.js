import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CustomCard({
  title,
  description,
  image,
  buttons,
  audioSrc
  
}) {
  return (
    <Card style={{ width: "18rem" }} class="card bg-secondary mb-3">
      {image && (
        <Card.Img
          variant="top"
          src={image.src}
          alt={image.alt}
          style={{ width: "286px", height: "180px" }}
        />
      )}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {audioSrc && (
          <audio
            controls
            src={audioSrc}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        )}
        {buttons &&
          buttons.map((btn, index) => (
            <Button
              key={index}
              href={btn.link}
              variant="primary"
              style={{ marginRight: "10px", marginBottom: "10px" }}
            >
              {btn.text}
            </Button>
          ))}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
