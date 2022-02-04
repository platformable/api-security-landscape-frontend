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
import Modal from '../components/Modal'
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
  const [loading,setLoading]=useState(false)
  const [company, setCompany] = useContext(CompanyContext);


  const lastUpdate = new Date


  const handleLoading = ()=>{
    setLoading(!loading)
  }

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  


const categories = [
"API Security Pureplay",
"API Security Support Tools",
"API Lifecycle Platform",
"API Standards/Protocols",
"Business processes as an API/API-as a Product",
"Media/Associations",
"Vertical API Abstractions",
"Backend Building Tools"
];

const subcategories = [
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
"0": "#fdb43e",
"1.0": "#fdb43e"
},
shadowBlur: 5
});


  const handleForm = (url)=>{

    if(typeof window !== "undefined"){
      window.open(
        url,
        '_blank' 
      );
    }
    
  }

  const getMonth = date => {
    return lastUpdate.toLocaleString("default", {
      month: "long",
    })
  }
  const getDay = date => {
    return lastUpdate.toLocaleString("default", {
      day: "2-digit",
    })
  }

  const getYear = date => {
    return lastUpdate.toLocaleString("default", {
      year: "numeric",
    })
  }

   const apiSecurityPureplay = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay")
  );

  const  apiSecurityPureplayANDOwasp1 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 1") 
  );

  apiSecurityPureplayANDOwasp1.sort((a, b) => a.name.localeCompare(b.name))

   const  apiSecurityPureplayANDOwasp2 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 2") 
  );

  apiSecurityPureplayANDOwasp2.sort((a, b) => a.name.localeCompare(b.name))

   const  apiSecurityPureplayANDOwasp3 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 3") 
  );

  apiSecurityPureplayANDOwasp3.sort((a, b) => a.name.localeCompare(b.name))

   const  apiSecurityPureplayANDOwasp4 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 4") 
  );

  apiSecurityPureplayANDOwasp4.sort((a, b) => a.name.localeCompare(b.name))


   const  apiSecurityPureplayANDOwasp5 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 5") 
  );

  apiSecurityPureplayANDOwasp5.sort((a, b) => a.name.localeCompare(b.name))

   const  apiSecurityPureplayANDOwasp6 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 6") 
  );

  apiSecurityPureplayANDOwasp6.sort((a, b) => a.name.localeCompare(b.name))


   const  apiSecurityPureplayANDOwasp7 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 7") 
  );

  apiSecurityPureplayANDOwasp7.sort((a, b) => a.name.localeCompare(b.name))


   const  apiSecurityPureplayANDOwasp8 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 8") 
  );

  apiSecurityPureplayANDOwasp8.sort((a, b) => a.name.localeCompare(b.name))


   const  apiSecurityPureplayANDOwasp9 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 9") 
  );

  apiSecurityPureplayANDOwasp9.sort((a, b) => a.name.localeCompare(b.name))


   const  apiSecurityPureplayANDOwasp10 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 10") 
  );

  apiSecurityPureplayANDOwasp10.sort((a, b) => a.name.localeCompare(b.name))



// API security SUpport Tools


   const apiSecuritySupportTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay")
  );

  const  apiSecuritySupportToolsANDVulnerabilityScanners =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Support Tools") &&
      company?.subcategory?.includes("Vulnerability scanners") 
  );

  apiSecuritySupportToolsANDVulnerabilityScanners.sort((a, b) => a.name.localeCompare(b.name))




  //  API lifecycle platform

   const APILifecyclePlatform = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform")
  );


   const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Testing")
  );

  APILifecyclePlatformANDAPITesting.sort((a, b) => a.name.localeCompare(b.name))



   const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Management/API Gateway")
  );
  APILifecyclePlatformANDAPIManagementAPIGateway.sort((a, b) => a.name.localeCompare(b.name))



    const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("Access and Identity Management") 
  );

  APILifecyclePlatformANDAccessLevelandIdentityManagement.sort((a, b) => a.name.localeCompare(b.name))

  

   const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Analytics/Monitoring")
  );

  APILifecyclePlatformANDAPIAnalyticsMonitoring.sort((a, b) => a.name.localeCompare(b.name))


   const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory.includes("API Consulting") 
  );

  APILifecyclePlatformANDAPIOrientedITConsultingFirms.sort((a, b) => a.name.localeCompare(b.name))



  // API standards and protocols

   const ApiStandardsandProtocols = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols")
  ).sort((a, b) => a.name.localeCompare(b.name))

   const ApiStandardsandProtocolsANDAApiProtocols = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols") &&
      company?.subcategory?.includes("API Protocols")
  ).sort((a, b) => a.name.localeCompare(b.name))

   const ApiStandardsandProtocolsANDApiStandards = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols") &&
      company?.subcategory?.includes("API Standards")
  ).sort((a, b) => a.name.localeCompare(b.name))




  //  Business processes as an API/API-as a Product
  

  const BusinessprocessesasanAPI = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform")
  );
  
   const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Legal/Regulatory")
  ).sort((a, b) => a.name.localeCompare(b.name))

   const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Data governance/Data management")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  
   const BusinessprocessesasanAPIAPIasaProductANDData = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Data")
  ).sort((a, b) => a.name.localeCompare(b.name))
  

  
   const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Identity verification/KYC")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  

  // MEDIA ASSOCIATIONS

