import React, { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import HomepageSubcategory from "../components/HomepageSubcategory";
import Modal from "../components/Modal";
import TopBarProgress from "react-topbar-progress-indicator";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

export default function Homepage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useContext(CompanyContext);

  const lastUpdate = new Date();

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  const categories = [
    "Adjacent security solutions",
    "API Security Pureplay",
    "API tooling to support security actions",
    "Embedded API security",

    "API Security Pureplay",
    "API Security Support Tools",
    "API Lifecycle Platform",
    "API Standards/Protocols",
    "Business processes as an API/API-as a Product",
    "Media/Associations",
    "Vertical API Abstractions",
    "Backend Building Tools",
  ];

  const subcategories = [
    "API Testing",
    "API Analytics/Monitoring",
    "Access and Identity Management",
    "API Discovery and Risk management",
    "API Threat Management",
    "Vulnerability Management",
    "Data",
    "Data governance/Data management",
    "Legal/Regulatory",
    "Login",
    "Identity verification/KYC",
    "API Consulting",
    "API Management/API Gateways",
    "Web Application Firewalls with API security capabilities",
    "Vulnerability identification/scanners",

    "OWASP 1",
    "OWASP 2",
    "OWASP 3",
    "OWASP 4",
    "OWASP 5",
    "OWASP 6",
    "OWASP 7",
    "OWASP 8",
    "OWASP 9",
    "OWASP 10",
    "Vulnerability scanners",
    "API Testing",
    "API Management/API Gateway",
    "Access and Identity Management",
    "API Analytics/Monitoring",
    "API Consulting",
    "API Standards",
    "API Protocols",
    "Identity verification/KYC",
    "Data governance/Data management",
    "Legal/Regulatory",
    "Data",
    "Media",
    "Associations",
    "Login",
    "API Deployment/Back-end Building",
  ];

  TopBarProgress.config({
    barColors: {
      0: "#000000",
      "1.0": "#000000",
    },
    shadowBlur: 5,
  });

  const handleForm = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const getMonth = (date) => {
    return lastUpdate.toLocaleString("default", {
      month: "long",
    });
  };
  const getDay = (date) => {
    return lastUpdate.toLocaleString("default", {
      day: "2-digit",
    });
  };

  const getYear = (date) => {
    return lastUpdate.toLocaleString("default", {
      year: "numeric",
    });
  };

  const AdjacentSecuritySolutions = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("Adjacent Security Solutions")
  );

  const AdjacentSecuritySolutionsANDApiTesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("Adjacent Security Solutions") &&
      company?.subcategory?.includes("API Testing")
  );
  const AdjacentSecuritySolutionsANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("Adjacent Security Solutions") &&
      company?.subcategory?.includes("API Analytics/Monitoring")
  );

  const AdjacentSecuritySolutionsANDAccess = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("Adjacent Security Solutions") &&
      company?.subcategory?.includes("Access and Identity Management")
  );

  //

  const apiSecurityPureplay = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("API Security Pureplay")
  );

  const apiSecurityPureplayANDDiscovery = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Security Pureplay") &&
        company?.subcategory?.includes("API Discovery and Risk Management")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const apiSecurityPureplayANDApiThreat = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Security Pureplay") &&
        company?.subcategory?.includes("API Threat Management")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const apiSecurityPureplayANDVulnerability = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Security Pureplay") &&
        company?.subcategory?.includes("Vulnerability Management")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  //

  const APItoolingToSupportSecurityActions = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Tooling to Support Security Actions"
      )
  );

  const APItoolingToSupportSecurityActionsANDData = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("Data")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const APItoolingToSupportSecurityActionsANDDataGovernance = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("Data Governance/Data Management")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const APItoolingToSupportSecurityActionsANDLegal = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("Legal/Regulatory")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const APItoolingToSupportSecurityActionsANDLogin = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("Login")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const APItoolingToSupportSecurityActionsANDIdentity = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("Identity Verification/KYC")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const APItoolingToSupportSecurityActionsANDApiConsulting = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Tooling to Support Security Actions"
        ) && company?.subcategory?.includes("API Consulting")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  //

  const EmbeddedAPISecurity = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("Embedded API Security")
  );

  const EmbeddedAPISecurityANDManagement = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Embedded API Security") &&
        company?.subcategory?.includes("API Management/API Gateways")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const EmbeddedAPISecurityANDWeb = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Embedded API Security") &&
        company?.subcategory?.includes(
          "Web Application Firewalls with API Security Capabilities"
        )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const EmbeddedAPISecurityANDVulnerability = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Embedded API Security") &&
        company?.subcategory?.includes("Vulnerability Identification/scanners")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /*   const isInitialMount = useRef(true); */

  /*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */

  const [selectedEntity, setSelectedEntity] = useState([]);

  const handleEntity = (entity) => {
    setSelectedEntity(entity);
  };

  const handleLinks = (url) => {
    handleLoading();
    router.push(`/${url}`);
  };

  const APILifecyclePlatformsDescription =
    "Essential tools to manage the API lifecycle: from design to testing, and including access and identity, security, analytics, and developer portals. Also includes consulting companies that assist API providers define API strategies and build APIs, and the infrastructure needed to enable event-driven architectures including IoT platforms.";
  const BackendBuildingToolsDescription =
    "Serverless, cloud, mobile-based and blockchain backend infrastructure and cloud-based API infrastructures. Also includes headless CMS and backend infrastructure built specifically for the banking/finance/insurance industry.";
  const BusinessprocessesasanAPIAPIasaProductDescription =
    "API products specifically available to be used as service components that enable business processes and functionalities to be composed into IT architectures. Includes the use of data as a service, payments, communication platforms, identity verification, and so on.";
  const integrationPlatformDescription =
    "API aggregators and automation/orchestration services that help create workflows and standardised integrations to facilitate use of APIs in internal IT architectures. Platforms that provide a single point of integration for APIs that have different value propositions.";
  const verticalApiDescription =
    "Platforms that take a value proposition from one use case, such as cloud storage, and abstracts all available APIs into one API.";

  const totalValues = data.values.filter(
    (items) =>
      items.parentCategorySlug !== "API Standards/Protocols" &&
      items.parentCategorySlug !== "Media/Associations"
  );

  /*   const [searchResult,setSearchResult]=useState(false) */

  /*   const handleSearchMessage=()=>{
    setSearchResult(true)
    setTimeout(()=>setSearchResult(false),3000)
  }

  const handleFoundCompany = (company)=>{
    setLoading(!loading)
    router.push(`/company/${company}`)
  } */

  /* const handleSearch = ()=>{

    if(company.searchInput!==""){
    
   const result =  data.values.filter((item, index) => item.name.toLowerCase()===company.searchInput);
   result.length===0 ? handleSearchMessage() :handleFoundCompany(result[0].name);
  } 
  } */

  return (
    <Layout>
      {loading && <TopBarProgress />}
      <div className="">
        <Head>
          <title>API Security Landscape</title>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta name="description" content="The API Landscape" />
          <meta property="og:url" content="https://apilandscape.apiscene.io/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="The API Landscape" />
          <meta property="og:title" content="The API Landscape" />
          <meta property="og:image" content="../landscape_social_map.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@APIdaysGlobal" />
          <meta name="twitter:title" content="apidays" />
          <meta name="twitter:description" content="apidays" />
          <meta name="twitter:image" content="../landscape_social_map.png" />
        </Head>

        <main>
          <section className="intro-text py-5">
            <div className="container hero  d-flex justify-content-center  align-items-center">
              {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
              <div className="text-center flex-grow-1">
                <h1 className="text-white text-center py-2 text-white fw-bold">
                  API Security Landscape
                </h1>
                <p className="text-center sm-text text-white">
                  Last Update: {`${getDay()} ${getMonth()} ${getYear()}`}
                </p>
                <h4 className="text-white text-center py-2 text-white">
                A comprehensive view of all API security tooling and adjacent services
                </h4>
               <button
                  className="btn bg-white me-1  mb-0 text-company-color"
                  onClick={() =>
                    handleForm("https://airtable.com/shrXHdRSTN80S8HbE")
                  }
                >
                  Add your API Tool
                </button> 
                <button
                  className="btn bg-white  me-2 text-company-color "
                  onClick={() => handleLinks("companies")}
                >
                  Search
                </button>
              {/*   <a
                  className="btn btn-dark-gray me-1 text-white"
                  href="../apilandscape.png"
                  download="apilandscape"
                >
                  Download the map
                </a> */}
                <button
                  className="btn bg-white   text-company-color "
                  onClick={() => handleLinks("zoom")}
                >
                  Zoom
                </button>
                {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
                {/* <a
                  className="btn btn-dark-gray  text-white"
                  href="https://apidays.typeform.com/to/YMTfJ3"
                  target="_blank"
                >
                  Report
                </a> */}

                
                {/*      <div className="row">
            <div className="col-md-4"> </div>
              <div className="col-md-4">
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" value={company.inputSearch} onChange={(e)=>setCompany({...company,searchInput:e.target.value})}/>
                <button class="btn btn-dark-gray text-white" type="button" id="button-addon2" onClick={()=>handleSearch(company.searchInput)}>search</button>
              </div>
               {searchResult && <div className="text-center"><span className="text-center sm-text text-white">Company not found</span></div>}
              </div>
              <div className="col-md-4"></div>              
            </div> */}
              </div>

              <div className="mt-5">
                <h3>
                  <span class="badge bg-light text-black shadow d-none d-md-block  mt-5">
                    {totalValues.length}
                  </span>{" "}
                </h3>
                <h3 className="sm-text text-center text-white md-social-share-buttons">
                  Share
                </h3>
                <LinkedinShareButton
                  url="https://apisecurity.platformable.com/"
                  title="The API Security"
                  source="https://apisecurity.platformable.com/"
                  summary="The API Security"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton> {' '}
                <TwitterShareButton
                  title="The API Security"
                  url="https://apisecurity.platformable.com/"
                  via="http://apidays.global"
                  hashtags={["api", "landscape", "security" ,"apidays"]}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                {' '}
                <EmailShareButton
                  url=""
                  title="The API Landscape"
                  subject="The API Landscape from apidays"
                  separator=" "
                  body="Get to know more about the API Landscape, visit http://apilandscape.com"
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </div>
            </div>
          </section>

          <section className="home-landscape heroBg  py-1">
            <ReactTooltip
              backgroundColor="#000000"
              textColor="#fff"
              id="companyName-tooltip"
            />
            <ReactTooltip
              backgroundColor="#000000"
              textColor="#fff"
              id="subcategory-tooltip"
            />
            <ReactTooltip
              backgroundColor="#000000"
              textColor="#fff"
              id="category-tooltip"
              place="right"
              className="categoryToolTip"
            />

            {/* MOBILE */}

            <div className="container d-block d-md-none">
              <div className="">

              <div className="col ">
                  <div class="secturity-category-title bg-apipureplay-subcategory-title">
                    <h6 class="text-center bg-apisecuritypureplay py-2  mb-1 text-black">
                      API Security Pureplay
                    </h6>
                    <h6 class="text-center sm-text py-2  my-0 ">
                      API Discovery and Risk management
                    </h6>
                    <div class="security-subcategory-container d-flex bg-apipureplay-subcategory-title-border-bottom flex-wrap justify-content-between my-0 p-1">
                      {data <= 0 && <Loader />}

                      <HomepageSubcategory
                        subcategoryName="API Discovery and Risk management"
                        handleCompany={handleEntity}
                        filteredCategory={apiSecurityPureplayANDDiscovery}
                      />
                    </div>
                    <h6 class="text-center sm-text py-2  bg-apipureplay-subcategory-title  my-0">
                      API Threat Management
                    </h6>

                    <div class="security-subcategory-container  d-flex flex-wrap justify-content-between my-1 p-1 bg-apipureplay-subcategory-title-border-bottom">
                      <HomepageSubcategory
                        subcategoryName="API Threat Management"
                        handleCompany={handleEntity}
                        filteredCategory={apiSecurityPureplayANDApiThreat}
                      />
                    </div>

                    <h6 class="text-center py-2   my-0 sm-text">
                      Vulnerability Management
                    </h6>

                    <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1 ">
                      <HomepageSubcategory
                        subcategoryName="Vulnerability Management"
                        handleCompany={handleEntity}
                        filteredCategory={apiSecurityPureplayANDVulnerability}
                      />
                    </div>
                  </div>
                </div>
                <div className="col bg-embedded-subcategory-title">
                  <h6 class="text-center bg-embeddedapisecurity py-2 text-white my-0 ">
                    Embedded API security
                  </h6>
                  <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                    API Management/API Gateways
                  </h6>
                  <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                    {data <= 0 && <Loader />}
                    <HomepageSubcategory
                      subcategoryName="API Management/API Gateway"
                      handleCompany={handleEntity}
                      filteredCategory={EmbeddedAPISecurityANDManagement}
                    />
                  </div>

                  <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                    Web Application Firewalls <br /> with API security
                    capabilities
                  </h6>
                  <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                    {data <= 0 && <Loader />}
                    <HomepageSubcategory
                      subcategoryName="Web Application Firewalls with API security capabilities"
                      handleCompany={handleEntity}
                      filteredCategory={EmbeddedAPISecurityANDWeb}
                    />
                  </div>

                  <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                    Vulnerability identification/scanners
                  </h6>
                  <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                    {data <= 0 && <Loader />}
                    <HomepageSubcategory
                      subcategoryName="Web Application Firewalls with API security capabilities"
                      handleCompany={handleEntity}
                      filteredCategory={EmbeddedAPISecurityANDVulnerability}
                    />
                  </div>
                </div>

               

                <div className="col bg-adjacent-subcategory-title">
                <h6 class="text-center bg-adjacentsecurityproviders py-2 my-0">
                          Adjacent security solutions
                        </h6>

                        <h6 class="text-center py-2 bg-adjacent-subcategory-title my-0 sm-text">
                          API Testing
                        </h6>
                        <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                          <HomepageSubcategory
                            subcategoryName="Vulnerability Management"
                            handleCompany={handleEntity}
                            filteredCategory={
                              AdjacentSecuritySolutionsANDApiTesting
                            }
                          />
                        </div>

                        <h6 class="text-center py-2 bg-adjacent-subcategory-title text-black my-0 sm-text">
                        API Analytics/Monitoring
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={
                            AdjacentSecuritySolutionsANDAPIAnalyticsMonitoring
                          }
                        />
                      </div>

                      <h6 class="text-center py-2 bg-adjacent-subcategory-title text-black my-0 sm-text">
                        Access and Identity Management
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={AdjacentSecuritySolutionsANDAccess}
                        />
                      </div>
                </div>
              </div>
            </div>

            {/* END MOBILE */}

            <div className="container-fluid d-none d-md-block">
              <div className="row">
                <div className="col-md-12">
                  <div className="grid-container-top">
                    <div className="col11"></div>
                    <div className="col22">
                      <div class="secturity-category-title d-none d-md-block">
                        <h6 class="text-center bg-apisecuritypureplay py-2  mb-1 text-black">
                          API Security Pureplay ({apiSecurityPureplay.length})
                        </h6>
                      </div>
                    </div>
                    <div className="col33"></div>
                  </div>
                  <div class="grid-container">
                    <div class="col1 bg-embedded-subcategory-title" id="">
                      <div>
                        <div class="secturity-category-title">
                          <h6 class="text-center bg-embeddedapisecurity py-2 text-white my-0 ">
                            Embedded API Security ({EmbeddedAPISecurity.length})
                          </h6>
                        </div>
                        <div class="security-col-1-main">
                          <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                            API Management/API Gateways ({EmbeddedAPISecurityANDManagement.length})
                          </h6>
                          <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Management/API Gateway"
                              handleCompany={handleEntity}
                              filteredCategory={
                                EmbeddedAPISecurityANDManagement
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col2" id="">
                      <div class="security-col2-main-container bg-apipureplay-subcategory-title">
                        <div class="security-col2-1   boder-r-col2">
                          <h6 class="text-center sm-text py-2   my-0">
                            API Discovery And Risk Management ({apiSecurityPureplayANDDiscovery.length})
                          </h6>
                          <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-0 p-1">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="API Discovery and Risk management"
                              handleCompany={handleEntity}
                              filteredCategory={apiSecurityPureplayANDDiscovery}
                            />
                          </div>
                        </div>

                        <div class="security-col2-2 boder-r-col2">
                          <h6 class="text-center sm-text py-2   my-0">
                            API Threat Management ({apiSecurityPureplayANDApiThreat.length})
                          </h6>

                          <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                            <HomepageSubcategory
                              subcategoryName="API Threat Management"
                              handleCompany={handleEntity}
                              filteredCategory={apiSecurityPureplayANDApiThreat}
                            />
                          </div>
                        </div>
                        <div class="security-col2-3 ">
                          <h6 class="text-center py-2   my-0 sm-text">
                            Vulnerability Management ({apiSecurityPureplayANDVulnerability.length})
                          </h6>

                          <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                            <HomepageSubcategory
                              subcategoryName="Vulnerability Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDVulnerability
                              }
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    <div class="col3 bg-adjacent-subcategory-title" id="">
                      <div class="secturity-category-title">
                        <h6 class="text-center bg-adjacentsecurityproviders py-2 my-0">
                          Adjacent Security Solutions ({AdjacentSecuritySolutions.length})
                        </h6>
                        <h6 class="text-center py-2 bg-adjacent-subcategory-title my-0 sm-text">
                          API Testing ({AdjacentSecuritySolutionsANDApiTesting.length})
                        </h6>
                        <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                          <HomepageSubcategory
                            subcategoryName="Vulnerability Management"
                            handleCompany={handleEntity}
                            filteredCategory={
                              AdjacentSecuritySolutionsANDApiTesting
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid-container-main-bottom my-0">
                    <div class="col5 bg-embedded-subcategory-title">
                      <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                        Web Application Firewalls <br /> With API Security
                        Capabilities ({EmbeddedAPISecurityANDWeb.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={EmbeddedAPISecurityANDWeb}
                        />
                      </div>
                    </div>
                    <div class="col6 bg-embedded-subcategory-title">
                      <h6 class="text-center py-2 bg-embedded-subcategory-title text-black my-0 sm-text">
                        Vulnerability Identification/Scanners ({EmbeddedAPISecurityANDVulnerability.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={EmbeddedAPISecurityANDVulnerability}
                        />
                      </div>
                    </div>
                    <div class="col7 bg-adjacent-subcategory-title">
                      <h6 class="text-center py-2 bg-adjacent-subcategory-title text-black my-0 sm-text">
                        API Analytics/Monitoring ({AdjacentSecuritySolutionsANDAPIAnalyticsMonitoring.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={
                            AdjacentSecuritySolutionsANDAPIAnalyticsMonitoring
                          }
                        />
                      </div>
                    </div>
                    <div class="col8 bg-adjacent-subcategory-title">
                      <h6 class="text-center py-2 bg-adjacent-subcategory-title text-black my-0 sm-text">
                        Access And Identity Management ({AdjacentSecuritySolutionsANDAccess.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Web Application Firewalls with API security capabilities"
                          handleCompany={handleEntity}
                          filteredCategory={AdjacentSecuritySolutionsANDAccess}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-md-12">
                  <h6 class="text-center py-2 bg-adjacent-subcategory-title text-white bg-black my-0 ">
                    API Tooling to Support Security Actions ({APItoolingToSupportSecurityActions.length})
                  </h6>

                  <div className="security-container-bottom">
                    <div className="security-bottom bg-api-tooling-subcat-title">
                      <h6 class="text-center py-2 bg-api-tooling-subcat-title text-black my-0 sm-text">
                        Data ({APItoolingToSupportSecurityActionsANDData.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={
                            APItoolingToSupportSecurityActionsANDData
                          }
                        />
                      </div>
                    </div>
                    <div className="security-bottom bg-api-tooling-subcat-title">
                      <h6 class="text-center py-2 bg-api-tooling-subcat-title text-black my-0 sm-text">
                        Data Governance/Data Management ({APItoolingToSupportSecurityActionsANDDataGovernance.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Data Governance"
                          handleCompany={handleEntity}
                          filteredCategory={
                            APItoolingToSupportSecurityActionsANDDataGovernance
                          }
                        />
                      </div>
                    </div>
                    <div className="security-bottom bg-api-tooling-subcat-title">
                      <h6 class="text-center py-2 bg-api-tooling-subcat-title text-black my-0 sm-text">
                        Legal ({APItoolingToSupportSecurityActionsANDLegal.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Legal"
                          handleCompany={handleEntity}
                          filteredCategory={
                            APItoolingToSupportSecurityActionsANDLegal
                          }
                        />
                      </div>
                    </div>
                    <div className="security-bottom bg-api-tooling-subcat-title">
                      <h6 class="text-center py-2 bg-api-tooling-subcat-title text-black my-0 sm-text">
                        Identity Verification/KYC ({APItoolingToSupportSecurityActionsANDIdentity.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Legal"
                          handleCompany={handleEntity}
                          filteredCategory={
                            APItoolingToSupportSecurityActionsANDIdentity
                          }
                        />
                      </div>
                    </div>
                    <div className="security-bottom bg-api-tooling-subcat-title">
                      <h6 class="text-center py-2 bg-api-tooling-subcat-title text-black my-0 sm-text">
                        API Consulting ({APItoolingToSupportSecurityActionsANDApiConsulting.length})
                      </h6>
                      <div class="security-subcategory-container d-flex flex-wrap justify-content-between my-1 p-1">
                        {data <= 0 && <Loader />}
                        <HomepageSubcategory
                          subcategoryName="Legal"
                          handleCompany={handleEntity}
                          filteredCategory={
                            APItoolingToSupportSecurityActionsANDApiConsulting
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="methodology pt-1 pb-5 ">
                <div className="container">
                    <div className="methodology-title d-flex justify-content-center align-items-center mb-5">
                        <img src="../methodology_icon.png" alt="" className=" mx-2 xd-icon" />
                   
                        <h3 className="fw-bold text-center mx-2 text-white">Methodology</h3>
                    </div>
                    <div className="row d-flex align-items-center bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 ">
                            <img src="../apisecure-logo.png" alt="" className="logo"/>
                        </div>
                        <div className="col-md-9 ">
                            
                            <p className="mt-3 text-company-color">Our dataset has been built on 3 years of apidays industry analysis and data collection. APIs are at the core of all digital ecosystems and infrastructures. APIs make it possible for businesses, governments, non-profits, researchers and media to build digital solutions at scale and in partnership with a wide variety of stakeholders. It is essential to be able to review the dynamism and breadth of the API industry, but it is challenging to find data that captures all of the work being done by various players. This API Landscape aims to capture all of the tools available that enable digital ecosystem expansion and to give insights into the dynamism and growth of APIs around the world and across all industries.</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon1.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">Industry <br />categorisations</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We have categorised API tool providers into their predominant function, however, at times, tools have been allocated to more than one category when their feature range is sufficiently diverse</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon2.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">Why isn’t my tool listed?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We aim to be comprehensive in our list of all tools. Please complete our form to <a href="https://airtable.com/shrXHdRSTN80S8HbE" className="m-0 badge bg-dark-orange text-white rounded" target="_blank">add your tool</a> to our catalogue</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon3.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3  fw-bold text-company-color">Where does the data come from?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We manually check each API tool provider at least once annually and we collect data on blog posts, positions vacant and new feature development on a quarterly basis. We also confirm data against industry leading datasets including Crunchbase, LinkedIn, Clearbit and API Evangelist.</p>
                        </div> 
                    </div> 
                    {/* row */}
                </div>
            </section>

          <section className="something-to-change py-5 bg-white border-top">
          <div className="container">
                <h3 className="text-center fw-bold my-5 text-company-color">See something you want to change?</h3>
                <div className="something-to-change-container">
                    <div className="change-box text-center px-5">
                    <div className="d-flex justify-content-center mb-2 change-img-box mt-1">
                    <img
                      src="../about-btn1.png"
                      alt=""
                      className="d-block align-self-start mb-2 xd-icon"
                    />
                  </div>
                    <button className="btn-about bg-company-color text-white mt-1" onClick={()=>handleForm("https://airtable.com/shrXHdRSTN80S8HbE")}>Add your API tool</button>
                    </div>

                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <div className="change-img-box">
                    <img
                      src="../about-btn2.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                    </div>
                    <p className="pt-1 text-company-color">Report a bug including problems with the website or with the data for a specific tool provider</p>
                    </div>
                    <div className="text-center d-flex flex-grow-1 mt-3">
                    <button className="btn-about bg-company-color text-white" onClick={()=>handleForm("https://platformable.typeform.com/to/F3QNwwnS")}>Report a bug</button>
                    </div>
                    </div>


                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <div className="change-img-box">
                  <img
                      src="../about-btn3.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                </div>
                    <p className="pt-1 text-company-color">Share a new feature idea, including any additional data points you would like to see </p>
                    </div>
                    <div className="text-center d-flex flex-grow-1 mt-3">
                    <button className="btn-about bg-company-color text-white" onClick={()=>handleForm("https://platformable.typeform.com/to/HTxJ8MDM")}>New feature idea</button>
                    </div>
                    </div>
                </div>
                </div>
          </section>
        </main>
      </div>
      <Modal selectedEntity={selectedEntity} handleLoading={handleLoading} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://apisecuritylandscapeserver-8unvz.ondigitalocean.app/` ||
      `http://localhost:5500`
  );

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
