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
    title: "Comunidade",
    imageUrl: "img/undraw/undraw_social.svg",
    description: (
      <ul>
        <li>Criado por devs para devs.</li>
        <li>Compartilhe experiências de desenvolvimento.</li>
        <li>Em uma comunidade Open Source.</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    imageUrl: "img/undraw/undraw_code_review_re_woeb.svg",
    description: (
      <ul>
        <li>Comunidade para compartilhar tópicos como:</li>
        <li>Microsserviços / APIs / Documentação</li>
        <li>Desenvolvimento Web Full Stack / Back/Front-end</li>
        <li>Internet das Coisas / Criptomoedas / Blockchain</li>
      </ul>
    ),
  },
  {
    title: "Hard Skills",
    imageUrl: "img/undraw/undraw_programmer_re_owql.svg",
    description: (
      <ul>
        <li>Comunidade para compartilhar linguagens de programação como:</li>
        <li>Go / Python / Ruby / JavaScript</li>
        <li>Compartilhe seu repositório de código com outros devs</li>
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
            <img className={styles.featureImage} src={imgUrl} alt={`Ícone ${title}`} />
          </div>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <div className={styles.featureDescription}>{description}</div>
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
        navLinks[2].appendChild(githubStat)
      })
  }, [])
  return (
    <Layout description="Uma comunidade para desenvolvedores.">
      <Seo />
      <div className="home-wrapper">
        <header className={classnames("hero", styles.heroBanner)}>
          <div className="container">
            <div className="hero-inner">
              <img
                src={useBaseUrl("/img/site/logo_blue.svg")}
                alt="logotipo whiteStone_dev"
                className={styles.heroLogo}
              />
              <div className={styles.heroText}>
                <h1 className="hero__title">white<b>Stone</b>_<i>dev</i></h1>
                <p className="hero__subtitle">Uma comunidade para desenvolvedores.</p>
              </div>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--secondary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/eventos/intro")}
                >
                  Eventos
                </Link>
                <Link
                  className={classnames(
                    "button button--primary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/blog")}
                >
                  Sobre nós
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
                    <span>Open Source.</span> <span>Full Stack.</span> <span>Geek Tips.</span> <span>Comunidade.</span>
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
                      Comunidade GitHub
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