const MediaAssociations = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Media/Associations")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  const MediaAssociationsANDMedia = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Media/Associations") &&
      company?.subcategory?.includes("Media")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  const MediaAssociationsANDAssociations = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Media/Associations") &&
      company?.subcategory?.includes("Associations")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  // VerticalAPIAbstractions

  const VerticalAPIAbstractions = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Vertical API Abstractions")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  const VerticalAPIAbstractionsANDCloudStorage = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Vertical API Abstractions") &&
      company?.subcategory?.includes("Cloud Storage")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Vertical API Abstractions") &&
      company?.subcategory?.includes("Delivery/Transport/Logistics") 
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  const VerticalAPIAbstractionsANDLogin = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Vertical API Abstractions") &&
      company?.subcategory?.includes("Login") 
  ).sort((a, b) => a.name.localeCompare(b.name))


  // Backend Building Tools

   const BackendBuildingTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools")
  );

 const BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("API Deployment/Back-end Building")
  ).sort((a, b) => a.name.localeCompare(b.name))




/*   const isInitialMount = useRef(true); */

/*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */

  const [selectedEntity,setSelectedEntity]=useState([])

  const handleEntity = (entity)=>{
    setSelectedEntity(entity)
  }

  const handleLinks = (url) => {
    handleLoading()
    router.push(`/${url}`);
  };


