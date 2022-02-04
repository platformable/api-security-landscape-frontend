import React from 'react';

const Rowstarter = ({APILifecyclePlatformsDescription
  ,APILifecyclePlatform,
  handleEntity,
  APILifecyclePlatformANDAPIManagementAPIGateway,
  APILifecyclePlatformANDAPIOrientedITConsultingFirms,
  APILifecyclePlatformANDAccessLevelandIdentityManagement,
  APILifecyclePlatformANDAPITesting,
  APILifecyclePlatformANDAPIAnalyticsMonitoring
}) => {
  return (
    <div>
      <div className="col-md-12 mb-1">
  <div className="home-main-container ">
    <div className="bg-dark-company-color">
      <span
        className="text-white"
        data-tip={APILifecyclePlatformsDescription}
        data-for="category-tooltip"
      >
        API Lifecycle <br />
        Platform (cantidad aqui))
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
              filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
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
          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            {/*  <HomepageSubcategory 
                          subcategoryName="API Design/Documentation Platforms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          /> */}
          </div>
          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {/* <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          /> */}
          </div>

          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            <HomepageSubcategory
              subcategoryName="API Testing"
              handleCompany={handleEntity}
              filteredCategory={APILifecyclePlatformANDAPITesting}
            />
          </div>
        </div>
      </div>

      <div className="landscape-container">
        <div className="landscape-category-container">
          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            {/*  <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          /> */}
          </div>

          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            {/*  <HomepageSubcategory 
                          subcategoryName="Streaming/Event Architecture"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                          /> */}
          </div>
        </div>
      </div>

      <div class="landscape-container">
        <div class="landscape-category-container">
          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            <HomepageSubcategory
              subcategoryName="API Analytics/Monitoring"
              handleCompany={handleEntity}
              filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
            />
          </div>

          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
            {data <= 0 && <Loader />}
            {/*  <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>/* ESTE DIV NO */
  );
}

export default Rowstarter;




