import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaFilePdf,
  FaQuoteRight,
  FaFacebookF,
  FaLinkedinIn,
  FaUserLock,
  FaUnlock,
  FaUnlockAlt,
  FaLockOpen,
  FaLock,
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

<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    marginBottom: "0px",
  }}
>
  <img
    src={gcuLogo}
    alt="Garden City University"
    style={{
     width: "750px",
  height: "120px",
  objectFit: "contain",
  display: "block",
    }}
  />
</div>

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
          Knowledge of AI use and prediction of AI 
adoption among selected residents in the 
greater Kumasi area of Ghana
          </h1>


          {/* AUTHORS */}

          <div className="article-authors">

            <strong>
              Agyemang Nana Duah Asante
            </strong>

            <p>
              Mentors: Asamoah Kofi, Yeboah Enoch,
              and Ofori Abigail Ansah
            </p>

          </div>



<div className="article-metadata">
  First Published: 27 April 2026

</div>

<div  className="article-metadata-p">

  

    <a  className="article-metadata-p" href="">https://doi.org/10.1155/2026/6624087</a>
    
</div>
<div>
  <p></p>
</div>





          {/* ARTICLE METADATA */}

          <div className="article-metadata">
 <span>
              Volume 2026
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

            {/* <span>
              Article 001
            </span>  */}

          </div>


          {/* ARTICLE ACTIONS */}

          <div className="article-actions">

            <button className="article-pdf-button">
              <FaFilePdf />
              View PDF
            </button>


            <button className="citation-button">
              <FaUnlock/>
              Open Access
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
 Artificial intelligence (AI) technologies are rapidly changing communities and 
societies and have had a significant impact on the way of life of individuals. 
Yet, understanding the influence of AI adoptionamong people of different 
sociodemographic backgroundAsocio-demographic , especially in non-Western 
settings, remains limited. This study examines the knowledge of AI use and the 
prediction of AI adoption among residents in the Greater Kumasi area of Ghana.
          </p>


          <p>
     The study employed a cross-sectional survey of 407 residents using a multistage 
sampling technique. The study examined how socio-demographic factors (age, 
education, gender) influence the perceived usefulness of AI among residents in the 
Greater Kumasi area and further assessed how AI knowledge and confidence shaped 
the perceived ease of use of AI among the selected residents. Data was analysed 
both descriptively presented using frequency distribution and inferentially by way of 
a binary logistic regression, with a p-value less than 0.05 considered statistically significant.
          </p>


          <p>
            Results show that most participants are aware of and use AI with high confidence. 
The logistic regression analysis showed that the level of education, age, knowledge 
and confidence in AI are determinants of AI adoption. Our findings reflect the 
literature on technology adoption pathways. These findings contribute to AI adoption 
literature in non-Western settings with implications for promoting AI education with 
targeted outreach programmes.
          </p>


          {/* KEYWORDS */}

          <div className="keywords">

            <strong>
              Keywords:
            </strong>

            <span>
            AI adoption
            </span>

            <span>
             AI knowledge
            </span>

            <span>
             AI awareness
            </span>

            <span>
              Technology acceptance
            </span>

            <span>
             Confidence in AI
            </span>

             <span>
             Digital literacy
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
         Artificial intelligence (AI) technologies are rapidly changing communities and societies 
and has had a significant impact on the way of life of individuals. Artificial intelligence came about around the 1950s when a group of computer scientists worked on 
an area called neural networks, marking the beginning of artificial intelligence
. John 
McCarthy (MIT) originally used the phrase in 1956 at a conference held at Dartmouth 
College. Typically, systems that exhibit intelligent behaviour through environmental 
analysis and conduct relatively autonomous actions to accomplish predetermined goals
are referred to as artificial intelligence (AI) systems
. Many complicated tasks that 
were formerly completed by people may now be handled by AI, including speech recognition, picture identification, and natural language processing .
          </p>


          <p>
         Artificial intelligence 
(AI) has become a major factor in the development of technology worldwide, with the 
prospect of extraordinary improvements in several fields, including healthcare, finance, 
agriculture and education.
The ideal situation for the adoption of AI across Ghana will be the equitable adoption 
of AI across diverse demographic groups, where AI is adopted to enhance productivity, 
facilitate education and healthcare, while mitigating risk such as job displacement and 
bias. However, the current adoption patterns of AI in Ghana remain unevenly spread, 
with several studies focusing on professions including students, academicians and 
health-related, while ignoring other populations proven to have adopted AI in different 
settings. Also, there is limited evidence on how socio-demographic factors influence the 
adoption of AI in non-Western settings like Ghana.
          </p>

          <p>

            If unaddressed, this gap could leave Ghana behind in the AI revolution and limit Ghana’s ability to utilise AI for national development further widening digital inequalities. 
