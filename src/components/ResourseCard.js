import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
  CardLink,
  CardFooter,
} from "reactstrap";

import '../App.css'
const ResourseCard = (props) => {
  return (
    <Card className="mb-2 mt-2">
      <CardHeader className="text-center header">{props.header}</CardHeader>
      <CardBody>
        <Row>
          <Col md={3}>
            {/* <Button color="success" block>Up Vote</Button> */}
            <CardText tag="h5" className="text-center">
             {props.vote}
            </CardText>
            <h2 className="text-center">{props.ratings}</h2>
            <p className="text-center star">****</p>
            
          </Col>
          <Col md={9} outline color="success">
            <CardTitle tag="h3">{props.subTitle}</CardTitle>
            <CardText tag="h6">{props.discription}</CardText>
            <Button className="btn1 block " >Get Started</Button> 
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Col>
          <CardLink href={props.Link1}>Course1</CardLink>
          <CardLink href={props.Link2}>Course2</CardLink>
        </Col>
      </CardFooter>
    </Card>
  );
};

export default ResourseCard;