const APILifecyclePlatformsDescription = "Essential tools to manage the API lifecycle: from design to testing, and including access and identity, security, analytics, and developer portals. Also includes consulting companies that assist API providers define API strategies and build APIs, and the infrastructure needed to enable event-driven architectures including IoT platforms."
const BackendBuildingToolsDescription="Serverless, cloud, mobile-based and blockchain backend infrastructure and cloud-based API infrastructures. Also includes headless CMS and backend infrastructure built specifically for the banking/finance/insurance industry."
const BusinessprocessesasanAPIAPIasaProductDescription="API products specifically available to be used as service components that enable business processes and functionalities to be composed into IT architectures. Includes the use of data as a service, payments, communication platforms, identity verification, and so on."
const integrationPlatformDescription="API aggregators and automation/orchestration services that help create workflows and standardised integrations to facilitate use of APIs in internal IT architectures. Platforms that provide a single point of integration for APIs that have different value propositions."
const verticalApiDescription ="Platforms that take a value proposition from one use case, such as cloud storage, and abstracts all available APIs into one API."
  

  
  const totalValues = data.values.filter(items=>items.parentCategorySlug !=="API Standards/Protocols" && items.parentCategorySlug !=="Media/Associations")
 
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
          <title>The API Landscape</title>
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
          <section className="intro-text py-3">
            <div className="container hero  d-flex justify-content-center  align-items-center">
              {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
              <div className="text-center flex-grow-1">
                <h1 className="text-white text-center py-2 text-white fw-bold">
                  The API Landscape
                </h1>
                <p className="text-center sm-text text-white">
                  Last Update: {`${getDay()} ${getMonth()} ${getYear()}`}
                </p>
                <h4 className="text-white text-center py-2 text-white">
                  A comprehensive view of all stakeholders creating the
                  programmable economy
                </h4>
                <button
                  className="btn btn-dark-gray me-1 text-white mb-1"
                  onClick={() =>
                    handleForm("https://airtable.com/shr07pWSbRnQfnZZd")
                  }
                >
                  Add your API Tool
                </button>
                <button
                  className="btn btn-light-gray  m-0 text-company-color mb-1"
                  onClick={() => handleLinks("companies")}
                >
                  Search
                </button>
                <a
                  className="btn btn-dark-gray me-1 text-white"
                  href="../apilandscape.png"
                  download="apilandscape"
                >
                  Download the map
                </a>
                <button
                  className="btn btn-light-gray   text-company-color "
                  onClick={() => handleLinks("zoom")}
                >
                  Zoom
                </button>
                {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
                <a
                  className="btn btn-dark-gray  text-white"
                  href="https://apidays.typeform.com/to/YMTfJ3"
                  target="_blank"
                >
                  Report
                </a>
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
                  url="https://apilandscape.platformable.com/"
                  title="The API Landscape"
                  source="https://apilandscape.platformable.com/"
                  summary="The API Landscape"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton
                  title="The API Landscape"
                  url="https://apilandscape.platformable.com"
                  via="http://apidays.global"
                  hashtags={["api", "landscape"]}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
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

          <section className="home-landscape heroBg d-none d-md-block py-1">
            <ReactTooltip
              backgroundColor="#04a5b6"
              textColor="#fff"
              id="companyName-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="subcategory-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="category-tooltip"
              place="right"
              className="categoryToolTip"
            />




{/* <section id="mobile">

<section className="mobile-landscape d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2" data-tip={APILifecyclePlatformsDescription} data-for="category-tooltip">API Lifecycle Platform ({APILifecyclePlatform.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Access and Identity Management"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                handleLoading={handleLoading}
                />
        </div>
        <div className="subcat border-top">
        
                 <HomepageSubcategory 
                subcategoryName="API Management/API Gateway"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Consulting"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Analytics/Monitoring"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Design/Documentation Platforms"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Developer Portals"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Security"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDApiSecurity}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Testing"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPITesting}
                />
        </div>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="IoT Platforms/Networks/Devices"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Streaming/Event Architecture"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Backend Building Tools ({BackendBuildingTools.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Headless CMS"
                handleCompany={handleEntity}
                filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Infrastructure/Cloud/Serverless APIs"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Mobile Backend as a Service"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Deployment/Back-end Building"
                handleCompany={handleEntity}
                filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Banking/Finance/Insurance Backends"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Blockchain"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDBlockchain}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape my-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Data"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Data governance/Data management"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Payments"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Email/Messaging/Communications Platforms as a Service"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Accounting"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="AI/ML"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="E-commerce"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Identity verification/KYC"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                />
        </div>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Audio/Visual"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Forms"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Human-as-a-service"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Legal/Regulatory"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Search"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Time/Calendar"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                />
        </div>

      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length}) </h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="API Aggregators (Finance)"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Aggregators (General)"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Automation/Orchestration"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Database-as-a-service"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Vertical API Abstractions ({VerticalAPIAbstractions.length}) </h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Cloud Storage"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Delivery/Transport/Logistics"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Finance"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDFinance}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Healthcare"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Login"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDLogin}
                />
        </div>
        <div className="subcat border-top">
      
                   <HomepageSubcategory 
                subcategoryName="Marketing/Analytics"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Smart Home/Facilities"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


</section> */}
{/* END MOBILE */}







            <div className="container-fluid">
              <div className="row">

              <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={APILifecyclePlatformsDescription}
                        data-for="category-tooltip"
                      >
                        API Security Pureplay ({apiSecurityPureplay.length})
                      </span>
                    </div>
                    <div class="category-container">
                      <div class="landscape-container">
                        <div class="landscape-category-container">

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 1"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp1
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 2"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp2
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 3"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp3
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 4"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp4
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 5"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp5
                              }
                            />
                          </div>
                        </div>
                      </div>

       
                      <div class="landscape-container">
                        <div class="landscape-category-container">

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 6"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp6
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 7"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp7
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 8"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp8
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 9"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp9
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="OWASP 10"
                              handleCompany={handleEntity}
                              filteredCategory={
                                apiSecurityPureplayANDOwasp10
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        

                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={APILifecyclePlatformsDescription}
                        data-for="category-tooltip"
                      >
                        API Lifecycle <br />
                        Platform ({APILifecyclePlatform.length})
                      </span>
                    </div>
                    <div class="category-container">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="API Management/API Gateway"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIManagementAPIGateway
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Consulting"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIOrientedITConsultingFirms
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Access and Identity Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAccessLevelandIdentityManagement
                              }
                              handleLoading={handleLoading}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Testing"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPITesting
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Analytics/Monitoring"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIAnalyticsMonitoring
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
         


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">Media/<br/>Associations ({MediaAssociations.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Media"
                          handleCompany={handleEntity}
                          filteredCategory={ MediaAssociationsANDMedia}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Associations"
                          handleCompany={handleEntity}
                          filteredCategory={MediaAssociationsANDAssociations}
                          />
                          </div>
                    
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> 


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">API Security  <br /> Support Tools ({apiSecuritySupportTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Vulnerability scanners"
                          handleCompany={handleEntity}
                          filteredCategory={ apiSecuritySupportToolsANDVulnerabilityScanners}
                          />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> 


 
                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">API Standards/<br/>Protocols ({ApiStandardsandProtocols.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-ApiStandardsandProtocols">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Protocols"
                          handleCompany={handleEntity}
                          filteredCategory={ ApiStandardsandProtocolsANDAApiProtocols}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-ApiStandardsandProtocols">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Standards"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDApiStandards}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">Business processes as an <br />  API/API-as a Product ({BusinessprocessesasanAPI.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Identity verification/KYC"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data governance/Data management"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Legal/Regulatory"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 



                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">Vertical API <br />Abstractions ({apiSecuritySupportTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleEntity}
                          filteredCategory={ VerticalAPIAbstractionsANDLogin}
                          />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> 

                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">Backend  Building<br /> Tools ({BackendBuildingTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> 


                {/* <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="bg-dark-company-color">
                      <span className="text-white" data-tip={BackendBuildingToolsDescription} data-for="category-tooltip">Backend Building <br /> Tools ({BackendBuildingTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Banking/Finance/Insurance Backends"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                          />
                          </div>
                         
 
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                          />
                          </div>

                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Blockchain"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDBlockchain}
                          />
                          </div>
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Mobile Backend as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
                          />
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>  */}
                {/* <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="bg-dark-company-color"> 
                      <span className="cat-name text-white" data-tip={BusinessprocessesasanAPIAPIasaProductDescription} data-for="category-tooltip">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</span>
                    </div>
                    <div class="category-container ">
                      

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                 

                          
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Payments"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                          />
                          </div>
                         
                       
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Email/Messaging/Communications Platforms as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI/ML"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-commerce"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                          />
                          </div>
                         
                         
                         
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Accounting"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Audio/Visual"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data governance/Data management"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                          </div>

                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Identity verification/KYC"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                 
                      
                     
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Forms"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanresources}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Legal/Regulatory"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                        
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Time/Calendar"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                          />
                          </div>
                         
                        </div>
                      </div> 
                     
                    </div>
                  </div>
                </div>  */}
                {/* <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="bg-dark-company-color">
                      <span className="text-white" data-tip={integrationPlatformDescription} data-for="category-tooltip">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length})</span>
                    </div>
                    <div class="category-container ">
                    <div className="landscape-container">
                      <div className="landscape-category-container">
                      <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (Finance)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                      </div>

                    </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (General)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                          />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> */}{" "}
                {/* col-md-12 */}
                {/* <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="bg-dark-company-color">
                      <span className="text-white" data-tip={verticalApiDescription} data-for="category-tooltip">Vertical API <br /> Abstractions ({VerticalAPIAbstractions.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Finance"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDLogin}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Marketing/Analytics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                          </div>
                  
                        </div>
                      </div>
 
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Cloud Storage"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Delivery/Transport/Logistics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Smart Home/Facilities"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                          />
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  */}
                {/* col-md-12 */}
                
                
        
              </div>
            </div>
          </section>

          <section className="methodology py-5 bg-white">
            <div className="container">
              <div className="methodology-title d-flex justify-content-center align-items-center my-5">
                <img
                  src="../methodology_icon.png"
                  alt=""
                  className=" mx-2 xd-icon"
                />

                <h3 className="fw-bold text-center mx-2 text-company-color">
                  Methodology
                </h3>
              </div>
              <div className="row d-flex align-items-center bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 ">
                  <img src="../logo_dark.png" alt="" />
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    Our dataset has been built on 3 years of apidays industry
                    analysis and data collection. APIs are at the core of all
                    digital ecosystems and infrastructures. APIs make it
                    possible for businesses, governments, non-profits,
                    researchers and media to build digital solutions at scale
                    and in partnership with a wide variety of stakeholders. It
                    is essential to be able to review the dynamism and breadth
                    of the API industry, but it is challenging to find data that
                    captures all of the work being done by various players. This
                    API Landscape aims to capture all of the tools available
                    that enable digital ecosystem expansion and to give insights
                    into the dynamism and growth of APIs around the world and
                    across all industries.
                  </p>
                </div>
              </div>
              {/* row */}

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon1.png" alt="" className="xd-icon" />
                  <h5 className="ms-3 fw-bold text-company-color">
                    Industry <br />
                    categorisations
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We have categorised API tool providers into their
                    predominant function, however, at times, tools have been
                    allocated to more than one category when their feature range
                    is sufficiently diverse
                  </p>
                </div>
              </div>
              {/* row */}

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon2.png" alt="" className="xd-icon" />
                  <h5 className="ms-3 fw-bold text-company-color">
                    Why isn’t my tool listed?
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We aim to be comprehensive in our list of all tools. Please
                    complete our form to{" "}
                    <a
                      href="https://airtable.com/shr07pWSbRnQfnZZd"
                      className="m-0 badge bg-dark-orange text-white rounded"
                      target="_blank"
                    >
                      add your tool
                    </a>{" "}
                    to our catalogue
                  </p>
                </div>
              </div>
              {/* row */}

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon3.png" alt="" className="xd-icon" />
                  <h5 className="ms-3  fw-bold text-company-color">
                    Where does the data come from?
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We manually check each API tool provider at least once
                    annually and we collect data on blog posts, positions vacant
                    and new feature development on a quarterly basis. We also
                    confirm data against industry leading datasets including
                    Crunchbase, LinkedIn, Clearbit and API Evangelist.
                  </p>
                </div>
              </div>
              {/* row */}
            </div>
          </section>

          <section className="something-to-change py-5 bg-white border-top">
            <div className="container">
              <h3 className="text-center fw-bold my-5 text-company-color">
                See something you want to change?
              </h3>
              <div className="something-to-change-container">
                <div className="change-box text-center px-5">
                  <div className="d-flex justify-content-center mb-2">
                    <img
                      src="../about-btn1.png"
                      alt=""
                      className="d-block align-self-start mb-2 xd-icon"
                    />
                  </div>
                  <button
                    className="btn-about bg-dark-orange text-white mt-3"
                    onClick={() =>
                      handleForm("https://airtable.com/shr07pWSbRnQfnZZd")
                    }
                  >
                    Add your API tool
                  </button>
                </div>

                <div className="change-box  px-5">
                  <div className="d-flex">
                    <img
                      src="../about-btn2.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                    <p className="pt-1 text-company-color">
                      Report a bug including problems with the website or with
                      the data for a specific tool provider
                    </p>
                  </div>
                  <div className="text-center d-flex flex-grow-1">
                    <button
                      className="btn-about bg-dark-orange text-white"
                      onClick={() =>
                        handleForm(
                          "https://platformable.typeform.com/to/iqJrv9LJ"
                        )
                      }
                    >
                      Report a bug
                    </button>
                  </div>
                </div>

                <div className="change-box  px-5">
                  <div className="d-flex">
                    <img
                      src="../about-btn3.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                    <p className="pt-1 text-company-color">
                      Share a new feature idea, including any additional data
                      points you would like to see{" "}
                    </p>
                  </div>
                  <div className="text-center d-flex flex-grow-1">
                    <button
                      className="btn-about bg-dark-orange text-white mt-2"
                      onClick={() =>
                        handleForm(
                          "https://platformable.typeform.com/to/hSprzih3"
                        )
                      }
                    >
                      New feature idea
                    </button>
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

  const res = await fetch(`https://apisecuritylandscapeserver-8unvz.ondigitalocean.app/` ||  `http://localhost:5500`);

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
