import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import './index-styles.css'
import pic01 from '../assets/images/pic01.jpg'
// skills icon 
import reactIcon from '../assets/images/reactIcon.svg'
import reduxIcon from '../assets/images/reduxIcon.svg'
import javascriptIcon from '../assets/images/javascriptIcon.svg'
import expressIcon from '../assets/images/expressIcon.svg'
import githubIcon from '../assets/images/githubIcon.svg'
import nodeIcon from '../assets/images/nodeIcon.svg'
import npmIcon from '../assets/images/npmIcon.svg'
import cssIcon from '../assets/images/cssIcon.svg'
import htmlIcon from '../assets/images/htmlIcon.svg'
import sqlIcon from '../assets/images/sqlIcon.svg'
// end skills icon 

import Header from '../components/Header'
// import Contact from '../components/Contact'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Kelly Nguyen" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

{/* ABOUT ME */}

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi, I'm Kelly!</h2>
                </header>
                <p>
                  I am a front-end developer in Austin, Texas. I am passionate about designing and building digital products/interfaces that creates an intuitive, dynamic user experience. 
                  <br></br>
                  <br></br>
                  Fueled by high energy levels and boundless enthusiasm. I am easily inspired and more than willing to follow my fascinations wherever they take me. This fuels me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors. 
                  <br></br>
                  <br></br>
                  When I'm not coding, you can find me by the lake fishing or crabbing, hiking at a national park, taking pictures and making videos,  cooking up a new recipe, or swing dancing my heart away. 
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More About What I Do
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

{/* TECHNICAL SKILLS */}

          <section id="first" className="main special">
            <header className="major">
              <h2>Technical Skills</h2>
            </header>
            <div className="skills-set">
              <div className="skills-icon">
              <h3 id="skills-title">React</h3>
              <img
                src={reactIcon}
                alt="react-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>
              
                <div className="skills-icon">
                <h3 id="skills-title">Redux</h3>
                <img
                  src={reduxIcon}
                  alt="redux-icon"
                  style={{
                    width: 90,
                    height: 90,
                  }}
                />
                </div>

              <div className="skills-icon">
              <h3 id="skills-title">ES6+</h3>
              <img
                src={javascriptIcon}
                alt="javascript-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>


              <div className="skills-icon">
              <h3 id="skills-title">Express</h3>
              <img
                src={expressIcon}
                alt="express-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">Github</h3>
              <img
                src={githubIcon}
                alt="github-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">Node</h3>
              <img
                src={nodeIcon}
                alt="node-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

                <div className="skills-icon">
                <h3 id="skills-title">NPM</h3>
                <img
                  src={npmIcon}
                  alt="npm-icon"
                  style={{
                    width: 90,
                    height: 90,
                  }}
                />
                </div>

              <div className="skills-icon">
              <h3 id="skills-title">SQL</h3>
              <img
                src={sqlIcon}
                alt="sql-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>


              <div className="skills-icon">
              <h3 id="skills-title">CSS3</h3>
              <img
                src={cssIcon}
                alt="css-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">HTML5</h3>
              <img
                src={htmlIcon}
                alt="html-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>
            </div>

        
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

{/* PROJECTS */}

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

{/* CONTACT ME */}
{/* <Contact/> */}
          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