This study addresses the gap by adopting the Technology Acceptance Model (TAM) in 
examining the knowledge of AI use and the prediction of AI adoption among residents 
in the Greater Kumasi area of Ghana. The objective of the study are (1) To examine 
how socio-demographic factors (age, education, gender) influence the perceived usefulness of AI among residents in the greater Kumasi area (2) To assess how AI knowledge and confidence shape the perceived ease of use of AI among selected residents in 
the Greater Kumasi area. The study links knowledge and confidence to perceived ease 
of use and socio-demographic factors to perceived usefulness. This framing allows this 
study to contribute both practically and theoretically by providing target areas for AI 
literacy education and extending the Technology Acceptance Model (TAM) to an underresearched context in sub-Saharan Africa. This study does not limit itself to generative 
AI only, it includes a diverse set of AI-powered applications that are available and accessible to the population living in the Greater Kumasi area.
          </p>


          {/* BACKGROUND */}

          <h2>
            2. Review of Literature
          </h2>


          <p>
         Technology adoption studies, including artificial intelligence, increasingly highlight the 
role of demographic and contextual factors across diverse settings. In shaping uptake or 
technology use, understanding the influence of AI adoption across different socio-environmental contexts, especially in non-Western settings, is essential for scaling up innovations. According to Jain, age and educational level are significant predictors of 
the adoption of technology, with young and middle-aged farmers perceiving highly the 
usefulness and the ease of use of technology as compared to older individuals. However, 
gender does not appear to contribute to the adoption of technologies. In Dhraief et 
al. study, the findings revealed the importance of economic and socio-demographic 
factors such as education, age and income in the adoption of technologies. The application of the technology adoption model (TAM) in Jain also demonstrated that several 
factors, including the perceived usefulness and the perceived ease of use of a technology, moderated by socio-demographic factors, could influence the adoption of artificial 
intelligence.
          </p>


          <p>
        Studies on AI adoption across various sectors, though emerging, demonstrate that 
knowledge and awareness of AI are determinants of the adoption of AI technologies. A 
study which examined key issues for digital technology and AI adoption revealed that 
knowledge sharing and AI adoption are related to digital technologies, as knowledge was 
shared, the adoption of digital technologies, including AI, increased. Knowledge sharing has a favourable correlation with both privacy and security and AI adoption. The 
awareness and adoption of AI technologies are influenced by gender, with males adopting AI more than females, whilst age and professional experience did not predict the 
awareness and adoption of AI, with AI awareness defined as having knowledge and 
exposure to AI. Having no knowledge or little knowledge of AI led to the adoption of AI 
as a starting point.
          </p>

          <p>
            In the Ghanaian context, previous studies have explored AI awareness, adoption, and 
attitudes across different professions and academic groups. Adarkwah et al. in a study 
among Ghanaian academics found that there was a mix of excitement and fear regarding the use of AI tools in teaching, with the majority of participants lacking a conceptual 
knowledge of AI tools such as ChatGPT and its potential application in learning, teaching and personal development. Contrarily, in Nyarko study among Ghanaian tertiary students, reported a high level of awareness of AI (56%) and a significant degree of 
knowledge of AI. Edzie et al. study revealed that there was awareness and adoption 
of AI among radiologists in Ghana. According to Ampofo, Emery and Ofori, nine in 
ten (92.3%) of medical imaging students studied had a solid understanding of AI. Despite 
the high knowledge and awareness of AI, Holmes et al. have highlighted the importance of responsible innovation and ensuring AI aligns with human values. In the same 
vein, Pflanzer et al.focus attention on the value alignment in AI systems, stressing 
that AI technologies must reflect fairness, inclusiveness, and human dignity.
          </p>


<p>
  Beyond demographics, behavioural factors also influence AI adoption. In their study, 
Hong Chuyen and Vinh  found that behavioural intention to utilise AI-powered 
design tools is not strongly correlated with facilitating conditions and trust/confidence. 
The non-significant findings for these two variables imply that neither the number of 
resources available (facilitating conditions) nor the degree of confidence and trust in the 
tools have a significant impact on users intention to employ AI-powered design tools. 
Facilitating circumstances and trust/confidence were not predictive of behavioural 
intention to use AI-powered design tools . As new technologies continue to emerge, 
the adoption behaviour of these technologies by users has become crucial and a theoretical framework has emerged to help in the prediction of technology adoption. The 
Technology Acceptance Model (TAM) is a theoretical framework for understanding and 
predicting user intentions to use and accept technologies developed by Davis in 1986 
. The TAM framework is based on two main constructs, which are perceived usefulness and perceived ease of use. Perceived usefulness has to do with an individual’s 
intention to use a technology if that technology will enhance their performance . 
Perceived ease of use has to do with the degree to which an individual believes that using 
a technology will be free of effort. TAM posits that these factors contribute to an individual’s intention to use and subsequent usage behaviour of technologies.
</p>


