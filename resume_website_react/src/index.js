import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/bootstrap.min.css";
import "./css/magnific-popup.min.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.min.css";
import "./css/theme.min.css";
import "./css/responsive.min.css" ;
import "./css/preloader.min.css";
import "./css/bootstrap-theme.css";
import mlImage from "./images/ml.png";
import hololensImage from "./images/hololens.jpg";
import aslImage from "./images/asl.jpg";
import profilePicture from "./images/avatar.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <section id="home" className="fill">
          <div className="home-background parallax-section">
              <div className="container-fluid">
                  <div className="row">
                      <div className="container home-box col-xs-12">
                          <div className="row">
                              <div className="w-100"></div>
                              <div className="col-xs-12">
                                  <img src={profilePicture} alt="profile"/>

                                      <h1>Prateek Bhatnagar</h1>
                                      <h3 id="sub-title">Medical Devices ● User Experience ● Cloud ● Full Stack </h3>
                              </div>
                              <div className="col-xs-12">
                                  <div className="mt-1">
                                      <h6>random background image fetched from: <a href="https://unsplash.com/">unsplash</a></h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </section>
      <section id="education">
          <div className="container-fluid">
              <div className="row">


                  <div className="section-background col-xs-12 col-sm-6" data-mh="match-edu">
                      <h2>Experience</h2>
                      <ul className="resume-box">
                          <li>
                              <div className="year" data-mh="match-exp-box-2">
                                  <div>
                                      <h4>2021 – Present</h4>
                                      <span>Vektor Medical - San Diego,CA</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-exp-box-2">
                                  <h4>Full Stack Software Engineer - 3</h4>
                                  <p>Worked on shipping 2 products:</p>
                                  <br/>
                                      <ul>
                                          <li>○ Working on software for 510k Cleared device(Cardiology space) working on Research, Development, maintenance and Updates as well as refining the User experience of the device</li>
                                          <li>○ Lead team in creating testing protocols and implementing corresponding integration tests - Selenium and Jest</li>
                                          <li>○ Developed clean intuitive UI for performance and representation of complex information allowing user to make complex medical decisions with ease</li>
                                          <li>○ Specialized frontend visualization for medical data using React JS D3.js and Three.js</li>
                                          <li>○ Tech Stack - REACTJS,REDUX , Typescipt, FastApi, Python, MySQL, Selenium, Jest</li>
                                      </ul>
                              </div>
                          </li>
                          <li>
                              <div className="year" data-mh="match-exp-box-2">
                                  <div>
                                      <h4>2019 – 2021</h4>
                                      <span>Avenda Health - Santa Monica,CA</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-exp-box-2">
                                  <h4>Software Engineer - Full Stack</h4>
                                  <p>Worked on shipping 2 products:</p>
                                  <br/>
                                      <ul>
                                          <li>○ Software for 510k Cleared BREAKTHROUGH Med Device - System performs Lesion treatment using a Laser</li>
                                          <li>○ Cloud Software as a Medical Device - Prostate lesion treatment planning system - with an AI treatment planning component a unique integration for a 510k cleared medical device - Unique perspective on designing UI around expert users using AI inputs</li>
                                          <li>○ Technology Stack -  REACTJS, REDUX, SASS, RabbitMQ MongoDB, ,GO, Python and  AWS</li>
                                      </ul>
                                  <br/>
                                  <p>
                                      Experienced with development, documentation  and testing within a highly regulated space  - Selenium and Jest
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div className="year" data-mh="match-exp-box-2">
                                  <div>
                                      <h4>JUN 2018 – AUG 2018</h4>
                                      <span>THERATAXIS - Baltimore,MD</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-exp-box-2">
                                  <h4>Software Engineering Intern</h4>
                                  <p>Wrote a parsing library in C# for the SDK of the Interson USB ultrasound probe</p>
                              </div>
                          </li>
                          <li>
                              <div className="year" data-mh="match-exp-box-2">
                                  <div>
                                      <h4>JUN 2016 – JUL 2016</h4>
                                      <span>B3 INTELLIGENCE</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-exp-box-2">
                                  <h4>Software Developement Intern</h4>
                                  <p>Used C# and python[Django] to develop
                                      multithreaded applications used by Big Data
                                      Analysts for cleaning raw data.
                                  </p>
                              </div>
                          </li>


                      </ul>
                  </div>
                  <div className="section-background col-xs-12 col-sm-6" data-mh="match-ed">
                      <h2>Education</h2>
                      <ul className="resume-box">
                          <li>

                              <div className="year" data-mh="match-edu-box-2">
                                  <div>
                                      <h4>2017-2019</h4>
                                      <span>Masters with Thesis</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-edu-box-2">
                                  <h4>Johns Hopkins University</h4>
                                  <p>Masters of Science and Engineering in Computer Science:</p>
                                  <ul>
                                      <li>○ Used Microsoft HoloLens in conjunction with pupil tracking to produce 2D heatmap of user gaze – part of a medical training system</li>
                                      <li>○ Used Microsoft HoloLens and pupil eye gaze tracking cameras to create a 3D gaze attention tracking experiment</li>
                                  </ul>
                              </div>


                          </li>
                          <li>
                              <div className="year" data-mh="match-edu-box-2">
                                  <div>
                                      <h4>2013-2017</h4>
                                      <span>Bachelor Degree</span>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-edu-box-2">
                                  <h4>Vellore Institute Of Technology, Vellore </h4>
                                  <p>B.TECH Computer Science And Engineering <br/>3.90/4 GPA</p>
                              </div>
                          </li>
                      </ul>
                  </div>

              </div>

          </div>
      </section>



      <section id="portfolio">
          <div className="container-fluid">
              <div className="row">
                  <div className="section-background col-xs-12 col-sm-6 h-auto">
                      <h2>Project and Code Sample Portfolio</h2>
                      <p>Here is a showcase of some of the projects and code samples I have done.These cover my various research
                          interests, most of my recent work focuses on healthcare - Augmented Reality, Networking, Computer
                          Vision, Machine Learning, Internet Of Things and Artificial Intelligence
                          <br/>
                          <br/>
                      </p>
                      <p className="text-center"><a className="github-button" href="https://github.com/Lalbadshah"
                                                       data-style="mega" aria-label="Follow @Lalbadshah on GitHub">Follow
                          @Lalbadshah</a>
                      </p>

                  </div>
                  <div className="portfolio-content col-xs-12 col-sm-6 h-auto">
                      <div id="portfolioSlider" className="owl-carousel">
                          <div>
                              <img src={hololensImage} alt=""/>
                                  <div className="image-layer">
                                      <div className="image-title">
                                          <h3>Masters Thesis work using Hololens and Eye Tracking- Pupil Labs Cams </h3>
                                          <a className="lightbox-popup" href="#popup-1">view detail</a>
                                      </div>
                                  </div>
                                  <div id="popup-1" className="mfp-hide popup-box">
                                      <img src={hololensImage} alt=""/>
                                          <div className="popup-content">
                                              <h3>Masters Thesis work - Hololens and Eye Tracking Using Pupil Labs Cams</h3>
                                              <p>Resesrach work for an Mixed Reality medical training system:</p>
                                              <p>Used Microsoft HoloLens in conjunction with pupil tracking to produce 2D heatmap of
                                                  user gaze – part of a medical training system</p>
                                              <p>Used Microsoft HoloLens and pupil eye gaze tracking cameras to create a 3D gaze
                                                  attention tracking experiment</p>
                                              <p className="text-center">
                                                  <br/>
                                                      <a className="github-button" href="https://github.com/Lalbadshah/" data-style="mega"
                                                         aria-label="Follow @Lalbadshah on GitHub">Github</a>
                                              </p>
                                          </div>
                                  </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>


      <section id="services">
          <div className="container-fluid">
              <div className="row">

                  <div className="portfolio-content col-xs-12 col-sm-6 h-auto">
                      <div id="portfolioSlider4" className="owl-carousel">

                          <div>
                              <img src={mlImage} alt=""/>
                                  <div className="image-layer">
                                      <div className="image-title">
                                          <h3>Implementation of Machine Learning Concepts</h3>
                                          <a className="lightbox-popup" href="#popup-4">view detail</a>
                                      </div>
                                  </div>
                                  <div id="popup-4" className="mfp-hide popup-box">
                                      <img src={mlImage} alt=""/>
                                          <div className="popup-content">
                                              <h3>Implementation of Machine Learning Concepts</h3>
                                              <p>Coding implementations of concepts I learnt in Machine Learning. The concepts
                                                  explored here include Kmeans, KNN and support vector machines, Linear Discriminant
                                                  Analysis, Linear Gaussian Classification, PCA and Probabilistic PCA. My work in this
                                                  area is ongoing and I will be adding more implementations here in the future</p>
                                              <p className="text-center">
                                                  <br/>
                                                      <a className="github-button" href="https://github.com/Lalbadshah/Machine-Learning-Work"
                                                         data-style="mega" aria-label="Follow @Lalbadshah on GitHub">Github</a>
                                              </p>
                                          </div>
                                  </div>

                          </div>
                      </div>
                  </div>
                  <div className="portfolio-content col-xs-12 col-sm-6 h-auto" >
                      <div id="portfolioSlider5" className="owl-carousel">

                          <div>
                              <img src={aslImage} alt=""/>
                                  <div className="image-layer">
                                      <div className="image-title">
                                          <h3>Transcription of The American Sign Language Alphabet from Images</h3>
                                          <a className="lightbox-popup" href="#popup-5">view detail</a>
                                      </div>
                                  </div>

                                  <div id="popup-5" className="mfp-hide popup-box">
                                      <img src={aslImage} alt=""/>
                                          <div className="popup-content">
                                              <h3>Transcription of The American Sign Language Alphabet from Images</h3>
                                              <p>This project's goal is to use hand pose images as data input to train different
                                                  algorithms and then use separate image data to test the performance of the
                                                  algorithms with respect to classification and recognition accuracy.</p>
                                              <p className="text-center">
                                                  <br/>
                                                      <a className="github-button" href="https://github.com/Lalbadshah/mlsp_project"
                                                         data-style="mega" aria-label="Follow @Lalbadshah on GitHub">Github</a>
                                              </p>
                                          </div>
                                  </div>

                          </div>

                      </div>
                  </div>
              </div>
          </div>

      </section>

      <footer>
          <div className="footer-background">
              <div className="container-fluid">
                  <div className="jumbotron" style={{backgroundColor: "rgba(0,0,0,0.2)", marginLeft:"20%", marginRight:"20%"}}>
                      <h2 style={{color: "white"}}>Contact Me!</h2>

                      <ul className="resume-box">
                          <li>
                              <div className="year" data-mh="match-exp-box-2" style={{color: "white"}}>
                                  <div>
                                      <h4 style={{color: "white"}}>Email</h4>
                                  </div>
                              </div>
                              <div className="box-content" data-mh="match-exp-box-2">
                                  <p>prateekbhatnagar2021@gmail.com</p>
                              </div>
                          </li>


                      </ul>

                      <div className="text-center">
                          <p className="text-center">
                              <a className="btn btn-lg btn-default" href="./PrateekBhatnagar_CV.pdf" role="button" style={{color: "black", textAlign: "center",}} download>
                                  Download Resume
                              </a>
                          </p>
                      </div>
                  </div>

              </div>
          </div>
      </footer>
  </React.StrictMode>);

