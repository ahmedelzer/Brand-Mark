import React, { useState, createContext } from "react";
import { json } from "react-router-dom";

//context
export const LanguageContext = createContext();

const Language = ({ children }) => {
  const [Lan, setLan] = useState(window.localStorage.getItem("language"));
  const [Right, setRight] = useState(
    window.localStorage.getItem("right") === "true" || false
  );

  const [localization, setLocalization] = useState({
    shortName: "ENG_US",
    appInfo: {
      title: "Branding Mart",
    },
    fileContainer: {
      pagination: {
        buttonPrevious: "Previous",
        buttonNext: "Next",
        page: "Page",
        of: "of",
      },
      textButtonUploadValue: "upload",
      videoNotSupport: "Your browser does not support the video tag.",
      fileNotSupport: "Unsupported file type",
    },

    browser: {
      modal: {
        header: "Fetch Image from URL",
        button: {
          fetch: "Fetch Image",
          cancel: "Cancel",
        },
      },
      input: {
        placeholder: "Enter image URL",
      },
      error: {
        invalidUrl: "Invalid URL format",
        fetchError: "Error fetching image",
        notImage: "URL does not point to an image",
        fetchFailed: "Failed to fetch image: {status}",
      },
    },
    webcam: {
      modal: {
        header: "Capture Image",
        button: {
          capture: "Capture Image",
          cancel: "Cancel",
        },
      },
    },

    inputs: {
      boolean: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      image: {
        imageAltValue: "uploaded",
        UrlPlaceholder: "Enter image URL",
        defaultImage:
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
      },
      base: { placeholder: "Enter " },
    },

    waringPop: {
      deleteConfirmation: "Are you sure you want to delete this item?",
      yes: "Yes, I'm sure",
      no: "No, cancel",
    },
    messages: {},
    dateTime: {
      dxDateBox: {
        months: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ],
        days: [
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "الجمعة",
          "السبت",
        ],
        am: "ص",
        pm: "م",
      },
      applyButtonText: "تاكيد",
      cancelButtonText: "الغاء",
      todayButtonText: "اليوم",
    },
    header: {
      buttonText: "sign",
      buttonUrl: "#",
    },
    footer: {
      categories: "Categories",
      socialMedia: "Social Media",
      address: "Address",
      phoneNumber: "Phone Number",
      copyRight: "©pagedone 2024, All rights reserved.",
    },
    loading: {
      loading: "Loading...",
    },
    landing: {
      content: {
        title: "Hello World!",
        shortDescription: "We Are Kasper We Make Art.",
        longDescription:
          "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
      },
    },
    about: {
      companyInfo: {
        PageHeading: {
          title: "about company",
          subTitle: "Get in Touch",
          desc: "In hac habitasse platea dictumst",
        },
        ourAddress: "Our Address",
        contactText: "Contact",
        addressLine1: "1230 Maecenas Street Donec Road",
        addressLine2: "New York, EEUU",
        mobile: "Mobile: +1 (123) 456-7890",
        email: "Mail: tailnext@gmail.com",
        workingHours: "Working hours",
        weekdays: "Monday - Friday: 08:00 - 17:00",
        weekends: "Saturday & Sunday: 08:00 - 12:00",
        description:
          "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut",
      },
      staff: {
        meetThe: "Meet the",
        team: "team",
        avatarAlt: "Avatar",
        name: {
          martaSmith: "Marta Smith",
        },
        position: {
          frontendDeveloper: "Frontend Developer",
        },
      },
    },
    contact: {
      companyInfo: {
        PageHeading: {
          subTitle: "Contact Us",
          title: "We'd Love to Hear From You",
          desc: "Reach out to us for any inquiries or feedback.",
        },
      },
      support: {
        title: "Technical support",
        email: "support@example.com",
        phone: "+1 234-567-89",
      },
      sales: {
        title: "Sales questions",
        email: "sales@example.com",
        phone: "+1 234-567-89",
      },
      press: {
        title: "Press",
        email: "press@example.com",
        phone: "+1 234-567-89",
      },
      bugReport: {
        title: "Bug report",
        email: "bugs@example.com",
        phone: "+1 234-567-89",
      },
    },
    services: {
      PageHeading: {
        title: "Our Services",
        subTitle: "What We Offer",
        desc: "In hac habitasse platea dictumst",
      },
    },
    portfolio: {
      PageHeading: {
        title: "Our Services",
        subTitle: "What We Offer",
        desc: "In hac habitasse platea dictumst",
      },
      headerOfWorking: "Latest Products",
    },

    notFound: {
      error: "Error",
      codeError: "404",
      message: "Sorry, we couldn't find this page.",
      backToHome: "Back to home",
    },
    comingSoon: {
      title: "Coming Soon",
      message: "We're working hard to bring you something amazing. Stay tuned!",
    },
    routes: [
      {
        title: "Home",
        route: "/",
        id: 1,
      },
      {
        title: "Portfolio",
        route: "/portfolio",
        id: 2,
      },
      {
        title: "About us",
        route: "/about",
        id: 3,
      },
      {
        title: "Services",
        route: "/services",
        id: 4,
      },
      {
        title: "Contact us",
        route: "/contact",
        id: 5,
      },
    ],

    form: {
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email address",
      message: "Message",
      send: "Send",
    },
    home: {
      mainContentTitle: "Main Content",
    },
  });

  return (
    <LanguageContext.Provider
      value={{
        Lan,
        setLan,
        Right,
        setRight,
        localization,
        setLocalization,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;