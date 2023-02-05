import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState("MainPage");
  // const [isOpen, setIsOpen] = useState(false);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <main>
      {/* <div id="menu-bar">
         <button onClick={handleToggle}>Menu</button>
      </div> */}
      {/* {isOpen && ( */}
      <div id="buttons">
      <div id="button0">
          <button class="button" onClick={() => handleSectionChange("MainPage")}>Home</button>
        </div>
        <div id="button1">
          <button class="button" onClick={() => handleSectionChange("About")}>About</button>
        </div>
        <div id="button2">
          <button class="button" onClick={() => handleSectionChange("Work Experience")}>Work Experience</button>
        </div>
        <div id="button3">
          <button class="button" onClick={() => handleSectionChange("Education")}>Education</button>
        </div>
        <div id="button4">
          <button class="button" onClick={() => handleSectionChange("Skills")}>Skills</button>
        </div>
        <div id="button5">
          <button class="button" onClick={() => handleSectionChange("Why Sovtech?")}>Why Sovtech?</button>
        </div>
      </div>
        {/* )} */}
      <header>
        <div class="content-wrap">
          <h1>Thabang Moshoete</h1>
          <h3>Graduate Software Developer</h3>
        </div>
      </header>
      <body>
      {currentSection === "MainPage" && (
  <div id="sectionMain">
          <div id="section0">
            <div class="content-wrap">
              <div>
                <h2>About</h2>
                <p>
                  I am a recent graduate in BscEng (Hons) in Chemical Engineering from the University of Cape Town. I am keen to pursue a career in the field of tech and get to use my engineering and data analysis skills. Apart from my technical skills, I invest my time in taking care of my mental health and I am very good at soccer and chess, I also enjoy reading books and going to church.
                </p>
              </div>
              <p>
                As a developer, I have a passion for building efficient and user-friendly applications that solve real-world problems. I am confident that my skills and experience make me a strong candidate for the role at SovTech. I am excited about the opportunity to work with and learn from the talented team at SovTech, and to contribute to the company's mission and success.
              </p>
            </div>
          </div>
  
      <body>
        <div id="section1">
      <section class = "work-experience">
          <div class = "content-wrap">
        <h2>Work Experience</h2>
    

        <section class = "job-item divider" >
            <div class = "job-details">
          <h3>Data Analyst</h3>
          <p>DATA4MIA</p>
          <p>28/11/2022 - 15/11/2022</p>
            </div>
            <div clas = "job-summary">
          <p>I analyzed the financial reports of local and district municipalities to evaluate the 
              appropriateness of municipal service delivery and budget plans.This included: </p>
          <ul>
            <li>Drafted Cost of supply studies.</li>
            <li>Drafted Climate Change Action Plans.</li>
            <li>Drafted Wastewater Risk Abatement Plans</li>
            <li>Drafted MIG Asset Management Analysis.</li>
          </ul>
             </div>
        </section>
        
           <section class = "job-item divider" > 
            <div class = "job-details">
          <h3>  Residence Treasurer</h3>
          <p>Forest Hill Residence (UCT)</p> 
          <p>01/11/2021 - 01/09/2022</p>
               </div>
                <div clas = "job-summary">
          <p>I was in charge of managing and recording all transactions in  the residence. I was also the main source of communication between student treasury council and the residence management team. My main roles were as follows:</p>
          <ul>
            <li>Managing about R1 million of residence funds while ensuring needs of over 800 students are met.</li>
            <li>Keeping a proper record of usage of residence funds.</li>
            <li>Preparing quarterly financial reports which will be made available for the whole residence.</li>
            <li>Directing head structures of the residence with regards to proper financial usage.</li>
          </ul>
               </div>
        </section>
           <section class = "job-item divider" >
            <div class = "job-details">
          <h3>Process Service Engineer Intern</h3>
          <p>Stone Three</p>
          <p>20/06/2022 - 15/07/2022</p>
               </div>
                <div clas = "job-summary">
          <p>I was tasked with a project to create a machine learning model in python that will detect if the flotation images from a mining company are in a froth state or slimming state. The project was achieved using an image texture analysis and linear regression. My daily tasks were as follows: .</p>
          <ul>
            <li>Data labelling for training machine learning models.</li>
            <li>Image processing using scikit-image and scikit-learn packages.</li>
            <li>Using Grey Level Co-Occurrence Matrices for image texture analysis on python.</li>
            <li>Using GLCM features to develop linear regression model for detection and classification.</li>
          </ul>
               </div>
        </section>
           <section class = "job-item divider" >
            <div class = "job-details">
          <h3>Stundent Trainee</h3>
          <p>Angloamerican</p>
          <p>01/12/2020 - 31/12/2020</p>
               </div>
                <div clas = "job-summary">
          <p>I was working on an acid plant under the supervision of process metallurgist. The main purpose was to shadow the engineers and work on maintaining the plant stability. My responsibilities were as follows: </p>
          <ul>
            <li>Took samples of an acid at the plant and analyzed the acid strength in the lab.</li>
            <li>Conducted weekly pressure drop measurements.</li>
            <li>Conducted the stick method in the absorption tower.</li>
            <li>Assisted in analyzing the plant performance using Scada software in the control room.</li>
          </ul>
               </div>
        </section>
        
          </div>
      </section>
      </div>
<div id="section2">
      <section class = "education">
          <div class = "content-wrap">
        <h2>Education</h2>

        <section>
          <h3>University of Cape Town</h3>
          <p>BscEng (Hons) in Chemical Engineering, 2018 - 2022</p>
          <p>I am a recent graduate and my honors was mainly focused on the following:</p>
            <ul>
                <li>Design Project Topic: Treatment of a low-value residue arising from a plant processing platinum group metal (PGMs).</li>
                <li> Research Project Topic: Evaluating process options to improve recovery of Vanadium and Titanium from titanomagnetite       waste slag.</li>
                <li>Softwares learned: COCO, Scilab and ASPEN.</li>
            </ul>
        </section>
          <section>
          <h3>Batswana Commercial Secondary School - North West</h3>
          <p>National Senior Certificate, 2013 - 2017</p>
          <p>I obtained excellent matric results and I was part of the science expo society that groomed future scientists and engineers.</p>
        </section>
        
          </div>
      </section>
      </div>
      <div id="section3">
      
      
  <div>
    
  <section class = "skills">
  <div id="skill">
  <div id="skills-heading">
        <h2>Skills</h2>
        </div>
          <div class = "wrap-skills">
          
       
        <div id="soft-skills">
        <section>
          <h3>Soft Skills</h3>
            <ul>
                <li>Problem Solving</li>
                <li>Analytical and Critical Thinker</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Adaptability and Versatile</li>
            </ul>
        </section>
        </div>
        <div id="technical-skills">
          <section>
          <h3>Technical Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        </section>
        </div>
          </div>
          </div>
      </section>
      </div>
      </div>
    
      <div id="section4">
          <div class = "content-wrap">
        <h2>Why Sovtech?</h2>

        <p> I am interested in working at SovTech because I am impressed by the company's mission to drive innovation and make a positive impact on society through technology. I am eager to be a part of a team that is dedicated to delivering cutting-edge solutions and making a difference in the world.</p>
          </div>

          
      </div>

      <div id="section5">
          <div class = "content-wrap">
        <h2>Let's Keep in Touch!</h2>
        
        <p><a href="https://www.linkedin.com/in/thabang-moshoete-0891b9174/" target="_blank">LinkedIn</a></p>
        <p> Email: thabangmoshoete@gmail.com</p>
          </div>

          
      </div>
      
      <div id="bottom">
        <h3>Bottom</h3>
        
      </div>
      
      </body>

  </div>
)}

        {currentSection === "About" && (
          <div id="section0">
            <div class="content-wrap">
              <div>
                <h2>About</h2>
                <p>
                  I am a recent graduate in BscEng (Hons) in Chemical Engineering from the University of Cape Town. I am keen to pursue a career in the field of tech and get to use my engineering and data analysis skills. Apart from my technical skills, I invest my time in taking care of my mental health and I am very good at soccer and chess, I also enjoy reading books and going to church.
                </p>
              </div>
              <p>
                As a developer, I have a passion for building efficient and user-friendly applications that solve real-world problems. I am confident that my skills and experience make me a strong candidate for the role at SovTech. I am excited about the opportunity to work with and learn from the talented team at SovTech, and to contribute to the company's mission and success.
              </p>
            </div>
          </div>
        )}
        {currentSection === "Work Experience" && (
                 <div id="section1">
                 <section class = "work-experience">
                     <div class = "content-wrap">
                   <h2>Work Experience</h2>
               
           
                   <section class = "job-item divider" >
                       <div class = "job-details">
                     <h3>Data Analyst</h3>
                     <p>DATA4MIA</p>
                     <p>28/11/2022 - 15/11/2022</p>
                       </div>
                       <div clas = "job-summary">
                     <p>I analyzed the financial reports of local and district municipalities to evaluate the 
                         appropriateness of municipal service delivery and budget plans.This included: </p>
                     <ul>
                       <li>Drafted Cost of supply studies.</li>
                       <li>Drafted Climate Change Action Plans.</li>
                       <li>Drafted Wastewater Risk Abatement Plans</li>
                       <li>Drafted MIG Asset Management Analysis.</li>
                     </ul>
                        </div>
                   </section>
                   
                      <section class = "job-item divider" > 
                       <div class = "job-details">
                     <h3>  Residence Treasurer</h3>
                     <p>Forest Hill Residence (UCT)</p> 
                     <p>01/11/2021 - 01/09/2022</p>
                          </div>
                           <div clas = "job-summary">
                     <p>I was in charge of managing and recording all transactions in  the residence. I was also the main source of communication between student treasury council and the residence management team. My main roles were as follows:</p>
                     <ul>
                       <li>Managing about R1 million of residence funds while ensuring needs of over 800 students are met.</li>
                       <li>Keeping a proper record of usage of residence funds.</li>
                       <li>Preparing quarterly financial reports which will be made available for the whole residence.</li>
                       <li>Directing head structures of the residence with regards to proper financial usage.</li>
                     </ul>
                          </div>
                   </section>
                      <section class = "job-item divider" >
                       <div class = "job-details">
                     <h3>Process Service Engineer Intern</h3>
                     <p>Stone Three</p>
                     <p>20/06/2022 - 15/07/2022</p>
                          </div>
                           <div clas = "job-summary">
                     <p>I was tasked with a project to create a machine learning model in python that will detect if the flotation images from a mining company are in a froth state or slimming state. The project was achieved using an image texture analysis and linear regression. My daily tasks were as follows: .</p>
                     <ul>
                       <li>Data labelling for training machine learning models.</li>
                       <li>Image processing using scikit-image and scikit-learn packages.</li>
                       <li>Using Grey Level Co-Occurrence Matrices for image texture analysis on python.</li>
                       <li>Using GLCM features to develop linear regression model for detection and classification.</li>
                     </ul>
                          </div>
                   </section>
                      <section class = "job-item divider" >
                       <div class = "job-details">
                     <h3>Stundent Trainee</h3>
                     <p>Angloamerican</p>
                     <p>01/12/2020 - 31/12/2020</p>
                          </div>
                           <div clas = "job-summary">
                     <p>I was working on an acid plant under the supervision of process metallurgist. The main purpose was to shadow the engineers and work on maintaining the plant stability. My responsibilities were as follows: </p>
                     <ul>
                       <li>Took samples of an acid at the plant and analyzed the acid strength in the lab.</li>
                       <li>Conducted weekly pressure drop measurements.</li>
                       <li>Conducted the stick method in the absorption tower.</li>
                       <li>Assisted in analyzing the plant performance using Scada software in the control room.</li>
                     </ul>
                          </div>
                   </section>
                   
                     </div>
                 </section>
                 </div>           
        )}
        {currentSection === "Education" && (
         <div id="section2">
         <section class = "education">
             <div class = "content-wrap">
           <h2>Education</h2>
   
           <section>
             <h3>University of Cape Town</h3>
             <p>BscEng (Hons) in Chemical Engineering, 2018 - 2022</p>
             <p>I am a recent graduate and my honors was mainly focused on the following:</p>
               <ul>
                   <li>Design Project Topic: Treatment of a low-value residue arising from a plant processing platinum group metal (PGMs).</li>
                   <li> Research Project Topic: Evaluating process options to improve recovery of Vanadium and Titanium from titanomagnetite       waste slag.</li>
                   <li>Softwares learned: COCO, Scilab and ASPEN.</li>
               </ul>
           </section>
             <section>
             <h3>Batswana Commercial Secondary School - North West</h3>
             <p>National Senior Certificate, 2013 - 2017</p>
             <p>I obtained excellent matric results and I was part of the science expo society that groomed future scientists and engineers.</p>
           </section>
           
             </div>
         </section>
         </div>   
        )}
        {currentSection === "Skills" && (
           <div id="section3">
      
           <section class = "skills">
       <div>
       <div id="skills-heading">
             <h2>Skills</h2>
             </div>
               <div class = "wrap-skills">
             <div id="soft-skills">
             <section>
               <h3>Soft Skills</h3>
                 <ul>
                     <li>Problem Solving</li>
                     <li>Analytical and Critical Thinker</li>
                     <li>Time Management</li>
                     <li>Communication</li>
                     <li>Adaptability and Versatile</li>
                 </ul>
             </section>
             </div>
             <div id="technical-skills">
               <section>
               <h3>Technical Skills</h3>
                 <ul>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React.js</li>
                     <li>Node.js</li>
                     <li>Python</li>
                     <li>SQL</li>
                 </ul>
             </section>
             </div>
               </div>
               </div>
           </section>
           </div>
     
        )}
        {currentSection === "Why Sovtech?" && (
                <div id="section4">
                <div class = "content-wrap">
              <h2>Why Sovtech?</h2>
      
              <p> I am interested in working at SovTech because I am impressed by the company's mission to drive innovation and make a positive impact on society through technology. I am eager to be a part of a team that is dedicated to delivering cutting-edge solutions and making a difference in the world.</p>
                </div>
            </div>
      
        )}
      </body>
    </main>
  );
};

export default App;
