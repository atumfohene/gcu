import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaFilePdf,
  FaQuoteRight
} from "react-icons/fa";

function Paper3() {

  return (
    <article className="article-page">

      <div className="article-container">

        <div className="article-header">

          <Link
            to="/"
            className="back-link"
          >
            <FaArrowLeft />
            Back to Journal
          </Link>


          <div className="article-type">
            RESEARCH ARTICLE
          </div>


          <h1>
            Sustainable Development and Innovation:
            New Approaches to Global Challenges
          </h1>


          <div className="article-authors">

            <strong>
              Sarah Williams
            </strong>

            <p>
              School of Environmental Studies
            </p>

          </div>


          <div className="article-metadata">

            <span>
              Volume 1
            </span>

            <span>
              Issue 1
            </span>

            <span>
              2026
            </span>

            <span>
              Pages 25–38
            </span>

            <span>
              Article 003
            </span>

          </div>


          <div className="article-actions">

            <button className="article-pdf-button">
              <FaFilePdf />
              View PDF
            </button>

            <button className="citation-button">
              <FaQuoteRight />
              Cite Article
            </button>

          </div>

        </div>


        <section className="abstract-section">

          <h2>
            Abstract
          </h2>

          <p>
            Sustainable development requires innovative
            approaches capable of addressing environmental,
            economic, and social challenges simultaneously.
            This research examines emerging approaches to
            sustainable development and evaluates the role
            of technology and innovation.
          </p>

          <div className="keywords">

            <strong>
              Keywords:
            </strong>

            <span>
              Sustainable Development
            </span>

            <span>
              Innovation
            </span>

            <span>
              Environment
            </span>

            <span>
              Technology
            </span>

          </div>

        </section>


        <div className="article-body">

          <h2>
            1. Introduction
          </h2>

          <p>
            Sustainable development has become a central
            concern for governments, organizations,
            researchers, and communities around the world.
          </p>

          <p>
            Rapid technological development presents both
            opportunities and challenges for achieving
            sustainable development goals.
          </p>


          <h2>
            2. Background
          </h2>

          <p>
            Modern approaches to sustainability increasingly
            emphasize the relationship between environmental
            protection, economic development, and social
            wellbeing.
          </p>


          <h2>
            3. Methodology
          </h2>

          <p>
            This study uses a comparative review of existing
            literature concerning innovation and sustainable
            development.
          </p>


          <h2>
            4. Results
          </h2>

          <p>
            The findings suggest that technological
            innovation can support sustainable development
            by improving resource efficiency, reducing
            environmental impact, and supporting better
            decision-making.
          </p>


          <h2>
            5. Discussion
          </h2>

          <p>
            Technology alone cannot guarantee sustainable
            development. Effective implementation requires
            appropriate policies, institutional support,
            public participation, and responsible innovation.
          </p>


          <h2>
            6. Conclusion
          </h2>

          <p>
            Sustainable development requires collaboration
            across disciplines and sectors. Innovation can
            contribute significantly when it is guided by
            environmental responsibility and long-term
            societal objectives.
          </p>


          <h2>
            References
          </h2>

          <ol className="references">

            <li>
              Example Author. Innovation and sustainable
              development. Environmental Research.
              2024.
            </li>

            <li>
              Example Author. Technology and global
              sustainability. Sustainability Studies.
              2025.
            </li>

          </ol>

        </div>


        <div className="article-footer">

          <Link to="/archives">
            <FaArrowLeft />
            Back to Archives
          </Link>

        </div>

      </div>

    </article>
  );
}

export default Paper3;