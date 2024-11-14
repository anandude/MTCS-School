import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import PrincipalSection from '../components/PrincipalSection'
import { Container, Row, Col } from "react-bootstrap";

const Teachers = () => {

  const teachers = [
    {
      name: "Anitha Varghese",
      subject: "Bsc BEd [Biology]",
      imageUrl: "/image/teachers/anitha-varghese.jpg"
    },
    {
      name: "Beena K A",
      subject: "BA BEd [Social Studies]",
      imageUrl: ""
    },
    {
      name: "Mary Mathew",
      subject: "NTTC",
      imageUrl: ""
    },
    {
      name: "Priya Varghese",
      subject: "Msc BEd [Mathematics]",
      imageUrl: ""
    },
    {
      name: "Rany John",
      subject: "PDC NTTC",
      imageUrl: ""
    },
    {
      name: "Revathy Rajan",
      subject: "MA BEd [Malayalam]",
      imageUrl: ""
    },
    {
      name: "Sarala Devi",
      subject: "M.Com PGDCA [Computer]",
      imageUrl: ""
    },
    {
      name: "Seby K S",
      subject: "Bsc PGDCA [Mathematics]",
      imageUrl: ""
    },
    {
      name: "Shaly Shaju",
      subject: "TTC",
      imageUrl: ""
    },
    {
      name: "Siny P G",
      subject: "Hindi Vidhwan",
      imageUrl: ""
    },
    {
      name: "Anju Basil",
      subject: "MA BEd [Social Science]",
      imageUrl: ""
    },
    {
      name: "Kesia P B",
      subject: "MA BEd [English]",
      imageUrl: ""
    },
    {
      name: "Sreedevi E P",
      subject: "Bsc BEd [Science]",
      imageUrl: ""
    },
    {
      name: "Neethu P S",
      subject: "MA BEd [English]",
      imageUrl: ""
    },
    {
      name: "Blessy Alias",
      subject: "Bsc TTC [Computer]",
      imageUrl: ""
    }
  ];
  

  return (
    
    <>
    <BreadCrumb pagename={'Teachers'}/>
      <div>
        <PrincipalSection />
      </div>
      <section className="teachers-section">
        <Container>
          <Row className="justify-content-center mb-5 pb-2">
            <Col md={8} className="text-center heading-section">
              <h2 className="mb-4">
                <span>Certified</span> Teachers
              </h2>
              <p>
                Certified teachers at Mount Thabore Central School are qualified professionals who have undergone rigorous training and have obtained relevant teaching credentials from accredited institutions. They bring expertise and dedication to their roles, ensuring high-quality education and personalized support for students' academic and personal development.
              </p>
            </Col>
          </Row>
          <Row>
            {teachers.map((teacher, index) => (
              <Col key={index} md={6} lg={3}>
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div
                      className="img align-self-stretch"
                      style={{
                        backgroundImage: `url(${teacher.imageUrl})`,
                      }}
                    ></div>
                    {/* <div className="social-icons">
                      {teacher.social.map((platform, i) => (
                        <a key={i} href="#">
                          <i className={`fa fa-${platform}`}></i>
                        </a>
                      ))}
                    </div> */}
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>{teacher.name}</h3>
                    <span className="position mb-2">{teacher.subject}</span>
                    {/* {teacher.description && (
                      <div className="faded">
                        <p>{teacher.description}</p>
                      </div>
                    )} */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>

    
  )
}

export default Teachers