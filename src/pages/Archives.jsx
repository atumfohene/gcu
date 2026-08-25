import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen
} from "react-icons/fa";

function Archives() {

  return (
    <div className="archives-page">

      {/* PAGE HEADER */}

      <section className="page-header">

        <div className="section-container">

          <span className="section-label">
            JOURNAL ARCHIVES
          </span>

          <h1>
            Archives
          </h1>

          <p>
            Browse published issues and research articles
            from the University Journal of Research.
          </p>

        </div>

      </section>


      {/* ARCHIVE CONTENT */}

      <section className="archive-content">

        <div className="section-container">

          <div className="archive-year">

            <h2>
              2026
            </h2>


            <div className="issue-box">

              <div className="issue-header">

                <div>

                  <span className="issue-label">
                    VOLUME 1
                  </span>

                  <h3>
                    Issue 1
                  </h3>

                  <p>
                    Published August 2026
                  </p>

                </div>

                <FaBookOpen className="issue-icon" />

              </div>


              <div className="archive-papers">

                {/* PAPER 1 */}

                <div className="archive-paper">

                  <span className="archive-number">
                    01
                  </span>

                  <div>

                    <h4>
                      Exploring Kidney Disease in
                      Captive Cheetahs: A Case Study
                      from Namibia and the Role of SDMA
                      and Blood Biomarkers
                    </h4>

                    <p>
                      Royce D’Amelio
                    </p>

                  </div>

                  <Link
                    to="/papers/paper-1"
                    className="archive-read"
                  >
                    Read
                    <FaArrowRight />
                  </Link>

                </div>


                {/* PAPER 2 */}

                <div className="archive-paper">

                  <span className="archive-number">
                    02
                  </span>

                  <div>

                    <h4>
                      Artificial Intelligence and the
                      Future of Scholarly Research
                    </h4>

                    <p>
                      Michael Anderson
                    </p>

                  </div>

                  <Link
                    to="/papers/paper-2"
                    className="archive-read"
                  >
                    Read
                    <FaArrowRight />
                  </Link>

                </div>


                {/* PAPER 3 */}

                <div className="archive-paper">

                  <span className="archive-number">
                    03
                  </span>

                  <div>

                    <h4>
                      Sustainable Development and
                      Innovation: New Approaches to
                      Global Challenges
                    </h4>

                    <p>
                      Sarah Williams
                    </p>

                  </div>

                  <Link
                    to="/papers/paper-3"
                    className="archive-read"
                  >
                    Read
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Archives;