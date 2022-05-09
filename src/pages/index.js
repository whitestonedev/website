import React, { useEffect } from "react"
import classnames from "classnames"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Seo from "./seo"
import styles from "./index.module.css"

const features = [
  {
    title: "Community",
    imageUrl: "img/undraw/undraw_social.svg",
    description: (
      <ul>
        <li>Created for devs to devs.</li>
        <li>Share development experiences.</li>
        <li>In a Open Source community.</li>
      </ul>
    ),
  },
  {
    title: "Soft Skill",
    imageUrl: "img/undraw/undraw_code_review_re_woeb.svg",
    description: (
      <ul>
        <li>Community to share topics such as:</li>
        <li>Microservices / APIs / Documentation</li>
        <li>Full Stack / Back/Front-end Web development</li>
        <li>Internet of Things / Cryptocurrencies / Blockchain</li>
      </ul>
    ),
  },
  {
    title: "Hard Skill",
    imageUrl: "img/undraw/undraw_programmer_re_owql.svg",
    description: (
      <ul>
        <li>Community to share programming languages like:</li>
        <li>Go lang / Python / Ruby / JavaScript</li>
        <li>Share your code repository with other devs</li>
      </ul>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <div className="feature-image-wrapper">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <div>{description}</div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    window
      .fetch("https://api.github.com/repos/whitestonedev/website")
      .then((res) => res.json())
      .then((data) => {
        const navLinks = document.getElementsByClassName(
          "navbar__item navbar__link"
        )
        const githubStat = document.createElement("span")
        githubStat.innerHTML = data.stargazers_count
        githubStat.className = "github-counter"
        navLinks[3].appendChild(githubStat)
      })
  }, [])
  return (
    <Layout description={siteConfig.tagline}>
      <Seo />
      <div className="home-wrapper">
        <header className={classnames("hero", styles.heroBanner)}>
          <div className="container">
            <div className="hero-inner">
              <img
                src={useBaseUrl("/img/logo.png")}
                alt="whiteStone_dev logo"
                className={styles.heroLogo}
              />
              <div className={styles.heroText}>
                <h1 className="hero__title">white<b>Stone</b>_<i>dev</i></h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
              <div className={styles.buttons}>
                <a
                  className={classnames(
                    "button button--outline button--secondary button--lg rounded-pill",
                    styles.button
                  )}
                  href="https://join.slack.com/t/whitestonedev/shared_invite/zt-18gcudbpg-SeaLx27z4S4jvIZAYmxIAA"
                  target="_blank"
                >
                  Join slack
                </a>
                <Link
                  className={classnames(
                    "button button--primary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/blog")}
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-wave">
            <div className="hero-wave-inner" />
          </div>
        </header>
        <main className="home-main">
          <section className={`section-features ${styles.features}`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className={styles.featuresTitle}>
                    <span>Open Source.</span> <span>Full Stack.</span> <span>Geek Tips.</span> <span>Community.</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="text--center">
                    <a
                      href="https://github.com/whitestonedev"
                      className="button button--primary button--outline rounded-pill button--lg"
                    >
                      GitHub Community
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Home
