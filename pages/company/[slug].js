import React,{useContext,useState} from "react";
import Head from 'next/head'
import Layout from "../../components/Layout";
import BarChart from "../../components/BarChart"
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";
import Unknown from "../../components/Unknown";
import { categoriesWithSubcategories, subcategories } from '../../utils/categoriesAndSubcategories';
export default function CompanyDetailsName({ data }) {
  const router = useRouter();


  
  const { slug } = router.query;



  const [company,setCompany]=useContext(CompanyContext)
  const [details,setDetails]=useState(false)
  const [overview,setOverview]=useState(true)
  const [categoriesColor,setCategoriesColor]=useState([])

  const handleSocial=(url)=>{
    if(typeof window !== "undefined"){
      window.open(
        url,
        '_blank' 
      );
    }
  }

 

  const reduceNumber=(total)=>{

    let result
    if(total.length>=7){

     result= `${total.slice(0, 1)}M`

    }

    if(total.length>=8){
      result= `$${total.slice(0, 2)}M`

     }

     if(total.length>=9){
      result= `$${total.slice(0, 3)}M`

     }
     if(total.length>=10){
      result= `$${total.slice(0, 4)}M`

     }
 
     return result
   }


   const reduceThounsand=(total)=>{
    let result=total
    if(total.length>=4){
   
     result= `$${total.slice(0, 1)}K`
   
    }

    if(total.length>=5){
      result= `$${total.slice(0, 2)}K`
     }

     if(total.length>=6){
      result= `$${total.slice(0, 3)}K`
   
     }

     if(total.length>=7){
      result= `$${total.slice(0, 2)}M`
   
     }

     if(total.length>=8){
      result= `$${total.slice(0, 2)}M`
   
     }
     return result
   }

   const handleColors=()=>{
    const arr = [
    'industries-working-1',
    'industries-working-2',
    'industries-working-3',
    'industries-working-4',
    'industries-working-5',
    'industries-working-6',
    'industries-working-7',
    'industries-working-8',
    'industries-working-9',
    'industries-working-10',
    'industries-working-11',
  ];
    const color = Math.floor(Math.random() * arr.length);
    const selectedColor = arr[color]
    return selectedColor
   }


   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }
  const selectedCompany = data.values.filter((company) => company.name === slug) || "";
