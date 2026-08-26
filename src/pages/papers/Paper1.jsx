import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaFilePdf,
  FaQuoteRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import gcuLogo from "../../assets/gcu_logo.png";


function Paper1() {

  return (
    <article
      className="article-page"
      style={{
        position: "relative",
      }}
    >

      <img
  src={gcuLogo}
  alt="Garden City University"
  style={{
    width: "250px",
    height: "100px",
    objectFit: "contain",
    
    marginRight:-174,
    marginTop:-43,
  }}
/>

      {/* =========================================
          TOP LEFT UNIVERSITY IMAGE
      ========================================= */}

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
        }}
      >

      </div>


      {/* =========================================
          ARTICLE CONTAINER
      ========================================= */}

      <div className="article-container">


        {/* =========================================
            ARTICLE HEADER
        ========================================= */}

        <div className="article-header">

          <Link
            to="/"
            className="back-link"
          >
            <FaArrowLeft />
          
          </Link>


          {/* ARTICLE TYPE */}

          <div className="article-type">
            RESEARCH ARTICLE
          </div>


          {/* ARTICLE TITLE */}

          <h1>
            Exploring Kidney Disease in Captive
            Cheetahs: A Case Study from Namibia
            and the Role of SDMA and Blood Biomarkers
          </h1>


          {/* AUTHORS */}

          <div className="article-authors">

            <strong>
              Royce D’Amelio
            </strong>

            <p>
              Mentors: Andrew Conroy, Laurie Marker,
              and Anne Schmidt-Küntzel
            </p>

          </div>


          {/* ARTICLE METADATA */}

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
              Pages 1–12
            </span>

            <span>
              Article 001
            </span>

          </div>


          {/* ARTICLE ACTIONS */}

          <div className="article-actions">

            <button className="article-pdf-button">
              <FaFilePdf />
              View PDF
            </button>


            <button className="citation-button">
              <FaQuoteRight />
              Cite Article
            </button>


            {/* SHARE BUTTONS */}

            <div className="share-buttons">

              <button>
                <FaFacebookF />
              </button>

              <button>
                <FaLinkedinIn />
              </button>

              <button>
                <FaTwitter />
              </button>

            </div>

          </div>

        </div>


        {/* =========================================
            ABSTRACT
        ========================================= */}

        <section className="abstract-section">

          <h2>
            Abstract
          </h2>


          <p>
            Kidney disease represents an important health
            concern among captive cheetahs. This study
            investigates kidney health in captive cheetahs
            in Namibia and examines the usefulness of
            symmetric dimethylarginine (SDMA) and other
            blood biomarkers in identifying changes in
            renal function.
          </p>


          <p>
            The research evaluates blood-based indicators
            and considers their potential value for the
            early detection and monitoring of kidney
            disease in captive populations.
          </p>


          {/* KEYWORDS */}

          <div className="keywords">

            <strong>
              Keywords:
            </strong>

            <span>
              Cheetahs
            </span>

            <span>
              Kidney Disease
            </span>

            <span>
              SDMA
            </span>

            <span>
              Blood Biomarkers
            </span>

            <span>
              Namibia
            </span>

          </div>

        </section>


        {/* =========================================
            ARTICLE BODY
        ========================================= */}

        <div className="article-body">


          {/* INTRODUCTION */}

          <h2>
            1. Introduction
          </h2>


          <p>
            The cheetah is one of the world's most
            recognizable large carnivores and is an
            important species for conservation research.
            Maintaining the health of captive populations
            is an essential component of long-term
            conservation efforts.
          </p>


          <p>
            Among the health challenges affecting captive
            wildlife, renal disease can be particularly
            difficult to detect during its early stages.
            Conventional clinical indicators may remain
            within normal ranges until substantial kidney
            function has already been lost.
          </p>


          {/* BACKGROUND */}

          <h2>
            2. Background
          </h2>


          <p>
            Kidney function is essential for maintaining
            fluid balance, eliminating metabolic waste,
            regulating electrolytes, and supporting
            physiological stability.
          </p>


          <p>
            In captive wildlife, regular monitoring of
            physiological biomarkers can provide valuable
            information about the health status of
            individual animals.
          </p>


          {/* METHODOLOGY */}

          <h2>
            3. Methodology
          </h2>


          <p>
            The study used a case-study approach to examine
            blood-based biomarkers associated with renal
            function in captive cheetahs in Namibia.
          </p>


          <p>
            Blood samples were evaluated using established
            laboratory procedures. Particular attention was
            given to SDMA and conventional renal biomarkers.
          </p>


          {/* RESULTS */}

          <h2>
            4. Results
          </h2>


          <p>
            The findings indicate that biomarker analysis
            can provide useful information regarding renal
            health in captive cheetahs. SDMA may provide
            additional information alongside conventional
            measures when assessing kidney function.
          </p>


          {/* DISCUSSION */}

          <h2>
            5. Discussion
          </h2>


          <p>
            Early identification of kidney dysfunction may
            improve clinical decision-making and support
            better management of captive cheetahs.
          </p>


          <p>
            The findings also highlight the importance of
            combining multiple indicators rather than
            relying on a single biomarker when evaluating
            animal health.
          </p>


          {/* CONCLUSION */}

          <h2>
            6. Conclusion
          </h2>


          <p>
            This case study demonstrates the potential
            value of SDMA and blood biomarkers in the
            assessment of renal health in captive cheetahs.
            Further research involving larger populations
            would help establish reference ranges and
            strengthen understanding of kidney disease in
            the species.
          </p>


          {/* REFERENCES */}

          <h2>
            References
          </h2>


          <ol className="references">

            <li>
              Example Author. Kidney disease in captive
              wildlife. Journal of Wildlife Medicine.
              2024.
            </li>


            <li>
              Example Author. Biomarkers of renal function
              in mammals. Veterinary Research.
              2023.
            </li>


            <li>
              Example Author. Conservation medicine and
              cheetah health. Wildlife Biology.
              2025.
            </li>

          </ol>

        </div>


        {/* =========================================
            ARTICLE FOOTER
        ========================================= */}

        <div className="article-footer">

          <a
            href="https://gcu.edu.gh/portals/student/"
          >
            <FaArrowLeft />
            Back to Archives
          </a>

        </div>


      </div>

    </article>
  );
}

export default Paper1;