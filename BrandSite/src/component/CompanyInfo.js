import React from "react";
import PageHeading from "./PageHeading";
import { localization } from "./Localization";
import { sectionStyles } from "./styles";

function CompanyInfo() {
  return (
    <section className={sectionStyles.container} id="contact">
      <div className={sectionStyles.heading}>
        <PageHeading
          subTitle={localization.about.companyInfo.PageHeading.subTitle}
          title={localization.about.companyInfo.PageHeading.title}
          desc={localization.about.companyInfo.PageHeading.desc}
        />
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className={sectionStyles.description}>
                {localization.about.companyInfo.description}
              </p>
              <ul className={sectionStyles.list}>
                <li className={sectionStyles.listItem}>
                  <div className={sectionStyles.iconContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={sectionStyles.icon}
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className={sectionStyles.itemContent}>
                    <h3 className={sectionStyles.title}>
                      {localization.about.companyInfo.ourAddress}
                    </h3>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.addressLine1}
                    </p>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.addressLine2}
                    </p>
                  </div>
                </li>
                <li className={sectionStyles.listItem}>
                  <div className={sectionStyles.iconContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={sectionStyles.icon}
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className={sectionStyles.itemContent}>
                    <h3 className={sectionStyles.title}>
                      {localization.about.companyInfo.contactText}
                    </h3>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.mobile}
                    </p>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.email}
                    </p>
                  </div>
                </li>
                <li className={sectionStyles.listItem}>
                  <div className={sectionStyles.iconContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={sectionStyles.icon}
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className={sectionStyles.itemContent}>
                    <h3 className={sectionStyles.title}>
                      {localization.about.companyInfo.workingHours}
                    </h3>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.weekdays}
                    </p>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.weekends}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