<p>
  Drawing on TAM constructs, this study examines whether knowledge and confidence in AI influence the perceived ease of use while socio-demographic factors like age, 
gender and education shape perceived usefulness. We conceptualise knowledge of AI and confidence in understanding AI as proxies for perceived ease of use, while sociodemographics are interpreted as perceived usefulness, consistent with. Applying 
TAM to this study provides an organised way for the understanding of the adoption of 
AI technology among residents in the selected districts and municipalities in the greater 
Kumasi area. Despite there being several theories to explain technology adoption, TAM 
was adopted in this study due to its empirical strength in explaining individual-level 
behavioural intentions towards the use of technology. Unlike the diffusion of innovation 
theory, which emphasises macro-levels such as infrastructure, TAM constructs allow 
users to test how individual attitudes, rather than infrastructure, drive AI adoption by 
residents in the greater Kumasi area of Ghana. Dhraief et al. and Jain have both 
successfully applied TAM to technology adoption, validating its relevance, accordingly, 
we adopt TAM in its original form to guide the selection of variables and the interpretation of results in this study.

</p>

<p>

  Most existing studies on AI adoption focus on students, tech professionals or healthcare professionals in urban centres, leaving out populations exposed to AI through 
everyday interactions. Additionally, the application of TAM in a non-Western context 
like Ghana is limited. This study fills the gap by applying TAM to examine the knowledge of AI use and the prediction of AI adoption among selected residents in the Greater 
Kumasi area of Ghana. Based on TAM’s constructs, perceived usefulness refers to the 
degree to which an individual believes that using technology will enhance their performance. In this study, socio-demographic characteristics including age, gender and 
education are theorised to influence perceived usefulness as these factors shape how 
individuals perceive the relevance and utility of digital technologies. Perceived 
ease of use refers to the degree to which an individual believes that using a technology 
will be free of effort. These constructs reflect an individual’s familiarity and comfort with 
engaging with AI systems. The conceptual framework below illustrates the theorised relationships between the study’s key variables as derived from TAM.
</p>



          {/* METHODOLOGY */}

          <h2>
            3. Materials and methods
          </h2>


          <p>
           This is a quantitative cross-sectional survey involving the use of self-administered questionnaires evaluating AI knowledge awareness, adoption and sources of exposure to 
AI among various socio-demographic groups among selected residents in the greater 
Kumasi area. The study was conducted in the Ashanti region of Ghana. Within the 
Ashanti region, the study’s exact setting was limited to selected districts and municipalities in the greater Kumasi area, defined to include Kwadaso, Oforikrom, Ejisu, Santasi 
and Subin. The study focused on the greater Kumasi area, given that the region is one of 
the largest in Ghana with diverse socio-economic and occupational groups. The industrial nature of the region and increasing digital penetration through the emergence of AI 
startups make it ideal for studying AI adoption in the region.
          </p>


          {/* RESULTS */}

          <h2>
            4. Sampling and study population
          </h2>


          <p>
           Willie and, Amedahe and Asamoah define population as the target group the 
researcher is interested in gaining information and drawing conclusions. The target population is the units for which information is required and studied. The study population included all residents in the greater Kumasi area with an estimated population of
        2,627,765 . A multistage sampling (cluster and purposive) technique was used for 
this study. Due to the absence of any known previous study in Ghana of a similar nature, 
the elements of appropriateness, representativeness and proportionality informed the 
sample size selection.
This study employed a combination of multistage sampling techniques to ensure both 
representativeness and accessibility of participants. The multistage sampling involved: 
firstly, the sampling and identification of relevant groups or subpopulations of interest 
based on the objectives of the study. Stage one involved the identification of the subpopulations (clusters) of interest based on their relevance to the study.  </p>

<p>
   These groups 
included university students, legal professionals/researchers, AI industry professionals 
and experts, traders and vendors, human rights activists and lawyers, drivers, senior 
high school students and junior high students. Within each cluster, a form of cluster 
sampling was employed by selecting specific groups, organisations or entities that are 
most relevant to the research objectives. Stage two characterised a purposive sampling 
to select participants from each cluster, a predetermined sample size was purposively 
selected from each cluster. This approach allowed for a comprehensive understanding by 
capturing perspectives from diverse backgrounds and expertise levels while maintaining 
a focus on the research objectives.
The Cochran formula n₀ = Z² (p)(q)/e² for estimating sample size for unknown population was used; where n is the sample size, z is the confidence (95%) level, e is the desired 
level of precision, p is the (estimated) proportion of the population which has the attribute in question and q is 1-p. Based on the Cochran equation, a 384 sample size 
was obtained. The sample size was increased by 10% resulting in a sample size of 407 
respondents to account for attrition. The selection of the Cochran unknown population 
formula is motivated by its suitability for determining the sample size of an unknown 
population, since the population of various clusters selected in the greater Kumasi was 
not known.
</p>
          {/* DISCUSSION */}

          <h2>
            5. Data collection and variable measurement
          </h2>


          <p>
          Data collection commenced in September 2024 and ended in November 2024 using 
