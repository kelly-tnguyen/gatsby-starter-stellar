import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import './index-styles.css'
import pic01 from '../assets/images/pic01.jpg'
import reactIcon from '../assets/images/reactIcon.svg'
import Header from '../components/Header'
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

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

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
