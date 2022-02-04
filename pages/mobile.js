{/* MOBILE */}

<section id="mobile">

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
{/* mobile section */}

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
{/* mobile section */}

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
{/* mobile section */}

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
{/* mobile section */}

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
{/* mobile section */}

 {/*  DO NOT DELETE API STANDARDS */}
{/*  <section className="mobile-landscape mt-3  d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center ApiStandardsandProtocolsBg text-white py-2">API Standards <br/>  and Protocols({ApiStandardsandProtocols.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="API Protocols"
                handleCompany={handleEntity}
                filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Standards"
                handleCompany={handleEntity}
                filteredCategory={ApiStandardsandProtocolsANDFIDO}
                />
        </div>
      </div>
    </div>
  </div>
</section>  */}

{/*  DO NOT DELETE MEDIA ASSOCIATIONS */}
{/*  <section className="mobile-landscape mt-3  d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center ApiStandardsandProtocolsBg text-white py-2">Media/Associations ({ApiStandardsandProtocols.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Media"
                handleCompany={handleEntity}
                filteredCategory={ MediaAssociationsANDMedia}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Associations"
                handleCompany={handleEntity}
                filteredCategory={MediaAssociationsANDAssociations}
                />
        </div>
      </div>
    </div>
  </div>
</section>  */}
{/* mobile section */}

</section>
{/* END MOBILE */}