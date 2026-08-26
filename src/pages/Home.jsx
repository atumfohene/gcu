// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   FaArrowRight,
//   FaFilePdf,
//   FaBookOpen
// } from "react-icons/fa";

// function Home() {

//   return (
//     <div className="home-page">

//       {/* =========================================
//           HERO
//       ========================================= */}

//       <section className="journal-hero">

//         <div className="hero-content">

//           <div className="hero-label">
//             ACADEMIC JOURNAL
//           </div>

//           <h1>
//             University Journal
//             <br />
//             of Research
//           </h1>

//           <p className="hero-description">
//             Advancing scholarship, research, innovation,
//             and knowledge through the publication of
//             high-quality academic work.
//           </p>

//           <div className="hero-meta">

//             <span>
//               Volume 1
//             </span>

//             <span>
//               Issue 1
//             </span>

//             <span>
//               2026
//             </span>

//             <span>
//               ISSN: XXXX-XXXX
//             </span>

//           </div>

//         </div>

//       </section>


//       {/* =========================================
//           CURRENT ISSUE
//       ========================================= */}

//       <section className="current-issue-section">

//         <div className="section-container">

//           <div className="section-heading">

//             <div>

//               <span className="section-label">
//                 CURRENT ISSUE
//               </span>

//               <h2>
//                 Volume 1, Issue 1
//               </h2>

//             </div>

//             <Link
//               to="/archives"
//               className="view-archive-link"
//             >
//               View Archives
//               <FaArrowRight />
//             </Link>

//           </div>


//           {/* PAPER 1 */}

//           <article className="paper-card">

//             <div className="paper-number">
//               01
//             </div>

//             <div className="paper-content">

//               <div className="paper-type">
//                 RESEARCH ARTICLE
//               </div>

//               <h3>
//                 Exploring Kidney Disease in Captive
//                 Cheetahs: A Case Study from Namibia
//                 and the Role of SDMA and Blood Biomarkers
//               </h3>

//               <p className="paper-author">
//                 Royce D’Amelio
//               </p>

//               <p className="paper-mentors">
//                 Mentors: Andrew Conroy, Laurie Marker,
//                 and Anne Schmidt-Küntzel
//               </p>

//               <p className="paper-abstract">

//                 This study investigates kidney disease in
//                 captive cheetahs in Namibia, examining the
//                 role of symmetric dimethylarginine (SDMA)
//                 and blood biomarkers in the assessment of
//                 renal health.

//               </p>

//               <div className="paper-actions">

//                 <Link
//                   to="/papers/paper-1"
//                   className="read-paper-button"
//                 >
//                   Read Article
//                   <FaArrowRight />
//                 </Link>

//                 <button className="pdf-button">
//                   <FaFilePdf />
//                   PDF
//                 </button>

//               </div>

//             </div>

//           </article>


//           {/* PAPER 2 */}

//           <article className="paper-card">

//             <div className="paper-number">
//               02
//             </div>

//             <div className="paper-content">

//               <div className="paper-type">
//                 RESEARCH ARTICLE
//               </div>

//               <h3>
//                 Artificial Intelligence and the Future
//                 of Scholarly Research
//               </h3>

//               <p className="paper-author">
//                 Michael Anderson
//               </p>

//               <p className="paper-mentors">
//                 Department of Computer Science
//               </p>

//               <p className="paper-abstract">

//                 This paper examines the emerging role of
//                 artificial intelligence in academic research,
//                 with particular attention to research
//                 productivity, knowledge discovery, and
//                 scholarly communication.

//               </p>

//               <div className="paper-actions">

//                 <Link
//                   to="/papers/paper-2"
//                   className="read-paper-button"
//                 >
//                   Read Article
//                   <FaArrowRight />
//                 </Link>

//                 <button className="pdf-button">
//                   <FaFilePdf />
//                   PDF
//                 </button>

//               </div>

//             </div>

//           </article>


//           {/* PAPER 3 */}

//           <article className="paper-card">

//             <div className="paper-number">
//               03
//             </div>

//             <div className="paper-content">

//               <div className="paper-type">
//                 RESEARCH ARTICLE
//               </div>

//               <h3>
//                 Sustainable Development and Innovation:
//                 New Approaches to Global Challenges
//               </h3>

//               <p className="paper-author">
//                 Sarah Williams
//               </p>

//               <p className="paper-mentors">
//                 School of Environmental Studies
//               </p>

//               <p className="paper-abstract">

//                 This research explores innovative approaches
//                 to sustainable development and examines how
//                 emerging technologies can contribute to
//                 addressing global environmental challenges.

//               </p>

//               <div className="paper-actions">

//                 <Link
//                   to="/papers/paper-3"
//                   className="read-paper-button"
//                 >
//                   Read Article
//                   <FaArrowRight />
//                 </Link>

//                 <button className="pdf-button">
//                   <FaFilePdf />
//                   PDF
//                 </button>

//               </div>

//             </div>

//           </article>

//         </div>

//       </section>


//       {/* =========================================
//           ABOUT THE ISSUE
//       ========================================= */}

//       <section className="issue-information">

//         <div className="section-container">

//           <div className="issue-info-grid">

//             <div>

//               <FaBookOpen className="info-icon" />

//               <h2>
//                 About This Issue
//               </h2>

//             </div>

//             <div>

//               <p>
//                 Volume 1, Issue 1 presents a collection
//                 of scholarly research addressing important
//                 questions across science, technology,
//                 environmental studies, and related fields.
//               </p>

//               <p>
//                 The journal is committed to providing an
//                 accessible platform for researchers and
//                 scholars to disseminate original academic
//                 work.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }

// export default Home;




import React from "react";

function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://gcu.edu.gh/"
        title="Garden City University Website"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}

export default Home;
