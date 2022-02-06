import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from "@material-ui/core";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "react-spring";
import { faLinkedin, faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      title={`Hello | Jeremy`}
      description="Senior full-stack software engineer, specializing in bioinformatics, genomics, and life science applications"
    >
      <Grid container spacing={2} style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Hello! I'm</Translate>
              <span className="intro__name"> Jeremy</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
                I am a senior full-stack software engineer, specializing in
                bioinformatics, genomics, and life science applications.
                Currently a Team Lead at the
                {" "}
                <Link to="https://ga4gh.org">
                  Global Alliance for Genomics and Health
                </Link>
                . I develop standards and tools to facilitate 
                interoperable genomic data sharing across federated networks. 
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>Top Skills:</Translate>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Java, Spring Boot, Hibernate, Gradle, Python, PostgreSQL,
              Node.js, React, Bash, R, Github, AWS, REST API, CI/CD, IaC, ETL
            </Typography>
          </animated.div>
          &nbsp;
          <animated.p style={animatedTexts[3]}>            
            <Link
              href="/resume"
              variant="body1"
            >
              My Resume
            </Link>
          </animated.p>
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          {/*
          <animated.img
            src={useBaseUrl("img/programming.svg")}
            style={animatedHero}
          />
          */}
        </Grid>
      </Grid>
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/jeremy-bruce-adams/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/jb-adams">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://orcid.org/0000-0003-1215-8123">
            <FontAwesomeIcon icon={faOrcid} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

export default Home;
