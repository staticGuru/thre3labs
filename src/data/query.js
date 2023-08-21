export const GET_ABOUT_PAGE =`query ABOUT_PAGE {
     pages(where: {title: "about"}) {
       edges {
         node {
           aboutSections {
             contextTitle
             contextDescription
             pageTitle
             subTitle
             fieldGroupName
             teamMembers {
               member1 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member2 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member3 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member4 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
             }
           }
         }
       }
     }
   }`;
   export const GET_HOME_PAGE=`query HOME_PAGE {
    pages(where: {name: "home"}) {
      edges {
        node {
          homeSections {
            heroSection {
              contextTitle
              contextDescription
              buttonA {
                title
                url
              }
              buttonB {
                title
                url
              }
              heroImage {
                mediaItemUrl
              }
            }
            featuresSection {
              contextTitle
              contextDescription
              featuresList {
                feature1 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature2 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature3 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature4 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature5 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature6 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
              }
            }
            logoList {
              contextTitle
              logos {
                logoName1
                logoName2
                logoName3
                logoName4
                logoName5
                logoName6
                logoName7
                logoName8
                logoName9
                logoName10
                logoName11
                logoName12
              }
            }
            ctaSection {
              contextTitle
              contextDescription
              button {
                title
                url
              }
            }
          }
        }
      }
    }
  }`
  export const GET_CONTACT_PAGE=`query CONTACT_PAGE {
    pages(where: {name: "contact"}) {
      edges {
        node {
          contactSections {
            contextTitle
            contextDescription
            contact {
              title
              address
              description
              contactEmail
              formSubmissionApiUrl
            }
          }
        }
      }
    }
  }`