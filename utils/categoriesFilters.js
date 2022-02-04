export const apiSecurityPureplay = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay")
  );

 export const  apiSecurityPureplayANDOwasp1 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 1") 
  );

  apiSecurityPureplayANDOwasp1.sort((a, b) => a.name.localeCompare(b.name))

  export const  apiSecurityPureplayANDOwasp2 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 2") 
  );

  apiSecurityPureplayANDOwasp2.sort((a, b) => a.name.localeCompare(b.name))

  export const  apiSecurityPureplayANDOwasp3 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 3") 
  );

  apiSecurityPureplayANDOwasp3.sort((a, b) => a.name.localeCompare(b.name))

  export const  apiSecurityPureplayANDOwasp4 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 4") 
  );

  apiSecurityPureplayANDOwasp4.sort((a, b) => a.name.localeCompare(b.name))


  export const  apiSecurityPureplayANDOwasp5 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 5") 
  );

  apiSecurityPureplayANDOwasp5.sort((a, b) => a.name.localeCompare(b.name))

  export const  apiSecurityPureplayANDOwasp6 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 6") 
  );

  apiSecurityPureplayANDOwasp6.sort((a, b) => a.name.localeCompare(b.name))


  export const  apiSecurityPureplayANDOwasp7 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 7") 
  );

  apiSecurityPureplayANDOwasp7.sort((a, b) => a.name.localeCompare(b.name))


  export const  apiSecurityPureplayANDOwasp8 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 8") 
  );

  apiSecurityPureplayANDOwasp8.sort((a, b) => a.name.localeCompare(b.name))


  export const  apiSecurityPureplayANDOwasp9 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 9") 
  );

  apiSecurityPureplayANDOwasp9.sort((a, b) => a.name.localeCompare(b.name))


  export const  apiSecurityPureplayANDOwasp10 =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay") &&
      company?.subcategory?.includes("OWASP 10") 
  );

  apiSecurityPureplayANDOwasp10.sort((a, b) => a.name.localeCompare(b.name))



// API security SUpport Tools


  export const apiSecuritySupportTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Pureplay")
  );

 export const  apiSecuritySupportToolsANDVulnerabilityScanners =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Security Support Tools") &&
      company?.subcategory?.includes("Vulnerability scanners") 
  );

  apiSecuritySupportToolsANDVulnerabilityScanners.sort((a, b) => a.name.localeCompare(b.name))




  //  API lifecycle platform

  export const APILifecyclePlatform = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform")
  );


  export const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Testing")
  );

  APILifecyclePlatformANDAPITesting.sort((a, b) => a.name.localeCompare(b.name))



  export const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Management/API Gateway")
  );
  APILifecyclePlatformANDAPIManagementAPIGateway.sort((a, b) => a.name.localeCompare(b.name))



   export const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("Access and Identity Management") 
  );

  APILifecyclePlatformANDAccessLevelandIdentityManagement.sort((a, b) => a.name.localeCompare(b.name))

  

  export const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Analytics/Monitoring")
  );

  APILifecyclePlatformANDAPIAnalyticsMonitoring.sort((a, b) => a.name.localeCompare(b.name))


  export const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory.includes("API Consulting") 
  );

  APILifecyclePlatformANDAPIOrientedITConsultingFirms.sort((a, b) => a.name.localeCompare(b.name))



  // API standards and protocols

  export const ApiStandardsandProtocols = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols")
  ).sort((a, b) => a.name.localeCompare(b.name))

  export const ApiStandardsandProtocolsANDAApiProtocols = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols") &&
      company?.subcategory?.includes("API Protocols")
  ).sort((a, b) => a.name.localeCompare(b.name))

  export const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards/Protocols") &&
      company?.subcategory?.includes("API Standards")
  ).sort((a, b) => a.name.localeCompare(b.name))




  //  Business processes as an API/API-as a Product
  

  
  export const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Legal/Regulatory")
  ).sort((a, b) => a.name.localeCompare(b.name))

  export const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Data governance/Data management")
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  
  export const BusinessprocessesasanAPIAPIasaProductANDData = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as a Product") &&
      company?.subcategory?.includes("Data")
  ).sort((a, b) => a.name.localeCompare(b.name))
  

  
  export const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC = data.values.filter(
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

  export const BackendBuildingTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools")
  );

export const BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("API Deployment/Back-end Building")
  ).sort((a, b) => a.name.localeCompare(b.name))