import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import "../components/navbar.css";
import Footer from "../components/footer";

const BlogContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
`;

const BlogTitle = styled.div`
  font-size: 21px;
  padding: 20px;
  background-color: grey;
  color: white;
  font-family: "Pacifico", cursive;
`;

const BlogContent = styled.div`
  font-size: 15px;
  line-height: 1.6;
  padding: 20px;
`;



const AboutHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  font-family: "Pacifico", cursive;
`;

function About() {
  return (
    <div>
      <div>
       <Header/>
      </div>
      <BlogContainer>
        <BlogGrid>
          <BlogTitle className="blue-grey">
          <AboutHeading>About Us</AboutHeading>
            "Nurturing Innovation: Our Journey in Crafting a Dynamic Quiz App"
          </BlogTitle>
          <BlogContent>
            {/* <h5>Introduction :</h5> */}
            <p>
              <br></br>
              <strong id="first-text" className="black-text">I</strong>n the vast realm of technology, our project journey unfolds as a
              tapestry woven with threads of innovation and collaboration. With
              deep appreciation, we extend our heartfelt thanks for the
              opportunity that introduced us to the world of APIs. This blog
              encapsulates our path, from our tentative steps into API sessions
              to the triumphant launch of our very own quiz app - a journey that
              not only imparted us with invaluable lessons but also expanded our
              horizons in profound ways.
            </p>
            <h5>Sessions on API: A Foundation of Knowledge:</h5>
            <p>
              Our expedition embarked with a series of enlightening sessions
              dedicated to the world of APIs. These sessions proved to be our
              stepping stones into the vast landscape of Application Programming
              Interfaces. As newcomers, we were eager to absorb the intricacies
              of APIs, their functionalities, and their pivotal role in modern
              software architecture. With every session, we gained a deeper
              understanding of the building blocks that power digital
              interactions.
            </p>
            <h5>Building the Quiz App: Seeds of Creativity and Innovation:</h5>
            <p>
              The heart of our journey lay in crafting a dynamic and interactive
              quiz application. Our vision was to create an environment where
              users could not only engage with a myriad of questions but also
              contribute their own, fostering a sense of co-creation and
              knowledge sharing. This aspiration propelled us to dive into
              coding, problem-solving, and design thinking. Through countless
              iterations, our quiz app took shape, a testament to our collective
              creativity and innovation.
            </p>
            <h5>Creating and Deploying the API: A Bridge of Connection:</h5>
            <p>
              A significant juncture in our journey arrived with the creation
              and deployment of an Application Programming Interface (API). This
              digital bridge seamlessly linked the frontend and backend of our
              app, enabling a fluid exchange of information. The process of
              crafting the API demanded meticulous planning, attention to
              detail, and a deep understanding of how data flows through the
              system. After rigorous testing and refining, the successful
              deployment of the API marked a triumph, validating our teamwork
              and dedication.
            </p>
            <h5>Lessons Gained: Wisdom through Experience:</h5>
            <p>
              Our journey was not just about building an app; it was about
              acquiring wisdom through experience. Constructing the API exposed
              us to the intricacies of data flow, connectivity, and the harmony
              between different layers of a digital ecosystem. Deploying the API
              unveiled the importance of synchronization and the orchestration
              of various components to ensure a seamless user experience.
              Fetching data from the API to the frontend was akin to uncovering
              the art of storytelling, where information came to life through
              code.
            </p>
            <h5>Closing Thoughts: A Grateful Farewell and New Beginnings:</h5>
            <p>
              As we bring this chapter of our journey to a close, our hearts are
              filled with gratitude for the IEEE Mangalore Subsection, whose
              support and encouragement have been unwavering. Our project,
              birthed from a sense of exploration, showcases our early steps
              into the realm of technology. From the enlightening sessions that
              kindled our curiosity to the successful deployment of our project,
              each phase has been a lesson in growth and perseverance. Armed
              with newfound knowledge, an enriched skill set, and the memory of
              this transformative journey, we embark on new horizons with a
              profound sense of fulfillment.
            </p>
            <ul className=" grey-text right hide-on-med-and-down">
              <h4>
                <br></br>-TEAM APIELITE'5
              </h4>
            </ul>
          </BlogContent>
        </BlogGrid>
      </BlogContainer>
      <Footer/>
    </div>
  );
}

export default About;
