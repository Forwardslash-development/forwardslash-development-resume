import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Sidebar from "../components/Sidebar"
import config from "../../config"
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            <span className="text-primary">{config.firstName}</span>
            <span className="text-secondary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            The sum of my professional experience has been helping people and
            organizations leverage technology.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Founder</h3>
              <div className="subheading mb-3">Forwardslash Development</div>
              <p>
                Forwardslash provides web development services utilizing open
                source software. On larger initiatives, I lead technical teams
                to develop web-based solutions, components, themes, and digital
                assets to be used across various platforms.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">May '03 to Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lead Engineer</h3>
              <div className="subheading mb-3">
                Health Information Medical System Society
              </div>
              <p>
                HIMSS provides publications and conferences for the medical
                community. As Lead Engineer I provided technical leadership over
                the enterprise digital platform, consisting of 128 domains and
                14 repos
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">May '18 to Jan ‘20</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Farm Journal Media</div>
              <p>
                The Farm Journal is a multimedia organization specialized in
                agriculture markets. My role as a senior web developer was to
                provide development, technical direction and leadership in all
                web development initiatives across fourteen domains.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Jan '17 to April ‘18</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Technical Director</h3>
              <div className="subheading mb-3">IFCJ</div>
              <p>
                The IFCJ is a $100m non-profit. My role was to provide technical
                direction and leadership in all web development initiatives. My
                experience and achievements for the IFCJ include. Manage $1.3M
                budget, Lead project development team, Managed external vendors,
                Lead web server migration to cloud architecture, Implemented
                version control system to workflow, Initiated agile and lean
                methodology principles.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Oct. '12 to Oct. ‘13</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Free Code Camp <i class="fab fa-free-code-camp"></i>
              </h3>
              <div className="subheading mb-3">
                Computer Software Engineering
              </div>
              <p> Full Stack Web Development Certification</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Illinois State University</h3>
              <div className="subheading mb-3">Political Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary"></span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-vuejs"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-drupal"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-jenkins"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="list-inline">
            <li>
              <i className="fab fa-github"></i>
              &nbsp; Github
            </li>
            <li>
              <i className="fab fa-jira"></i>
              &nbsp; Jira
            </li>
            <li>
              <i className="fab fa-confluence"></i>
              &nbsp; Confluence
            </li>
            <li>
              <i className="fab fa-slack"></i>
              &nbsp; Slack
            </li>
            <br />
            <div className="subheading mb-3">Additional details</div>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
          <div className="subheading mb-3">Technical Buzzwords</div>
          JavaScript, JSON, Gatsby, GraphQl, React, Vue.js, Node, PHP, MySQL,
          SASS, CSS, HTML, Drupal, WordPress, AWS, Pantheon, Git, CMS, Content
          Mesh, Netlify, Contentful
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p className="mb-0">
            Recently I've been spending a large amount of time learning the
            latest advancements in front-end web development, specifically as it
            relates to the JAM stack, and threading content mesh API's into
            progressive web applictions.
          </p>
          <br />
          <p className="mb-0">
            Apart from being a web developer, I enjoy spending time with my
            puppy{" "}
            <a href="https://www.instagram.com/jvworldwide/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            &nbsp;Bash.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-star text-primary"></i>
              Numberous Gold Stars
            </li>
            <li>
              <i className="fa-li fa fa-smile text-primary"></i>
              Many smiles
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place -
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