a structured questionnaire designed using the Kobo Collect toolbox. We administered the questionnaire online through a link sent to various organisations and in person 
through the Kobo Collect application. Data collected was uploaded to the Kobo Collect 
toolbox server under password protection with limited access.
The questionnaire for this study was designed using constructs from TAM and existing validated instruments in digital literacy and self-efficacy literature. The key variables 
and how they were operationalised are as follows: AI adoption refers to whether an individual has used AI-powered applications and is measured as the dependent variable 
in the binary logistic regression analysis. This approach helped us to test how the TAM 
constructs mediate the relationship between socio-demographic factors and adoption 
behaviour in the study population. 
          </p>


          <p>
            Our binary scale (yes/no) used to measure knowledge 
of AI was adopted from the binary self-reported measure from Hargittai (2005), digital literacy widely used to assess basic familiarity with technologies. Confidence in AI 
employed a 5-point Likert scale (1-not confident, 2-somewhat confident, 3-moderately 
confident, 4-very confident, 5-extremely confident) following the computer self-efficacy 
scale validated across multiple technology domains, including artificial intelligence . 
Socio-demographic variables, including age, gender, and education level, were included 
to examine their influence on perceived usefulness in line with TAM-based studies  
. The questionnaire was pretested with a sample of 42 participants.The participants 
understood the questions as intended and could meaningfully differentiate between 
measures, making the questionnaire appropriate and clear in the context of this study
            The findings also highlight the importance of
            combining multiple indicators rather than
            relying on a single biomarker when evaluating
            animal health.
          </p>


          {/* CONCLUSION */}

          <h3>
            5.1 Data analysis
          </h3>


          <p>
        The data collected was analysed using descriptive and inferential statistics aided by A 
STATA software version 17SE. Frequencies and percentagesdescribed sex, age, gender, 
religion, education level, occupation and the knowledge and awareness of AI. Inferential statistics was used to determine the association between socio-demographic factors, 
knowledge of AI and source of initial exposure to the adoption of AI-powered applications. The association between socio-demographic characteristics, knowledge of AI and 
source of initial exposure with usage of AI-powered applications was examined using a 
chi-square test of association, with a p-value of 0.05 considered statistically significant. 
The study used a binary logistic regression to analyse the effect of specific variables on 
AI adoption.
          </p>


          {/* REFERENCES */}

          <h3>
            5.2 Ethical considerations
          </h3>

<p>
  To uphold ethical standards, participant protection and confidentiality, prior ethical 
clearance was obtained from the Humanities and Social Sciences Research Ethics Committee (HuSSREC) with approval number (HuSSREC/AP/75/VOL.3) dated 2nd September 2024. Additionally, formal permission was secured from various institutions where 
the study took place and all participants provided written informed consent to participate in the study and for their data to be published. Voluntary choice to participate, 
without any pressure, was respected. Furthermore, withdrawal without consequences 
was assured. Anonymity was maintained, with unique codes used instead of personal 
identifiers.
</p>

<h2>
6. Results
</h2>

<h3>
  6.1 Socio-demographic characteristics of respondents
</h3>

<p>
  Table  1 presents the socio-demographic characteristics of respondents. Out of 407 
respondents, nearly two-thirds were males, 257(63.14%). The dominant age group were 
those within 21–30 years, 157(38.57%) of the bracket. A majority, 342(84.03%), were 
Christians and had had tertiary education, 239(58.72%). Students (Junior High school, 
Senior High and Undergraduates) 152(37.35%) formed the dominant group studied, and 
the least were data scientists with 9(2.21%).
</p>

<h3>
  6.2 Knowledge and awareness of AI
</h3>

<p>
  Table 2 presents the results on the knowledge, awareness and adoption of AI use and 
application among study subjects, on the matter of general knowledge of AI, 342(84.03%) 
had knowledge of AI in terms of what it does or is used for. For knowledge of the concept of AI, eight out of every ten 338(83.05%) studied had knowledge of the concept of 
AI.
Social media is the dominant initial source of exposure to AI 165(40.54%). Most 
respondents, 320(78.62%), had experience with AI-powered applications or services. On 
the types of AI applications or services used, the majority, 216(47.58%) of the participants reported using AI writing assistants and the least used AI application was reported

