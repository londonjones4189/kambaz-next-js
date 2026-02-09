import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-classes">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/react.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4550/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/web.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS4550 Web Development
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Web Dev
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/3200/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/ds.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    DS3200 Foundations of Data Science
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Intro to DS
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/3000/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/algo.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS3000 Algorithms
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/2500/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/ood.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS2500 Object Oriented Design
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    OOD
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/4973/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/topics.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS4973 Topics in Computer Science
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Topics in CS
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1800/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/discrete.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS1800 Discrete Structures
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Discrete
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-class" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/3201/home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/databases.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-class-title text-nowrap overflow-hidden">
                    CS3200 Intro to Databases
                  </CardTitle>
                  <CardText className="wd-dashboard-class-description overflow-hidden" style={{ height: "100px" }}>
                    Intro to Databases
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}