console.log("selectedCompany: ",selectedCompany)
  const {
    name,
    logo,
    url,
    description,
    parentCategorySlug,
    subcategory,
    yearFounded,
    founderNames,
    headquartersCountry,
    headquartersCity,
    crunchbase,
    linkedin,
    github,
    twitter,
    developerPortal,
    estimatedRevenueRange,
    numbersOfCustomers,
    headcount,
    nonWhitePeopleInManagement,
    womanInManagement,
    numberOfPositionsVacantInPastYear,
    numberOfPositionsVacantIn2022,
    totalNumberOfNewProducFeaturesInLastYear,
    totalProductsActive,
    patentsGranted,
    acquisitions,
    activeTechCount,
    itSpend,
    acquiredBy,
    privacyBreaches,
    top5Investors,
    stage,
    totalFunding,
    lastFundingDate,
    numberLeadOfLeadInvestors,
    numberOfInvestors,
    acquisitionPrice,
    acquisitionType,
    ipoDate,
    moneyRaisedAtIpo,
    valuationAtIpo,
    industryGroups,
    knownPartnershipsNonApi,
    knownPartnershipsApi,
    apidays2018,
    apidays2019,
    apidays2020,
    apidays2021,
    logoApiIndustry,
    privacySpecificFeaturesIncluded,
    blogQ12021,
    blogQ22021,
    blogQ32021,
    blogQ42021,
    pageAboutBanking,
    pageAboutGovernment,
    pageAboutSustainability,
    pageAboutHealth,
    openSource
  } = selectedCompany[0];



  



  const newParentCategorySlug = [...new Set(parentCategorySlug.split(","))]

  const newSubCategorySlug = [...new Set(subcategory.split(","))]


  const handleScore = (wm,dm)=>{
        let score="-"
      if(wm === "Yes" && dm === "Yes"){
        score="A+"
      }

      if(wm === "Yes" && dm === "No"){
        score="A"
      }
      if(wm === "No" && dm === "Yes"){
        score="A"
      }

      if (wm === "No" && dm ==="No"){
        score="-"
      }

      return score


  }




  const handleDetails = () =>{
    setOverview(!overview)
    setDetails(!details)

  }

  return (
    <Layout>
      <Head>
          <title>security landscape - {slug} </title>
          <meta name="description" content="apidays landscape" />
        </Head>

{/* // START MOBILE */}
<section className="mobile">
        {/* <section className="mobile-profile"> */}
        <section className="mobile-profile d-xs-block d-md-none">
          <div className="container">
            <div className="row ">
              <div className="col-md-3  bg-white mobile-profile-left border-end-company-color">
                <div className="company-logo d-flex justify-content-center align-items-center">
                  <a href={url} target="_blank">
                    {logo === "" || null ? (
                      <img
                        src={`https://res.cloudinary.com/platformable/image/upload/v1648805011/apilandscape/GitHub-Logo_g5x9hs.png`}
                        alt=""
                        className=""
                        width={120}
                      />
                    ) : (
                      <img
                        srcset={`${handleImages(logo)} 2x`}
                        alt=""
                        className="img-fluid"
                      />
                    )}
                  </a>
                </div>{" "}
                {/* company logo */}
                <div className="company-name">
                  <h3 className="py-2 m-0 mb-5 fw-bold text-company-color text-center">
                    {name}
                  </h3>
                </div>{" "}
                {/* company name */}
                {/* <div className="company-url d-flex justify-content-center align-items-center">
             <a href={url} target="_blank">{url}</a>
           </div> */}{" "}
                {/* company url */}
                <div className="company-category mt-2 mb-2">
                  {newParentCategorySlug?.map((category, index) => {
                    return (
                      <span
                        className={`text-center badge my-1 text-black d-block
                  ${
                    category === "DevRegOps & Privacy Engineering Tools" &&
                    "bg-main-color1 text-white"
                  }
                  ${
                    category === "Data Lifecycle and Data Governance" &&
                    "bg-main-color2 text-white"
                  }
                  ${
                    category === "Privacy Workflow and Management" &&
                    "bg-main-color1 text-white"
                  }
                  ${
                    category === "Security for Privacy" &&
                    "bg-main-color2 text-white text-white"
                  }
                  ${
                    category === "Data intermediaries" &&
                    "bg-main-color1 text-white"
                  }
                  ${
                    category === "Consumer Facing Data Privacy Solutions" &&
                    "bg-main-color2 text-white"
                  }
                  `}
                      >
                        {category}
                      </span>
                    );
                  })}

                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>

                  {subcategory?.split(",").map((subcat, index) => {
                    return (
                      <span
                        className={`text-center badge mb-1 mt-1 text-black d-block
              ${subcat === "DevRegOps" && "bg-main-color-1-light"}
              ${
                subcat === "Privacy Engineering Tools" &&
                "bg-main-color-1-light"
              }
              ${
                subcat === "Privacy Engineering Tools" &&
                "bg-main-color-1-light"
              }

              ${subcat === "Data Vaults & Sharing" && "bg-main-color-2-light"}
              ${
                subcat === "Identity & Consent Manager" &&
                "bg-main-color-2-light"
              }
              ${
                subcat === "Data Subject Access Requests (DSARs)" &&
                "bg-main-color-2-light"
              }
              ${
                subcat === "Website and Mobile Tracker Scanning" &&
                "bg-main-color-2-light"
              }
              ${
                subcat === "Data Discovery, Classification & Mapping" &&
                "bg-main-color-2-light"
              }
              ${
                subcat === "Data Retention and Deletion" &&
                "bg-main-color-2-light"
              }

              ${
                subcat === "Privacy Information Maturity" &&
                "bg-main-color-1-light"
              }
              ${
                subcat ===
                  "Deidentification, Pseudonymization, Anonymization" &&
                "bg-main-color-1-light"
              }

              ${subcat === "Incident Response" && "bg-main-color-2-light"}
              ${subcat === "Activity Monitoring" && "bg-main-color-2-light"}
              ${subcat === "Assessment Manager" && "bg-main-color-2-light"}
              ${subcat === "Other Security Tools" && "bg-main-color-2-light"}

              ${subcat === "Data Institutions" && "bg-main-color-1-light"}
              ${
                subcat === "Centralised Consent Platforms" &&
                "bg-main-color-1-light"
              }

              ${
                subcat === "Consumer Facing Data Privacy Solutions" &&
                "bg-main-color-1-light"
              }
              `}
                      >
                        {subcat}
                      </span>
                    );
                  })}

                  <div className="open-source d-flex justify-content-center">
                    {openSource === "TRUE" ? (
                      <p className="sm-text mt-1 ml-2 open-source-text me-2 fw-bold text-center">
                        Open source
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>{" "}
                {/* company category */}
                <div className="description my-3">
                  <p className="fst-italic">{description}</p>
                </div>{" "}
                {/* company description */}
                <div className="founded">
                  <div className="founded-top">
                    <div className="founded-top-left">
                      <div className="icon">
                        <img
                          src="../../apilandscape__founded_in_40x40.png"
                          alt=""
                          className="icon"
                        />
                      </div>{" "}
                      {/* icon */}
                      <div className="foundedIn-text ml-5">
                        <p className="mt-1 ml-2">Founded in</p>
                      </div>
                      <div className="year">
                        <p className="fw-bold mx-1">{yearFounded}</p>
                      </div>
                    </div>
                    {/*  founded top left */}
                    <div className="founded-top-left">
                      <div className="icon">
                        <img
                          src="../../apilandscape__founder 40x40.png"
                          alt=""
                          className="icon"
                        />
                      </div>{" "}
                      {/* icon */}
                      <div className="foundedIn-text ml-2">
                        <p className="sm-text mt-1 ml-2">Founder(s)</p>
                      </div>
                      <div className="year ">
                        <p className="fw-bold mx-1">{founderNames}</p>
                      </div>
                    </div>
                    {/*  founded top left */}

                    <div className="founded-top-left">
                      <div className="icon">
                        <img
                          src="../../apilandscape__headquarter_40x40.png"
                          alt=""
                          className="icon"
                        />
                      </div>{" "}
                      {/* icon */}
                      <div className="foundedIn-text ml-2">
                        <p className="sm-text mt-2 ml-2">Headquarters</p>
                      </div>
                      <div className="year ">
                        <p className="fw-bold mx-1 mt-1">
                          {headquartersCity}, {headquartersCountry}
                        </p>
                      </div>
                    </div>
                    {/*  founded top left */}
                    <div className="founded-top-right"></div>
                  </div>
                </div>{" "}
                {/* company founded */}
                <div className="company-social-urls mt-2">
                  <ul class="list-group list-group-horizontal border-0">
                    {url && (
                      <li class="list-group-item border-0 ms-0 ps-0">
                        <img
                          src="../../sitio-web.png"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(url)}
                        />
                      </li>
                    )}
                    {crunchbase && (
                      <li class="list-group-item border-0 ">
                        <img
                          src="../../crunchbase-logo.png"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(crunchbase)}
                        />
                      </li>
                    )}
                    {linkedin && (
                      <li class="list-group-item border-0">
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAe7X///8Ac7EAd7MAcLDs9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbKMuNbZ6fJFk8FZncczjb5lo8qEsdGcwdt6rtBQmMTR4+8vibzE2+rt9fkWgLeQu9dincbi7/YAZ6yjx94U8i/zAAAE+0lEQVR4nO2da3uiOhRGCUQFdYJivaBCh5n//x8PtrZnrGJeA0Q3z7vafpRmNZtcd9IgIIQQQgghhBBCCCGEeMWYKK2/omeXoydMGgdv681iM8vKMDTPLk7nRPqwXaovRpNcp4OSjML1/3qfFO8mfXaxuiPMKnVNstPPLlhXxH9v+J3YB4NodIz5GaD/VGM2gEg1wahRsCaXrxjdFVQqkx6ocXOInill9xrx1iaolvGzC9kG82YVVGoh+VW0x+gJwWFqVoig2sqtRA1VoUoCqbVoppCgUjuplZjaG9JP9lKbU6ydOSHU0BhUUOUyBzZQZ/jJRqZhNIMNJ+GzC+tEuoENxzINowVsOJfZ1DxgKLS7eCBKjzINozVsOJE5qDEH2HAhs7cwJkENhfb4QbxHDWW+hnVT8w4KzmV2hzUlaDgTGqT1DBgL0ySSOgMOTA4ZvosNUnCGmEjeZ4O6xJnM7v4MsCIsdMT2jTVOC7Ht6BeWnZlkKt7w/u5achAveH+HtCoHIBjc2eUeS+4nLridqVCs9VAE60i9kW2ySIcRoV9cZgxVk1zLHYw2cZH1NbD6++acuTe4yiOEEEII6ZF6CFV/1z9iM5KaqUeHsdbmkP/+vcqztzLVOh7QOQ8ThtP1dn45Ja32k0VexnHnK5dIeHQaQlGoV+OiadWkOO4C3WlVmnJqpylJGPjolZ/OJo2LQmeWizLuTjIc236fakym0ZYE8ROXBzYifbWScJtj1tn6CWZ4+93QjbF229DoWQX5nVjmHTm2MnysDsMDvOP8wbHsZMfLm6EBNkh+suniUJIvw3RaPSyo1LyDHtKTYYzlk19RTFt3j34MYzz56ietz115MdRoykcfij4M9eNtzL8c2vUaHgxjPAPyJkm71qZ/wwfSAxtol/nZu6FBk5LusGjT9fduCJ7KuU+bV7Fvwz9tmtFv2sRp34Zha7sP1u6tTc+GiXUyiDFyH6H2XYdd4Z4cKcWwcn4TpRi6p2GLMRy7VqIYQ+W64ifH0PUYqxxD15NXcgyVYwKaIEPHcY0gQ8ejV4IMK7eRmyBD5ST4DMOkqJb7agRsCfwgd2pqPBuOJuuDiT+Ignz72APenV5Er4bHTKenLe0zJtSrR1YA3E5bezScH653BSONH5h3bGr8Ge5u75alU/yFfG3DrCnETAArXu0ov5LhnbV5+AoZtXJpTD0Zru41g+EOfIrT9MKP4d/78wJ0TdXpMicvhoXlMtQow57j1F14MbSeXwQP6zpNEX0Y2hc7wd0bp6vxfBjab+8xEXT1QfGqhkgxjsiDfr1oS4McssVuWXG6Ns6DIdKLgXeQlI8L+jCEiqWhR7kM2/o3HEHNA3ZznMtOaf+G2Fl3qBzq7SUNsaEWdr9h9pKG2DJnCo2+Xa407t8Q+7tjF6m6bLH1b4i18AYafLtMEPs3xOYDWIfosrDfu2EBLq5AiUUuu/m9G4LzAROINdyDURogs4uXNARnrdj86SUN0et7BBuCayupXEOwDuUaoqtH8a+hG2oa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSMPXMEzHKrHR+H9mkGMu6EXVcWEtR+J6m7Cx0fTBaD2zswILZezlcL223P7gZkWEDssxvH9dRgghhBBCCCGEEEIIIZ3zH2/OiDS567+RAAAAAElFTkSuQmCC"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(linkedin)}
                        />
                      </li>
                    )}
                    {twitter && (
                      <li class="list-group-item border-0">
                        <img
                          src="https://logo.clearbit.com/twitter.com"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(twitter)}
                        />
                      </li>
                    )}
                    {github && (
                      <li class="list-group-item border-0">
                        <img
                          src="https://logo.clearbit.com/github.com"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(github)}
                        />
                      </li>
                    )}
                    {developerPortal && (
                      <li class="list-group-item border-0 me-3">
                        {" "}
                        <img
                          srcset="../../apilandscape__developer_portal_50x50.png 2x"
                          alt=""
                          className="rounded"
                          onClick={() => handleSocial(developerPortal)}
                        />
                      </li>
                    )}
                  </ul>
                </div>{" "}
                {/* company-socials-url */}
                <div className="update-company px-0 mx-0">
                  <a
                    href="https://platformable.typeform.com/to/KDwe0Tbk"
                    target="_blank"
                    className="btn  bg-dark-main-color text-white mx-0"
                  >
                    Update company data
                  </a>
                  {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
                </div>
              </div>{" "}
              {/* profile left */}
              {/* RIGHT COLUMN MOBILE */}
              <div className="col-md-9 px-0 mt-2">
                <div className="container"></div>
                <div className="row">
                  <div className="col-12">
                    <div className="box-container bg-white d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text mb-3">
                        Stage (Seed, A, B, C)
                      </p>
                      <h6>
                        <span className="badge bg-lightgreen text-black">
                          {stage ? stage : "-"}
                        </span>
                      </h6>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="box-container bg-white d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text mb-3 ">
                        Last funding
                      </p>

                      {lastFundingDate ? (
                        <h6>
                          <span className="text-black fw-bold sm-text">
                            {lastFundingDate}
                          </span>
                        </h6>
                      ) : (
                        <Unknown />
                      )}
                      <img
                        src="../../apilandscape_last_funding_date__60x45.png"
                        alt=""
                        className="md-icon my-1 px-2 align-self-center"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text mb-3">
                        Total Funding
                      </p>
                      {totalFunding ? (
                        <h6>
                          <span className="fw-bold text-black">
                            {reduceNumber(totalFunding)}
                          </span>
                        </h6>
                      ) : (
                        <Unknown />
                      )}
                      <img
                        src="../../apilandscape_total_funding__60x45.png"
                        alt=""
                        className="md-icon my-1 px-2 align-self-center"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                        <p className="text-company-color m-0 px-2 sm-text">
                          Investors{" "}
                        </p>
                        <p></p>
                        {numberOfInvestors ? (
                          <h6>
                            <span className="text-black fw-bold">
                              {numberOfInvestors}
                            </span>
                          </h6>
                        ) : (
                          <Unknown />
                        )}
                        <img
                          src="../../apilandscape_investors__60x45.png"
                          alt=""
                          className="md-icon my-1 px-2 align-self-center"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                        <p className="text-company-color m-0 px-2 sm-text">
                          Investors{" "}
                        </p>
                        <p></p>
                        {numberOfInvestors ? (
                          <h6>
                            <span className="text-black fw-bold">
                              {numberOfInvestors}
                            </span>
                          </h6>
                        ) : (
                          <Unknown />
                        )}
                        <img
                          src="../../apilandscape_investors__60x45.png"
                          alt=""
                          className="md-icon my-1 px-2 align-self-center"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                        <p className="text-company-color m-0 px-2 sm-text">
                          Top 5 Investors{" "}
                        </p>

                        {top5Investors ? (
                          <h6>
                            <span className="text-black fw-bold">
                              {top5Investors}
                            </span>
                          </h6>
                        ) : (
                          <Unknown />
                        )}
                        {/*     <img
                            src="../../apilandscape_investors__60x45.png"
                            alt=""
                            className="md-icon my-1 px-2 align-self-center"
                          /> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                        <p className="text-company-color m-0 px-2 sm-text ">
                          Headcount
                        </p>
                        {headcount ? (
                          <h6 className="fw-bold my-2 px-2">{headcount}</h6>
                        ) : (
                          <Unknown />
                        )}
                        <img
                          src="../../apilandscape_headcount_80x50_companies card.png"
                          alt=""
                          className="xd-icon my-1 px-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text">
                          Diversity Score
                        </p>
                        <h6 className="fw-bold my-2 px-2">
                          {handleScore(
                            womanInManagement,
                            nonWhitePeopleInManagement
                          )}
                        </h6>
                        <img
                          src="../../apilandscape_diversity_spot_80x50.png"
                          alt=""
                          className="xd-icon my-1 px-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text">
                          Women in management?
                        </p>
                        {womanInManagement ? (
                          <h6 className="fw-bold my-2 px-2">
                            {womanInManagement}
                          </h6>
                        ) : (
                          <Unknown />
                        )}
                        <img
                          src="../../apilandscape__women_in_management_50x55.png"
                          alt=""
                          className="sd-icon my-1 px-2"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text">
                          Diverse management?
                        </p>
                        {nonWhitePeopleInManagement ? (
                          <h6 className="fw-bold my-2 px-2">
                            {nonWhitePeopleInManagement}
                          </h6>
                        ) : (
                          <Unknown />
                        )}
                        <img
                          src="../../apilandscape__diverse_management_50x55.png"
                          alt=""
                          className="sd-icon my-1 px-2"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text">
                          Number of vacancies
                        </p>

                        <div className="chart p-2">
                          {" "}
                          <BarChart
                            positionsPastYear={
                              numberOfPositionsVacantInPastYear
                            }
                            positionThisYearq1={numberOfPositionsVacantIn2022}
                          />
                          {" "}
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color m-0 px-2 sm-text">
                      Number of Customers
                    </p>

                    {numbersOfCustomers ? (
                      <h6 className="fw-bold px-2 pt-2">
                        {" "}
                        {reduceThounsand(numbersOfCustomers)}{" "}
                      </h6>
                    ) : (
                      <h6 className="fw-bold my-2 px-2"> - </h6>
                    )}
                    <img
                      src="../../apilandscape__number_of_customers_50x60.png"
                      alt=""
                      className="md-icon my-1 px-2"
                    />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <div className="known-partnership-container d-flex ">
                      <img
                        src="../../apilandscape__known_partnerships_API_45x45.png"
                        alt=""
                        className="md-icon my-1 px-2 align-self-center"
                      />
                      <p className="text-company-color m-0 px-2 sm-text">
                        Known partnerships <br />
                        (API industry)
                      </p>
                    </div>
                    <div className="known-partnership-logo d-flex flex-wrap align-items-center ">
                      {logoApiIndustry ? (
                        logoApiIndustry.split(",").map((logo, index) => {
                          return (
                            <div className="partnertship-logo">
                              <img
                                src={handleImages(logo)}
                                className="img-fluid me-1"
                              />
                            </div>
                          );
                        })
                      ) : (
                        <Unknown />
                      )}
                    </div>{" "}
                    {/* known-partnership-logo */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <div className="known-partnership-container d-flex ">
                      <img
                        src="../../apilandscape__known_partnerships_no_API_45x45.png"
                        alt=""
                        className="md-icon my-1 px-2 align-self-center"
                      />
                      <p className="text-company-color m-0 px-2 sm-text">
                        Known partnerships <br />
                        (Non-API industry)
                      </p>
                    </div>
                    <div className="known-partnership-logo  text-center flex-grow-1 ">
                      {knownPartnershipsNonApi ? (
                        knownPartnershipsNonApi
                          .split(",")
                          .map((partner, index) => {
                            return (
                              <>
                                <p className="sm-text my-2 fw-bold me-1">
                                  {partner}
                                </p>
                              </>
                            );
                          })
                      ) : (
                        <Unknown />
                      )}
                    </div>{" "}
                    {/* known-partnership-logo */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                  <section className="company-profile-right-one ">
                <div className="profile-right-side-top-top bg-white border-bottom-company-color  d-flex flex-column align-items-center px-2 ">
                  <div className="me-3 pb-2 ">
                    <p className="text-company-color sm-text">
                      Known industries <br />
                      working in
                    </p>
                    {/* <img src="../../apilandscape__known industries working in_80x50.png" alt="" className="md-icon"/> */}
                  </div>{" "}
                  {/* div */}
                  <div className="">
                    {industryGroups
                      ? industryGroups.split(",").map((industry, index) => {
                          return (
                            <>
                              <span
                                className={`badge text-black me-1 ${handleColors()}`}
                              >
                                {industry}
                              </span>
                            </>
                          );
                        })
                      : <Unknown/>}
                  </div>{" "}
                  {/* div known-industries*/}
                </div>
                {/* profile-right-side-top-top */}
              </section>{" "}  
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color sm-text m-0">
                            Banking/Finance
                          </p>
                          {pageAboutBanking ? (
                            <a href="" className="m-0 p-0 sm-text">
                              {pageAboutBanking}
                            </a>
                          ) : (
                            <Unknown />
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color sm-text m-0">
                           Health Sector
                          </p>
                          {pageAboutHealth ? (
                            <a href="" className="m-0 p-0 sm-text">
                              {pageAboutHealth}
                            </a>
                          ) : (
                            <Unknown />
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color sm-text m-0">
                          Sustainability
                          </p>
                          {pageAboutSustainability ? (
                            <a href="" className="m-0 p-0 sm-text">
                              {pageAboutSustainability}
                            </a>
                          ) : (
                            <Unknown />
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="bg-white d-flex flex-column align-items-center">
                      <div className="box-container d-flex flex-column align-items-center">
                      <p className="text-company-color sm-text m-0">
                          Government
                          </p>
                          {pageAboutGovernment ? (
                            <a href="" className="m-0 p-0 sm-text">
                              {pageAboutGovernment}
                            </a>
                          ) : (
                            <Unknown />
                          )}
                      </div>
                    </div>
                  </div>

                  

              



           

                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end MOBILE */}

        {/* MOBILE FIN AQUI */}
      </section>




      <div className="container mt-5 d-none d-md-block">
       <div className="company-profile-container bg-company-color">
         <div className="company-profile-left-column bg-white   px-5 py-1">
          
           <div className="company-logo d-flex justify-content-center align-items-center my-2">
           <a href={url} target="_blank">
           {logo === "" || null ? <img src={`https://res.cloudinary.com/platformable/image/upload/v1648805011/apilandscape/GitHub-Logo_g5x9hs.png`} alt=""  className="" width={120}/> : <img srcset={`${handleImages(logo)} 2x`} alt="" className="img-fluid" /> }
           </a>
           </div> {/* company logo */}
           <div className="company-name">
             <h3 className="p-0 m-0 mb-1 fw-bold text-company-color text-center">
             {name}
             </h3>
             </div> {/* company name */}
           {/* <div className="company-url d-flex justify-content-center align-items-center">
             <a href={url} target="_blank">{url}</a>
           </div> */} {/* company url */}
           <div className="company-category mt-2 mb-2">

            {newParentCategorySlug?.map((category,index)=>{

                  return (<span className={`text-center badge my-1 text-black sm-text  d-block 
                  ${category==="Embedded API security" && "bg-embeddedapisecurity-label  text-white"}
                  ${category==="API Security Pureplay" && "bg-apisecuritypureplay-label"}
                  ${category==="Adjacent security solutions" && "bg-adjacentsecurityproviders-label"}
                  ${category==="API tooling to support security actions" && "bg-black text-white"}
                  `}>{category}</span>)
                })}

                <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </div>



            
                {subcategory?.split(",").map((subcat,index)=>{
  
              return <span className={`text-center badge mb-1 mt-1 text-black d-block
              ${subcat==="API Management/API Gateways" && "bg-embedded-subcategory-label"}
              ${subcat==="Web Application Firewalls with API security capabilities" && "bg-embedded-subcategory-label"}
              ${subcat==="Vulnerability identification/scanners" && "bg-embedded-subcategory-label"}

              ${subcat==="API Discovery and Risk management" && "bg-apipureplay-subcategory-label"}
              ${subcat==="API Threat Management" && "bg-apipureplay-subcategory-label"}
              ${subcat==="Vulnerability management" && "bg-apipureplay-subcategory-label"}

              ${subcat==="API Testing" && "bg-adjacent-subcategory-label"}
              ${subcat==="API Analytics/Monitoring" && "bg-adjacent-subcategory-label"}
              ${subcat==="Access and Identity Management" && "bg-adjacent-subcategory-label"}

              ${subcat==="Data" && "bg-api-tooling-subcat-label"}
              ${subcat==="Data governance/Data management" && "bg-api-tooling-subcat-label"}
              ${subcat==="Legal" && "bg-api-tooling-subcat-label"}
              ${subcat==="Identity verification/KYC" && "bg-api-tooling-subcat-label"}
              ${subcat==="API Consulting" && "bg-api-tooling-subcat-label"}
              `}>{subcat}</span>
              })}

            <div className="open-source d-flex justify-content-center">

               {openSource === "TRUE" ? <p className="sm-text mt-1 ml-2 open-source-text me-2 fw-bold text-center">Open source</p>: ""}
               </div>

           </div> {/* company category */}
        
           <div className="description mb-1">
           <p className="sm-text">{description}</p>
           </div> {/* company description */}
           <div className="founded">
             <div className="founded-top">
           
               <div className="founded-top-left">
                 <div className="icon">
                    <img src="../../apilandscape__founded_in_40x40.png" alt="" className="icon" />
                 </div> {/* icon */}
                 <div className="foundedIn-text ml-5">
                   <p className="sm-text mt-1 ml-2">Founded in</p> 
                 </div>
                 <div className="year">
                  <p className="fw-bold mx-1 sm-text mt-1">{yearFounded}</p>
                 </div>
               </div>{/*  founded top left */}
               <div className="founded-top-left">
                 <div className="icon">
                    <img src="../../apilandscape__founder 40x40.png" alt="" className="icon" />
                 </div> {/* icon */}
                 <div className="foundedIn-text ml-2">
                   <p className="sm-text mt-1 ml-2">Founder(s)</p>
                 </div>
                 <div className="year ">
                  <p className="fw-bold mx-1 sm-text mt-1">{founderNames}</p>
                 </div>
               </div>{/*  founded top left */}

               <div className="founded-top-left">
                 <div className="icon">
                    <img src="../../apilandscape__headquarter_40x40.png" alt="" className="icon" />
                 </div> {/* icon */}
                 <div className="foundedIn-text ml-2">
                   <p className="sm-text mt-2 ml-2 ">Headquarters</p>
                 </div>
                 <div className="year ">
                  <p className="fw-bold mx-1 mt-2 sm-text">{headquartersCity}, {headquartersCountry}</p>
                 </div>
               </div>{/*  founded top left */}
               <div className="founded-top-right"></div>
             </div>
           </div> {/* company founded */}


           <div className="company-social-urls ">

           <ul class="list-group list-group-horizontal border-0">
            
           {url && <li class="list-group-item border-0 ms-0 ps-0"><img src="../../website_icon.png" alt=""  className="rounded" onClick={()=>handleSocial(url)}/></li>}
            {crunchbase && <li class="list-group-item border-0 "><img src="../../crunchbase-logo.png" alt=""  className="rounded" onClick={()=>handleSocial(crunchbase)}/></li>}
            {linkedin && <li class="list-group-item border-0"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAe7X///8Ac7EAd7MAcLDs9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbKMuNbZ6fJFk8FZncczjb5lo8qEsdGcwdt6rtBQmMTR4+8vibzE2+rt9fkWgLeQu9dincbi7/YAZ6yjx94U8i/zAAAE+0lEQVR4nO2da3uiOhRGCUQFdYJivaBCh5n//x8PtrZnrGJeA0Q3z7vafpRmNZtcd9IgIIQQQgghhBBCCCGEeMWYKK2/omeXoydMGgdv681iM8vKMDTPLk7nRPqwXaovRpNcp4OSjML1/3qfFO8mfXaxuiPMKnVNstPPLlhXxH9v+J3YB4NodIz5GaD/VGM2gEg1wahRsCaXrxjdFVQqkx6ocXOInill9xrx1iaolvGzC9kG82YVVGoh+VW0x+gJwWFqVoig2sqtRA1VoUoCqbVoppCgUjuplZjaG9JP9lKbU6ydOSHU0BhUUOUyBzZQZ/jJRqZhNIMNJ+GzC+tEuoENxzINowVsOJfZ1DxgKLS7eCBKjzINozVsOJE5qDEH2HAhs7cwJkENhfb4QbxHDWW+hnVT8w4KzmV2hzUlaDgTGqT1DBgL0ySSOgMOTA4ZvosNUnCGmEjeZ4O6xJnM7v4MsCIsdMT2jTVOC7Ht6BeWnZlkKt7w/u5achAveH+HtCoHIBjc2eUeS+4nLridqVCs9VAE60i9kW2ySIcRoV9cZgxVk1zLHYw2cZH1NbD6++acuTe4yiOEEEII6ZF6CFV/1z9iM5KaqUeHsdbmkP/+vcqztzLVOh7QOQ8ThtP1dn45Ja32k0VexnHnK5dIeHQaQlGoV+OiadWkOO4C3WlVmnJqpylJGPjolZ/OJo2LQmeWizLuTjIc236fakym0ZYE8ROXBzYifbWScJtj1tn6CWZ4+93QjbF229DoWQX5nVjmHTm2MnysDsMDvOP8wbHsZMfLm6EBNkh+suniUJIvw3RaPSyo1LyDHtKTYYzlk19RTFt3j34MYzz56ietz115MdRoykcfij4M9eNtzL8c2vUaHgxjPAPyJkm71qZ/wwfSAxtol/nZu6FBk5LusGjT9fduCJ7KuU+bV7Fvwz9tmtFv2sRp34Zha7sP1u6tTc+GiXUyiDFyH6H2XYdd4Z4cKcWwcn4TpRi6p2GLMRy7VqIYQ+W64ifH0PUYqxxD15NXcgyVYwKaIEPHcY0gQ8ejV4IMK7eRmyBD5ST4DMOkqJb7agRsCfwgd2pqPBuOJuuDiT+Ignz72APenV5Er4bHTKenLe0zJtSrR1YA3E5bezScH653BSONH5h3bGr8Ge5u75alU/yFfG3DrCnETAArXu0ov5LhnbV5+AoZtXJpTD0Zru41g+EOfIrT9MKP4d/78wJ0TdXpMicvhoXlMtQow57j1F14MbSeXwQP6zpNEX0Y2hc7wd0bp6vxfBjab+8xEXT1QfGqhkgxjsiDfr1oS4McssVuWXG6Ns6DIdKLgXeQlI8L+jCEiqWhR7kM2/o3HEHNA3ZznMtOaf+G2Fl3qBzq7SUNsaEWdr9h9pKG2DJnCo2+Xa407t8Q+7tjF6m6bLH1b4i18AYafLtMEPs3xOYDWIfosrDfu2EBLq5AiUUuu/m9G4LzAROINdyDURogs4uXNARnrdj86SUN0et7BBuCayupXEOwDuUaoqtH8a+hG2oa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSMPXMEzHKrHR+H9mkGMu6EXVcWEtR+J6m7Cx0fTBaD2zswILZezlcL223P7gZkWEDssxvH9dRgghhBBCCCGEEEIIIZ3zH2/OiDS567+RAAAAAElFTkSuQmCC" alt="" className="rounded" onClick={()=>handleSocial(linkedin)}/></li>}
            {twitter && <li class="list-group-item border-0"><img src="https://logo.clearbit.com/twitter.com" alt="" className="rounded" onClick={()=>handleSocial(twitter)}/></li>}
            {github && <li class="list-group-item border-0"><img src="https://logo.clearbit.com/github.com" alt=""  className="rounded"onClick={()=>handleSocial(github)}/></li>}
            {developerPortal && <li class="list-group-item border-0 me-3"> <img srcset="../../developer_icon.png 2x" alt="" className="rounded" onClick={()=>handleSocial(developerPortal)}/></li>}
          </ul>

           </div> {/* company-socials-url */}


           <div className="update-company d-flex justify-content-center pt-3">
           <a href="https://platformable.typeform.com/to/KDwe0Tbk" target="_blank" className="btn bg-company-color text-white mx-0">Update company data</a>
             {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
           </div>

         </div> {/* company profile left-column */}


         {/* RIGHT COLUMN */} {/* RIGHT COLUMN */}


     {/* NEW RIGHT COLUMN MOBILE */}


     








         {/* NEW RIGHT COLUMN MOBILE  ENDS*/}


         <div className="company-profile-right-column ml-5 ">




          {/* DETAILS */}  {/* DETAILS */} {/* DETAILS */}


          <section>



          <section className="company-profile-right-side-section5  d-flex bg-white mb-2 ">

<div className="company-profile-right-side-section5-right d-flex">

  <div className="section5-right-top d-flex">
    <div className="section5-box flex-grow-1 border-end-company-color px-2">
      <div className="box-container d-flex flex-column align-items-center">
      <p className="text-company-color m-0 px-2 sm-text mb-3">Stage (Seed, A, B, C)</p>
    <h6><span className="badge bg-lightgreen text-black">{stage? stage:"-"}</span></h6>
   
      </div>
    
    </div> {/* section5 box */}

    <div className="section5-box flex-grow-1 border-end-company-color px-2">

      <div className="box-container d-flex flex-column align-items-center">
      <p className="text-company-color m-0 px-2 sm-text mb-3">Total Funding</p>
      {totalFunding?<h6><span className="fw-bold text-black">{reduceNumber(totalFunding)}</span></h6>:<Unknown/>}
    <img src="../../apilandscape_total_funding__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
      </div>
    
    </div> {/* section5 box */}

    <div className="section5-box flex-grow-1 border-end-company-color px-2">
      <div className="box-container d-flex flex-column align-items-center">
      <p className="text-company-color m-0 px-2 sm-text mb-3 ">Last funding</p>
      
      {lastFundingDate?<h6><span className="text-black fw-bold sm-text">{lastFundingDate}</span></h6>:<Unknown/>}
    <img src="../../apilandscape_last_funding_date__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
      </div>
    
    </div> {/* section5 box */}

    <div className="section5-box flex-grow-1 border-end-company-color px-2">
      <div className="box-container d-flex flex-column align-items-center">
      <p className="text-company-color m-0 px-2 sm-text">Investors </p>
      <p></p>
      {numberOfInvestors?<h6><span className="text-black fw-bold">{numberOfInvestors}</span></h6>:<Unknown/>}
    <img src="../../apilandscape_investors__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
      </div>
    
    </div> {/* section5 box */}


     <div className="company-profile-right-side-section5-left flex-grow-1  px-2 ">

     <div className="new-product-features-top d-flex">
     <img src="../../apilandscape_top_5_investors__60x45.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
           <p className="text-company-color m-0 px-2 sm-text">Top 5 Investors</p>
           </div> {/* features-top */}

     <div className="px-2">
       
     <p className="sm-text mt-2"><Unknown/></p>

     </div>

     </div> {/* company-profile-right-side-section5-left */}


                 </div> {/* section5-right-top */}

</div> {/* company-profile-right-side-section5-right */}
</section>

          <section className="company-profile-right-side-section2 bg-white mb-2 d-flex flex-wrap">

<div className="company-profile-right-side-section2-left headcount d-flex flex-column align-items-center border-top-company-color  border-end-company-color flex-grow-1">

   <p className="text-company-color m-0 px-2 sm-text ">Headcount</p>
    {headcount?<h6 className="fw-bold my-2 px-2">{headcount}</h6>:<h6 className="fw-bold my-2 px-2"> - </h6>}
    <img src="../../apilandscape_headcount_80x50_companies card.png" alt="" className="xd-icon my-1 px-2" />

</div> {/* company-profile-right-side-section2 left */}

<div className="company-profile-right-side-section2-center diversity  d-flex border-end-company-color border-top-company-color ">
  <div className="d-flex flex-column align-items-center flex-grow-1">

  <p className="text-company-color m-0 px-2 sm-text">Diversity Score</p>
    <h6 className="fw-bold my-2 px-2">{handleScore(womanInManagement,nonWhitePeopleInManagement)}</h6>
    <img src="../../apilandscape_diversity_spot_80x50.png" alt="" className="xd-icon my-1 px-2" />

 </div>

 <div className="d-flex flex-column align-items-center flex-grow-1 ">

 <p className="text-company-color m-0 px-2 sm-text">Women in management?</p>
 {womanInManagement? <h6 className="fw-bold my-2 px-2">{womanInManagement}</h6>:<Unknown/>}
   <img src="../../apilandscape__women_in_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

 </div>


 <div className="d-flex flex-column align-items-center flex-grow-1">

 <p className="text-company-color m-0 px-2 sm-text">Diverse management?</p>
 {nonWhitePeopleInManagement? <h6 className="fw-bold my-2 px-2">{nonWhitePeopleInManagement}</h6>:<Unknown/>}
   <img src="../../apilandscape__diverse_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

 </div>

</div> {/* company-profile-right-side-section2-center */}


<div className="flex flex-column border-top-company-color ">
<div>
<p className="text-company-color m-0 px-2 sm-text">Number of vacancies</p>

<div className="chart p-2">
   <BarChart positionsPastYear={numberOfPositionsVacantInPastYear} positionThisYearq1={numberOfPositionsVacantIn2022}/>
</div> 
</div>
</div>




</section> {/* company-profile-right-side-section2 */}


<section className="company-profile-right-one bg-white mb-2">

<div className="company-profile-right-one-bottom d-flex">

<div className="number-of-customers d-flex flex-column align-items-center border-top border-end-company-color">
  <p className="text-company-color m-0 px-2 sm-text">Number of Customers</p>

  {numbersOfCustomers ?<h6 className="fw-bold px-2 pt-2"> {reduceThounsand(numbersOfCustomers)} </h6>:<h6 className="fw-bold my-2 px-2"> - </h6>}
  <img src="../../apilandscape__number_of_customers_50x60.png" alt="" className="md-icon my-1 px-2" />

</div> {/* number-of-customer */}


<div className="known-partnership border-end-company-color border-top flex-grow-1">
 <div className="known-partnership-container d-flex ">
 <img src="../../apilandscape__known_partnerships_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
 <p className="text-company-color m-0 px-2 sm-text">Known partnerships <br />(API industry)</p>
 </div>

<div className="known-partnership-logo d-flex flex-wrap align-items-center  ms-2">
  {logoApiIndustry?logoApiIndustry.split(",").map((logo,index)=>{
    return(
     <div className="partnertship-logo"><img src={handleImages(logo)} className="img-fluid me-1"/></div>
    )
  }):<Unknown/>}

      </div> {/* known-partnership-logo */}
    </div> {/* div known-partnership*/}

<div className="know-partnerships-non-api  flex-grow-1 ">

<div className="known-partnership-container d-flex ">
 <img src="../../apilandscape__known_partnerships_no_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
 <p className="text-company-color m-0 px-2 sm-text">Known partnerships <br />(Non-API industry)</p>
 </div>
<div className="known-partnership-logo  text-center flex-grow-1 ms-2">
{knownPartnershipsNonApi?knownPartnershipsNonApi.split(",").map((partner,index)=>{
    return(
    <>
     <p className="sm-text my-2 fw-bold me-1">{partner}</p>
 

     </>
    )
  }):<Unknown/>}


      </div> {/* known-partnership-logo */}

</div> {/* know-partnerships non api*/}

</div> {/* company-profile-right-one-bottom */}

</section>
      
           <section className="company-profile-right-one bg-white mb-2">

           <div className="profile-right-side-top-top  border-bottom-company-color  d-flex  px-2 ">
             
                   <div className="me-3 pb-2 ">
                   <p className="text-company-color sm-text">Known industries <br />
                 working in</p>
                     {/* <img src="../../apilandscape__known industries working in_80x50.png" alt="" className="md-icon"/> */}

                   </div> {/* div */}

                   <div className="">
                     {industryGroups? industryGroups.split(",").map((industry,index)=>{
                       return (
                         <>
                         <span className={`badge text-black me-1 ${handleColors()}`}>{industry}</span>
                         </>
                       )
                     }):"-"}
          
                   </div> {/* div known-industries*/}
                  
                </div>{/* profile-right-side-top-top */}

           </section> {/* company-profile-right-one */}




<section className="company-profile-right-one bg-white pb-5">

    <div className="company-profile-right-one-top-right">

   
      <div className="profile-right-side-top-bottom content-addressing  ">
      <p className="text-company-color sm-text ms-2">Content addressing</p>
        <div className="content-addressing-left-side px-2 pt-1 d-flex flex-wrap">
        
           <div className="content-addressing-box d-flex gap-3  my-2  flex-grow-1 ">
             <div className="content-addresing-box-icon">
               <img src="../../apilandscape__financial services_45x45.png" alt="" className="sm-icon" />
             </div>
             <div className="content-addressing-url mb-4">
               <p className="text-company-color sm-text m-0">Banking/Finance</p>
               {pageAboutBanking ?<a href="" className="m-0 p-0 sm-text">{pageAboutBanking}</a> : <Unknown/>}
            {/*    <p className="text-company-color xs-text" >-</p> */}
             </div>
           </div> {/* content addressing box */}

           <div className="content-addressing-box d-flex gap-3 align-content-start my-2  flex-grow-1 ">
             <div className="content-addresing-box-icon">
               <img src="../../apilandscape__health sector_45x45.png" alt="" className="sm-icon" />
             </div>
             <div className="content-addressing-url">
               <p className="text-company-color sm-text m-0">Health Sector</p>
               {pageAboutHealth ?<a href="" className="m-0 p-0 sm-text">{pageAboutHealth}</a> : <Unknown/>}
               {/* <p className="text-company-color xs-text" >-</p> */}
             </div>
           </div> {/* content addressing box */}

           <div className="content-addressing-box d-flex gap-3 align-content-start my-2  flex-grow-1">
             <div className="content-addresing-box-icon">
               <img src="../../apilandscape__sustainability_45x45.png" alt="" className="sm-icon" />
             </div>
             <div className="content-addressing-url mb-4">
               <p className="text-company-color sm-text m-0">Sustainability</p>
               {pageAboutSustainability ?<a href="" className="m-0 p-0 sm-text">{pageAboutSustainability}</a> : <Unknown/>}
              <p className="text-company-color xs-text" >-</p>
             </div>
           </div> {/* content addressing box */}

           <div className="content-addressing-box d-flex gap-3 align-content-start my-2  flex-grow-1 ">
             <div className="content-addresing-box-icon">
               <img src="../../apilandscape__government_45x45.png" alt="" className="sm-icon" />
             </div>
             <div className="content-addressing-url">
               <p className="text-company-color sm-text m-0">Government</p>
               {pageAboutGovernment ?<a href="" className="m-0 p-0 sm-text">{pageAboutGovernment}</a> : <Unknown/>}
               <p className="text-company-color xs-text" >-</p>
             </div>
           </div> {/* content addressing box */}

        </div> {/* content-addressing-left-side */}

  
        
     </div>{/* profile-right-side-top-bottom */}

    </div> {/* company-profile-right-one-top-right */}





</section> {/* company-profile-right-one */}

       





         </section> {/* end details */}


{/*          <div className="update-company d-flex justify-content-center bg-gray my-5">
         <a href="https://platformable.typeform.com/to/KDwe0Tbk" target="_blank" className="btn bg-company-orange-color text-white mx-0">Update company data</a>
           </div> */}

         </div> {/* company profile right column */}
       </div> {/* company-profile-container */}
      </div> {/* container */}
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://apisecuritylandscapeserver-8unvz.ondigitalocean.app/companies` ||  `http://localhost:5500/companies`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