on healthcare applications, 40(8.81%). Most participants, 185(36.20%), who used AIpowered applications or services, used them to get answers to resolve issues. On the 
confidence level of participants in their understanding of AI, rated on a scale of 1 to 5 
(from 1-not confident to 5-extremely confident), nearly three out of every ten residents 
studied in the greater Kumasi area expressed being confident in their understanding of 
AI. several participants demonstrated being confident 110(27.03%) in their understanding of AI.

</p>

<h3>
  6.2.1 Association between demographic characteristics, knowledge of AI and source of initial 
exposure with usage of AI-powered applications
</h3>

<p>
  The study explores the association of AI knowledge-related variables and sociodemographic characteristics with the use and adoption of AI-powered applications by way 
of a chi-square test presented in Table 3. Age (χ2=17.538, p=0.001), educational level 
(χ2=105.816, p=0.000), knowledge of AI (χ2=149.987, p=0.000) and source of initial 
exposure (χ2=167.086, p=0.000) were significantly associated with the adoption of AIpowered applications.
</p>

<h3>
  6.3 Predictors of AI adoption
</h3>

<p>
  The independent predictors of the adoption of AI-powered applications were explored 
using a binary logistic regression presented in Table 4. In the unadjusted crude model, 
the age of participants is a significant predictor of the adoption of AI-powered applications. Respondents aged 21–30 [OR 2.253 (95.0% CI (1.174–4.322; p=0.015)] had significantly higher odds of adopting AI-powered applications compared to those within 
the age ranges of 10–20.. Respondents at the junior high school level [OR 7.833 (95.0% 
CI 2.141–28.658; p=0.002)], secondary education [OR 17.25 (95.0% CI 4.480-66.417; 
p=0.000)] and tertiary education [OR 79.058 (95.0% CI 21.162-295.347; p=0.000)] are 
significantly more likely to have adopted AI compared to those with no formal education. In relation to knowledge of AI, the model revealed that participants with knowledge of AI are 30.964 times more likely to adopt AI-powered applications as compared 
with those without knowledge [OR 30.964 (95.0% CI 15.611–61.414; p=0.000)]. Persons’ 
who are somewhat confident [OR 20.1 (95.0% CI: 8.296–48.694; p=0.000)], moderately confident [OR 74.444 (95.0% CI: 27.495–201.560; p=0.000)], very confident [OR 
159.311 (95.0% CI 44.443-571.065; p=0.000)] and extremely confident [OR 236.733 
(95.0% CI 30.2918-1850.094; p=0.000)] have significantly higher odds of adopting 
AI-powered applications as compared to those who are not confident in AI-powered applications. Gender did not show a significant association with the adoption of AIpowered applications.
</p>

<p>
  In the adjusted model, controlling for other variables, confidence in AI and knowledge 
significantly predicted whether a person adopts AI application platforms or not. When 
adjusted for cofounders, in the multilevel regression model, knowledge of AI remained a 
significant predictor of AI adoption [Yes (AOR 3.813 (95.0% CI 1.340–10.850; p=0.012]. 
Additionally, confidence in AI is a strong predictor of adoption of AI: participants who 
are somewhat confident [AOR 12.337 (95.0% CI 4.074–37.356; p=0.000)], moderately 
confident [AOR 41.616 (95.0% CI 12.911-134.136; p=0.000)], very confident [AOR 
64.270 (95.0% CI 15.317-269.667; p=0.000)] and extremely confident [AOR 82.843 
(95.0% CI 9.320-736.332; p=0.000)] are significantly more likely to have adopted AIpowered applications compared to those who are not confident.
</p>

<h2>
  7. Discussion
</h2>

<p>
  This study investigated the knowledge of AI use and the prediction of AI adoption in 
selected municipalities and districts within the greater Kumasi area of Ghana. In relation to knowledge of AI, in all, eight in ten of residents in the selected municipalities 
and districts know of and are aware of AI. The initial exposure to AI is mostly through 
social media and most residents (78.62%) in the greater Kumasi area adopted and used 
AI-powered applications or services. Mostly, residents in the greater Kumasi area use 
AI-powered applications or services to get answers to resolve issues and most of them were confident in their understanding of AI. Knowledge of AI and confidence in understanding AI can lead to adopting and using AI-powered applications or services. These 
findings suggest how knowledge is a powerful and driving tool in the adoption of AIpowered applications, as awareness plays a crucial role in informing and familiarising 
users with technology, AI education must be done especially for populations that have 
limited exposure to formal education channels to provide AI knowledge which may lead 
to the adoption of AI.
</p>

<p>
  Age and educational level were seen to be associated with the adoption of AI. The 
influence of age and educational level as associated with the adoption of AI technologies have been discussed in the literature. For instance, Dhraief et al. in their study 
found that demographic characteristics such as age, gender, family income and size, educational qualification and beliefs have a significant positive relation to the adoption of 
technologies. Additionally, knowledge of AI and the source of initial exposure were both 
found to be significantly associated with the adoption of AI-powered applications. This 
might be because as one grows and continues to engage in education, their educational 
level, knowledge and age increase, which explains why these factors are significant in 
adopting AI.
These findings of high knowledge and awareness of AI are consistent with earlier studies by . In their study among radiologists, Edzie et al. found a high level of 
awareness (44.2%) of AI among radiologists. Nyarko work among Ghanaian tertiary 
students also found a high level of awareness of AI (56%) and a significant degree of AI 
knowledge. A similar pattern was confirmed by Ampofo, Emery and Ofori in their 
study among medical imaging students revealed that (92.3%) of participants had a solid 
understanding of the concept of AI.
</p>

<p>
  This study is, however, unique in that it emphasises 
on how informal learning channels such as social media play a key role in AI education. 
This suggests that a focus on nontraditional platforms in AI education when exploring 
technological literacy should be considered. Notwithstanding, the findings contradict 
Adarkwah et al.  study among Ghanaian academics, where the majority Ghanaian 
academics lacked knowledge of ChatGPT. The divergence between earlier study findings and Adarkwah et al. suggests that over-reliance on formal educational systems 
to promote AI knowledge may be insufficient and informal sectors such as social media 
may provide alternative means to promoting awareness and knowledge of AI. A timelag difference can also be attributed to the differences between this study’s findings and 
Adarkwa et al. . Findings in this study directly address the gap in prior literature, 
where studies in Ghana, although limited, focused on professions including healthcare 
professionals, students and academicians. By including a broader demographic sample, 
our study expands the understanding of AI adoption in diverse digital contexts. Beyond 
academics and to the larger populace, the present study demonstrates how informal 
learning channels such as social media can be critical in AI education, contributing 
to the literature by showing how TAM’s constructs operate outside of Western or formalised digital environments and remain validated across different population groups.
</p>

<p>
  Our regression model revealed that both age and education significantly predicted AI 
adoption and use, though a person’s gender did not appear to have any effect on whether 
a person would use or adopt AI. Age might have been significant because respondents 
aged 21–30 fall into the millennial and early generation Z category, who have grown up 
in an era of rapid technological transformation, making them more accustomed to and open to integrating technology into their daily lives. Education might have been significant because as people progressed in their education level, the likelihood of AI use 
increases sharply since they must have seen its benefits and also developed the capacity 
to use it. Gender has no significant association with the adoption of AI-powered applications. Gender might not have been a predictor of AI adoption because key determinants such as age and educational level had a stronger influence on it. These factors may 
have overshadowed gender-based differences, aligning with trends indicating a narrowing gender gap in technology use as access and familiarity with technology grow. Our 
findings are consistent with previous studies that report age and education to be significant factors in the adoption of technology, with young and middle-aged individuals 
perceiving the usefulness of technology and the ease of use of technology as compared 
to older individuals. Gender was not seen as a significant factor in contributing to 
the adoption of technologies. However, this contradicts D’Souza, whose study 
revealed that the awareness and adoption of AI technologies were influenced by gender, 
with males adopting AI more than females, whilst age and professional experience did 
not influence the awareness and adoption of AI.
</p>

<p>
  In relation to knowledge of AI, the study results reveal that knowledge of AI is a significant predictor of AI adoption. Similarly, in a study which examined knowledge sharing 
key issues for digital technology and artificial intelligence adoption, results revealed that 
knowledge and AI adoption are positively correlated with digital technologies. Knowledge sharing has a favourable correlation with both privacy and security and AI adoption. Our findings rather deviate from earlier observations made by Tully, Longoni 
and Appel [23], where no knowledge of AI or lower levels of AI knowledge predicted the 
adoption of AI, since such individuals were surprised by the capabilities of AI. Further to 
this study’s findings, confidence in AI significantly predicts the adoption of AI-powered 
applications. However, previous works by Hong Chuyen and Vinh , where facilitating circumstances and trust/confidence were not predictive of behavioural intention to 
use AI-powered design tools for several reasons, emerge as contradictory findings to 
our present results. The study set out to achieve two objectives (1) to examine how 
socio-demographic factors (age, education, gender) influence the perceived usefulness of 
AI among residents in the greater Kumasi area, and (2) to assess how AI knowledge and 
confidence shape the perceived ease of use of AI among selected residents in the Greater 
Kumasi area. The findings show that education and age (21–30 years) was a significant 
predictor of perceived usefulness of AI, while AI knowledge and confidence strongly 
influenced perceived ease of use and adoption. This outcome aligns with the TAM and 
confirms that some demographic factors and psychological factors play critical roles in 
shaping AI-related behaviour.
</p>

<p>
  In our multilevel analysis, knowledge of AI remains a significant predictor of AI adoption, together with a person’s confidence in AI, consistent with the constructs of the 
Technology Acceptance Model (TAM) framework. Factors, such as education and age, 
influence the perceived usefulness and ease of use of AI technologies, and as such 
with higher levels of education or younger ages are likely to perceive AI as more beneficial, reflecting TAM’s construct of perceived usefulness. The socialisation of AI use 
is also constructed with generation preferences, such as the millennial generation, who 
are within their acceptance mid-twenties and late twenties, are comfortable with highperforming technology solutions and remain technology savvy.

</p>

<p>
  More importantly, confidence in understanding AI (reflecting perceived ease of use) 
significantly correlates with adoption, indicating that greater familiarity and comfort 
with AI technology reduces perceived barriers to its usage. This application of TAM 
highlights how socio-demographic variations impact AI adoption through personal perceptions, especially in the context of non-Western societies where technological diffusion is emerging. Our results share in similar pattern, validating the utility of TAM 
in technology uptake and innovation diffusion, particularly in the case of AI adoption for 
the Ghanaian community.
The study contributes to the larger sociology of technology field and more specifically to the application to TAM in a non-Western context, particularly among some 
selected residents in the Greater Kumasi area of Ghana. For policymakers, the results 
highlight the need for inclusive digital education policies that prevent some populations 
from being left behind in the era of AI deployment. For practitioners, this study suggests 
targeted AI programmes to build confidence and understanding of AI, particularly for 
older adults and those with limited formal education. For society, the study offers useful insights into the demographic spectrum that influences who benefits from emerging 
technologies. The use of non-traditional avenues for facilitating such technology uptake 
has proven to be useful in this study.
</p>

<h2>
  8. Conclusion
</h2>

<p>
  This study contributes to the understanding of AI knowledge and adoption by analysing the phenomenon that influences knowledge, awareness and adoption of AI-powered 
applications. The study findings demonstrate that the level of education, age, knowledge 
and confidence in AI are determinants of AI adoption, which reflects the literature on 
AI, reflecting characteristics that are consistent with technology acceptance literature. 
By applying the Technology Acceptance Model (TAM), this study illustrates how perceived ease of use and usefulness, shaped by socio-demographic factors, affect AI adoption. This study significantly contributes to the literature on AI adoption in non-Western 
settings. Particularly in sub–Saharan Africa, given the limited research in this area. The 
results offer crucial insights into AI diffusing its pathways in Ghana, which can be a 
starting point for policymakers to leverage the results of this study to develop tailored AI 
education programmes that address socio-demographic disparities and promote a more 
inclusive AI design and deployment process. Future research is required to investigate 
the influence of additional factors such as digital infrastructure and cultural issues in the 
adoption of AI in the context of developing countries.
</p>

<h3>
  8.1 Limitations and strengths
</h3>

<p>
  Our cross-sectional survey design is limited by its inability to determine causality 
between socio-demographic characteristics and AI adoption. Additionally, the study 
adopted a monomethod without methodological triangulation, which may constrain the 
depth of insight into underlying social dynamics. The use of purposive sampling and the 
study’s focus on some selected districts and municipalities in the greater Kumasi area 
may also pose selection biases, which could affect the generalisation of the results. Additionally, confidence in AI might not uniformly translate into accurate knowledge of AI 
since self-reported biases may compound social desirability bias. By focusing on sociodemographic factors in the greater Kumasi area, the study contributes and fills the gap in
AI adoption literature, particularly in non-Western settings. The study’s robust methods 
and statistical methods ensure the reliability of the study’s results.
</p>


<h3>
  Acknowledgements
</h3>

<p1>
  We are grateful to all of our respondents for providing useful information for this study. We are also grateful to all 
individuals who gave us any form of assistance during this study. God bless them all.
</p1>

<h3>Author contributions</h3>

<p1>
E.S. led the study and was primarily responsible for writing the manuscript. S.C.A. contributed to the conceptualization of 
the study and critically reviewed the manuscript at all stages. C.A. and E.A. contributed to the literature and reviewed the 
manuscript. All authors read and approved the final manuscript.
</p1>

<h3>Funding</h3>
<p1>
  The authors declare that no funds, grants, or other support were received during the preparation of this manuscript.

</p1>

<h3>
  Data availability
</h3>

<p1>
  The datasets analyzed during the current study are not publicly available due to confidentiality agreements or privacy 
concerns but are available from the corresponding author on reasonable request.
</p1>

<h2>9. Declarations</h2>
<h3>Competing interests</h3>
<p1>The authors declare no competing interests.</p1>
<p> </p>
<p> </p>
<p1>
  Received: 13 April 2026 / Accepted: 29 June 2026
</p1>

<h2>10. References</h2>

          <ol className="references">

            <li>
              Adarkwah MA, Amponsah S, van Wyk MM, Huang R, Tlili A, Shehata B, Metwally AHS Wang H (2023) ‘Awareness and acceptance of ChatGPT as a generative conversational AI for transforming education by Ghanaian academics: A two-phase 
study
            </li>


            <li>
             Amedahe FK, Asamoah-Gyimah K. Introduction to measurement and evaluation. Cape Coast: University of Cape Coast 
Press; 2016.
            </li>


            <li>
              Ampofo JW, Emery CV, Ofori IN. ‘Assessing the level of understanding (knowledge) and awareness of diagnostic imaging 
students in ghana on artificial intelligence and its applications in medical imaging.’ Radiol Res Pract. 2023. https://doi.org/
10.1155/2023/4704342.
            </li>

            <li>
              Binsaeed RH, Yousaf Z, Grigorescu A, Samoila A, Chitescu RI, Nassani AA. Knowledge sharing key issue for digital technology and artificial intelligence adoption. Systems. 2023;11(7):316. https://doi.org/10.3390/systems11070316.

            </li>
            <li>
           Compeau DR, Higgins CA. ‘Computer self-efficacy: Development of a measure and initial test.’ MIS Q. 1995. https://doi.org/
10.2307/249688. </li>

<li>
  Chau PYK. An empirical assessment of a modified technology acceptance model. J Manage Inf Syst. 1996;13(2):185–204
</li>

<li>
Choi S, Lee J, Kang MG, Min H, Chang YS, Yoon S. Large-scale machine learning of media outlets for understanding public 
reactions to nation-wide viral infection outbreaks. Methods. 2017;129:50–9.
</li>

<li>
D’Souza F (2024) ‘Awareness and Adoption of AI Technologies in the Libraries of Karnataka’. arXiv. Available at: http://arxiv.o
rg/abs/2407.18933.
</li>


<li>
  Das AS (2024) ‘KoboToolbox’, in Open electronic data capture tools for medical and biomedical research and medical allied 
professionals. Elsevier, pp. 241–329. Available at: https://www.sciencedirect.com/science/article/pii/B97804431566560000
4X.

</li>

<li>
  Davis FD, Granić A (2024) ‘The Technology Acceptance Model: 30 Years of TAM’. Cham: Springer International Publishing 
(Human–Computer Interaction Series). Available at: https://doi.org/10.1007/978-3-030-45274-2.

</li>

<li>
Dhraief MZ, Bedhiaf S, Dhehibi B, Oueslati-Zlaoui M, Jebali O, Ben-Youssef S (2019) ‘Factors affecting innovative technologies adoption by livestock holders in arid area of Tunisia’, New Medit: Mediterranean Journal of Economics, Agriculture and 
Environment= Revue Méditerranéenne d′ Economie Agriculture et Environment [Preprint], (4). Available at: https://drive.google
.com/​f​​i​le/d/1PLUF-Tw7hD8MR3RF69xz9NTVCpnnLnZz/view.
</li>

<li>
  Dube L, Mhlongo M, Ngulube P. The ethics of anonymity and confidentiality: reading from the University of South Africa 
policy on research ethics. Indilinga Afr J Indigenous Knowl Syst. 2014;13(2):201–14.

</li>

<li>
  Edzie EK, Dzefi-Tettey K, Gorleku PN, Idun EA, Osei B, Cudjoe O, et al. Application of information and communication technology in radiological practices: a cross-sectional study among radiologists in Ghana. J Glob Health Rep. 2020;4:e2020046.
</li>

<li>
Ghana Statistical Service (2021) ‘2021 Population and Housing Census’. Available at: https://census2021.statsghana.gov.gh/d
issemination_details.php?disseminatereport=MjYzOTE0MjAuMzc2NQ==&Publications#.
</li>

<li>
  Hargittai E. ‘Survey Measures of Web-Oriented Digital Literacy.’ Soc Sci Comput Rev. 2005;23(3):371–9. https://doi.org/10.11
77/0894439305275911.
</li>

          </ol>

        </div>


        {/* =========================================
            ARTICLE FOOTER
        ========================================= */}

        <div className="article-footer">

          <a
            href="https://gcu.edu.gh/"
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