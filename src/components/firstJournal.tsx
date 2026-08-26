import { useState } from "react";


function App() {


  const [showAbstract, setShowAbstract] = useState(false);


  const topLink = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500"
  };


  const secondLink = {
    color: "#002147",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600"
  };


  


  return (
    <>


      {/* =====================
          TOP HEADER
      ====================== */}


      <header
        style={{
          width:"100%",
          height:"90px",
          backgroundColor:"#002147",
          color:"white",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"0 60px",
          boxSizing:"border-box"
        }}
      >


        <div
          style={{
            display:"flex",
            alignItems:"center"
          }}
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Journal Logo"
            style={{
              width:"60px",
              height:"60px",
              borderRadius:"50%",
              background:"#fff",
              padding:"8px",
              objectFit:"contain",
              marginRight:"18px"
            }}
          />


          <div>

            <h2
              style={{
                margin:0,
                fontSize:"26px"
              }}
            >
              Research Journal
            </h2>


            <p
              style={{
                margin:"5px 0 0",
                color:"#d6d6d6"
              }}
            >
              Publishing Excellence in Research
            </p>


          </div>


        </div>





        <nav>

          <ul
            style={{
              display:"flex",
              gap:"30px",
              listStyle:"none",
              margin:0,
              padding:0
            }}
          >

            <li><a href="#" style={topLink}>Home</a></li>
            <li><a href="#" style={topLink}>About</a></li>
            <li><a href="#" style={topLink}>Editorial Board</a></li>
            <li><a href="#" style={topLink}>Policies</a></li>
            <li><a href="#" style={topLink}>Contact</a></li>

          </ul>


        </nav>


      </header>







      {/* =====================
          SECOND NAVIGATION
      ====================== */}


      <div
        style={{
          width:"100%",
          height:"55px",
          display:"flex",
          alignItems:"center",
          paddingLeft:"60px",
          background:"#fff",
          borderBottom:"1px solid #ddd"
        }}
      >

        <ul
          style={{
            display:"flex",
            gap:"40px",
            listStyle:"none",
            margin:0,
            padding:0
          }}
        >

          <li><a href="#" style={secondLink}>Current Issue</a></li>
          <li><a href="#" style={secondLink}>Archives</a></li>
          <li><a href="#" style={secondLink}>Articles</a></li>
          <li><a href="#" style={secondLink}>Submit Manuscript</a></li>
          <li><a href="#" style={secondLink}>Author Guidelines</a></li>
          <li><a href="#" style={secondLink}>Search</a></li>


        </ul>

      </div>








      {/* =====================
          ARTICLE
      ====================== */}




      <article

        style={{

          width:"calc(100% - 120px)",

          margin:"50px 60px",

          color:"#222",

        }}

      >



        <h1
          style={{
            fontSize:"36px",
            lineHeight:"1.35",
            color:"#002147",
            marginBottom:"15px"
          }}
        >

          Exploring Kidney Disease in Captive Cheetahs:
          A Case Study from Namibia and the Role of SDMA
          and Blood Biomarkers

        </h1>





        <p
          style={{
            color:"#888",
            fontSize:"16px",
            fontStyle:"italic"
          }}
        >

          —Royce D’Amelio

          <br/>

          Mentors: Andrew Conroy, Laurie Marker,
          and Anne Schmidt-Küntzel

        </p>







        {/* SHARE */}


        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"18px",
            marginTop:"25px"
          }}
        >

          <strong>
            SHARE
          </strong>

       


        </div>








        {/* ABSTRACT LINK */}


        <div

          onMouseEnter={() => setShowAbstract(true)}

          onMouseLeave={() => setShowAbstract(false)}

          style={{
            marginTop:"35px",
            position:"relative",
            display:"inline-block"
          }}

        >

          <span
            style={{
              color:"#0066cc",
              fontWeight:"600",
              textDecoration:"underline",
              cursor:"pointer"
            }}
          >
            Abstract
          </span>



          {
            showAbstract &&

            <div
              style={{
                position:"absolute",
                top:"30px",
                left:0,
                width:"550px",
                background:"#fff",
                border:"1px solid #ccc",
                padding:"20px",
                boxShadow:"0 5px 20px rgba(0,0,0,.2)",
                zIndex:10,
                lineHeight:"1.6"
              }}
            >

              Chronic kidney disease is one of the leading causes
              of death of captive cheetahs. This study examines
              SDMA and blood biomarkers as indicators of kidney
              health and disease progression.

            </div>

          }


        </div>






        <h2
          style={{
            color:"#002147",
            marginTop:"45px"
          }}
        >
          Abstract
        </h2>








        {/* FLOAT IMAGE */}

        <img

          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cheetah_Kruger.jpg/640px-Cheetah_Kruger.jpg"

          alt="Cheetah"

          style={{

            width:"200px",

            height:"300px",

            objectFit:"cover",

            float:"right",

            marginLeft:"30px",

            marginBottom:"20px",

            marginTop:"10px"

          }}

        />





        <p
          style={{
            fontSize:"18px",
            lineHeight:"1.9",
            textAlign:"justify"
          }}
        >

          Chronic kidney disease is one of the leading causes
          of death of captive cheetahs and can cause dramatic
          changes in lifespan and reproductive success
          (Mitchell et al., 2018; Terio et al., 2018).

          In normal function, the kidney provides homeostasis
          to the body through the filtering of blood. This
          process removes nitrogenous waste from the body,
          regulates electrolyte balance, and maintains overall
          health.

          Biomarkers such as SDMA provide important
          information about kidney function and allow
          researchers to detect early stages of disease.


        </p>




        <p
          style={{
            fontSize:"18px",
            lineHeight:"1.9",
            textAlign:"justify"
          }}
        >

          The findings from this case study provide insight
          into improving veterinary care and conservation
          strategies for captive cheetah populations.

          Continued research into blood biomarkers may help
          veterinarians identify kidney problems earlier and
          improve treatment outcomes for endangered species.

        </p>



        <h2
          style={{
            color:"#002147",
            marginTop:"45px"
          }}
        >
          Abstract
        </h2>








        {/* FLOAT IMAGE */}

        <img

          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cheetah_Kruger.jpg/640px-Cheetah_Kruger.jpg"

          alt="Cheetah"

          style={{

            width:"200px",

            height:"300px",

            objectFit:"cover",

            float:"right",

            marginLeft:"30px",

            marginBottom:"20px",

            marginTop:"10px"

          }}

        />





        <p
          style={{
            fontSize:"18px",
            lineHeight:"1.9",
            textAlign:"justify"
          }}
        >

          Chronic kidney disease is one of the leading causes
          of death of captive cheetahs and can cause dramatic
          changes in lifespan and reproductive success
          (Mitchell et al., 2018; Terio et al., 2018).

          In normal function, the kidney provides homeostasis
          to the body through the filtering of blood. This
          process removes nitrogenous waste from the body,
          regulates electrolyte balance, and maintains overall
          health.

          Biomarkers such as SDMA provide important
          information about kidney function and allow
          researchers to detect early stages of disease.


        </p>




        <p
          style={{
            fontSize:"18px",
            lineHeight:"1.9",
            textAlign:"justify"
          }}
        >

          The findings from this case study provide insight
          into improving veterinary care and conservation
          strategies for captive cheetah populations.

          Continued research into blood biomarkers may help
          veterinarians identify kidney problems earlier and
          improve treatment outcomes for endangered species.

        </p>


      </article>


    </>
  );
}


export default App;