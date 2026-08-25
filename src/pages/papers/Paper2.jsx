import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaFilePdf,
  FaQuoteRight
} from "react-icons/fa";

function Paper2() {

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
            Artificial Intelligence and the Future
            of Scholarly Research
          </h1>


          <div className="article-authors">

            <strong>
              Michael Anderson
            </strong>

            <p>
              Department of Computer Science
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
              Pages 13–24
            </span>

            <span>
              Article 002
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
            Artificial intelligence is increasingly being
            integrated into academic research and scholarly
            communication. This paper examines the
            opportunities and challenges associated with
            the use of AI throughout the research lifecycle.
          </p>

          <div className="keywords">

            <strong>
              Keywords:
            </strong>

            <span>
              Artificial Intelligence
            </span>

            <span>
              Research
            </span>

            <span>
              Machine Learning
            </span>

            <span>
              Scholarly Communication
            </span>

          </div>

        </section>


        <div className="article-body">

          <h2>
            1. Introduction
          </h2>

          <p>
            Artificial intelligence has become an important
            technology across many areas of academic and
            scientific research.
          </p>

          <p>
            Researchers increasingly use computational
            systems to process large datasets, identify
            patterns, generate hypotheses, and support
            scholarly communication.
          </p>


          <h2>
            2. Literature Review
          </h2>

          <p>
            Previous research has demonstrated the
            usefulness of machine learning and other
            artificial intelligence techniques in scientific
            discovery.
          </p>


          <h2>
            3. Methodology
          </h2>

          <p>
            This study uses a qualitative review of existing
            research concerning artificial intelligence and
            scholarly practices.
          </p>


          <h2>
            4. Results
          </h2>

          <p>
            The findings suggest that AI can improve
            productivity in several stages of the research
            process, particularly data analysis, literature
            discovery, and information organization.
          </p>


          <h2>
            5. Discussion
          </h2>

          <p>
            Despite its benefits, artificial intelligence
            introduces important questions regarding
            transparency, authorship, research integrity,
            and responsible use.
          </p>


          <h2>
            6. Conclusion
          </h2>

          <p>
            Artificial intelligence is likely to become an
            increasingly important component of scholarly
            research. Researchers and institutions should
            establish appropriate practices that maximize
            its benefits while protecting academic integrity.
          </p>


          <h2>
            References
          </h2>

          <ol className="references">

            <li>
              Example Author. Artificial intelligence in
              academic research. Research Technology.
              2025.
            </li>

            <li>
              Example Author. Machine learning and
              scientific discovery. Computing Research.
              2024.
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

export default Paper2;