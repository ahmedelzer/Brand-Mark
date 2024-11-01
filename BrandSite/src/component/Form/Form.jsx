import React, { useContext, useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../../assets/bg-sidebar-desktop.svg";
import BackgroundSidebarMobile from "../../assets/bg-sidebar-mobile.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

import arcadeLogo from "../../assets/icon-arcade.svg";
import advancedLogo from "../../assets/icon-advanced.svg";
import proLogo from "../../assets/icon-pro.svg";

import "./index.css";
import FormContainer from "../DynamicPopup/FormContainer";
import personalInfoSchema from "./Schema/parsonalInfo.json";
import SectionHeading from "./SectionHeading";
///
import { useParams } from "react-router-dom";
import serviceSchema from "../../Schemas/ServiceSchema/ServiceSchema.json";
import dashboardItemSchema from "../../Schemas/DashboardItemSchema/DashboardItemSchema.json";
import { GetProjectUrl, SetReoute } from "../../request.js";
import useFetch from "../../hooks/APIsFunctions/useFetch";
import Loading from "../Loading/Loading";
import { onApply } from "../DynamicPopup/OnApplay";
import DrawFrom from "./DrawFrom";
import { RegistrationContext } from "../../context/Registration";
//schemas
import LoginFormSchema from "../../Schemas/LoginSchema/LoginFormSchema.json";
import CustomerRequest from "../../Schemas/StepsFrom/CustomerRequest.json";
import { buildApiUrl } from "../../hooks/APIsFunctions/BuildApiUrl";
import { formStyle } from "./styles";
import { LanguageContext } from "../../context/Language";
// import useFetch from "@/src/hooks/APIsFunctions/useFetch";
//todo steps of form
//1-take steps and display it and handle active step
//2-take from serviceRegistrationSteps the fromContainer of this step by that addDashboardItem
//3-when click next make row of all data form and marge it when click confirm button send body to the post action from action schema that addDashboardItem
//todo steps of Registration
//1-make isSigh =true only when verify code and go next or when know if he did that
//2-make havePersonalInfo =true when he clicked on go verify button
const Form = ({
  serviceRegistrationSteps,
  serviceRegistrationID,
  setServiceRegistrationID,
}) => {
  //------------------------------STATES------------------------------
  ///
  const { isSigh, setIsSigh, customerRequestID, setCustomerRequestID } =
    useContext(RegistrationContext);
  const { serviceID } = useParams();

  const { localization } = useContext(LanguageContext);
  const [stepNumber, setStepNumber] = useState(isSigh ? 2 : 1);
  const [margeRow, setMargeRow] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const [havePersonalInfo, setHavePersonalInfo] = useState(isSigh);

  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "YOUR INFO", active: true },
    ...serviceRegistrationSteps.dataSource.map((step, index) => ({
      id: index + 2, // Dynamically assign ID
      title: step.serviceRegistrationName, // Use the correct title
      active: false, // Set active to false for subsequent steps
    })),
  ]);
  const [yourInfo, setYourInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const [isPlanEmpty, setIsPlanEmpty] = useState(false);
  const [planDuration, setPlanDuration] = useState("mo");
  const [planDurationName, setPlanDurationName] = useState("Monthly");

  const [plan, setPlan] = useState({
    title: "",
    price: 0,
    yearly: false,
  });

  const [planOptions, setPlanOptions] = useState([
    {
      id: 1,
      logo: arcadeLogo,
      title: "Arcade",
      price: 9,
      monthlyPrice: 9,
      yearlyPrice: 90,
      selected: false,
    },
    {
      id: 2,
      logo: advancedLogo,
      title: "Advanced",
      price: 12,
      monthlyPrice: 12,
      yearlyPrice: 120,
      selected: false,
    },
    {
      id: 3,
      logo: proLogo,
      title: "Pro",
      price: 15,
      monthlyPrice: 15,
      yearlyPrice: 150,
      selected: false,
    },
  ]);

  const [addonOptions, setAddonOptions] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      monthlyPrice: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ]);

  const [addons, setAddons] = useState([]);

  const [displayThankyou, setDisplayThankyou] = useState(false);
  // -----------------------call APIS----------------
  SetReoute(serviceSchema.projectProxyRoute);
  const {
    data: serviceRegistration,
    isLoading,
    error,
  } = useFetch(
    //${serviceRegistrationSteps?.dataSource[0]?.serviceRegistrationID}
    `/Service/GetServiceRegistration/${serviceRegistrationID}`,
    GetProjectUrl()
  );
  SetReoute(dashboardItemSchema.projectProxyRoute);

  // console.log(serviceRegistrationSteps, serviceRegistration, addDashboardItem);

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }

    // console.log(steps);
    // console.log(stepNumber);
    // console.log(yourInfo);
    // console.log(plan);
    //console.log(addons);
    // console.log(planOptions);
    // console.log(addonOptions);
    // console.log(plan);
    // console.log(isPlanEmpty);
    // console.log(displayThankyou);
    // console.log(planDuration);
  }, [
    stepNumber,
    yourInfo,
    plan,
    addons,
    addonOptions,
    planOptions,
    isPlanEmpty,
    displayThankyou,
  ]);

  //------------------------------FUNCTIONS------------------------------
  const onSubmit = async (e, action, type, route) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (type == "next step") {
      if (stepNumber === steps.length) {
        setDisable(true);
        try {
          const request = await onApply(
            {
              ...margeRow,
              ...formJson,
              customerRequestID: customerRequestID,
            },
            null,
            true,
            action,
            route
          );
          if (request) {
            setResult(request);
            setDisplayThankyou(true);
          }
        } catch (error) {
          console.error("API call failed:", error);
          // Optionally, handle the error here (e.g., show a notification)
        } finally {
          // Enable the button after the API call
          setDisable(false);
        }
      } else {
        setDisable(true);
        try {
          const request = await onApply(
            {
              ...formJson,
              customerRequestID: customerRequestID,
            },
            null,
            true,
            action,
            route
          );
          if (request) {
            setResult(request);
            setServiceRegistrationID(
              serviceRegistrationSteps?.dataSource[stepNumber - 1]
                .serviceRegistrationID
            );
            setStepNumber((prev) => prev + 1);
            setMargeRow({
              ...margeRow,
              ...formData,
            });
          }
        } catch (error) {
          console.error("API call failed:", error);
          // Optionally, handle the error here (e.g., show a notification)
        } finally {
          // Enable the button after the API call
          setDisable(false);
        }
      }
    } else if (type == "do not sigh before") {
      setDisable(true);
      try {
        const request = await onApply(
          formJson,
          null,
          true,
          action,
          LoginFormSchema.projectProxyRoute
        );
        if (request && request.success === true) {
          setResult(request);
          setMargeRow({ ...margeRow, ...request.data, ...formJson });
          setHavePersonalInfo(() => true);
        }
      } catch (error) {
        console.error("API call failed:", error);
        // Optionally, handle the error here (e.g., show a notification)
      } finally {
        // Enable the button after the API call
        setDisable(false);
      }
    } else if (type == "havePersonalInfo without Verification") {
      const verificationID = result.data;
      setDisable(true);
      const dataSourceAPI = (query) => {
        SetReoute(LoginFormSchema.projectProxyRoute);

        return buildApiUrl(query, { ...formJson, ...verificationID });
      };
      try {
        const request = await onApply(
          {},
          null,
          true,
          action,
          LoginFormSchema.projectProxyRoute,
          false,
          dataSourceAPI(action)
        );
        const date = new Date();
        const timeZoneOffset = date.getTimezoneOffset();

        const bodyCustomerRequest = {
          languageID: window.localStorage.getItem("languageID"),
          timeZoneConvert: timeZoneOffset,
          verificationCodeID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          contact:
            margeRow.messageType === "0"
              ? margeRow.phoneNumber
              : margeRow.email,
          contactCodeNumber: +margeRow.messageType,
          brandServiceID: serviceID,
          ...formJson,
          ...verificationID,
        };
        const customerRequest = await onApply(
          bodyCustomerRequest,
          null,
          true,
          CustomerRequest,
          route,
          false
        );
        if (request && request.success === true && customerRequest.success) {
          window.sessionStorage.setItem(
            "customerRequestID",
            customerRequest.data.customerRequestID
          );
          setCustomerRequestID(customerRequest.data.customerRequestID);
          setResult(request);
          setIsSigh(true);
          setMargeRow({ ...margeRow, ...formJson, ...verificationID });
          window.sessionStorage.setItem("isSigh", true);
          setStepNumber((prev) => prev + 1);
        }
      } catch (error) {
        console.error("API call failed:", error);
        // Optionally, handle the error here (e.g., show a notification)
      } finally {
        // Enable the button after the API call
        setDisable(false);
      }
    }
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep + 1);
  };

  const changeClick = () => {
    setStepNumber((prevStep) => prevStep - 2);
  };

  const changeYourInfo = (event) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const selectPlan = (title, price, id) => {
    setPlanOptions((prevPlanOptions) => {
      const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        if (planOption.id == id) {
          return { ...planOption, selected: true };
        } else {
          return { ...planOption, selected: false };
        }
      });
      return updatedPlanOptions;
    });

    setPlan((prevPlan) => {
      return { ...prevPlan, title: title, price: price };
    });
  };
  const toggleDuration = () => {
    if (plan.yearly == false) {
      setPlan((prevPlan) => {
        setPlanDuration("yr");
        setPlanDurationName("Yearly");

        setPlanOptions((prevPlanOptions) => {
          const updatedPlanOptions = prevPlanOptions.map((planOption) => {
            return { ...planOption, price: planOption.yearlyPrice };
          });
          return updatedPlanOptions;
        });

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.yearlyPrice };
          });
          return updatedAddonOptions;
        });

        return { ...prevPlan, yearly: true };
      });
    } else {
      setPlan((prevPlan) => {
        setPlanDuration("mo");
        setPlanDurationName("Monthly");

        setPlanOptions((prevPlanOptions) => {
          const updatedPlanOptions = prevPlanOptions.map((planOption) => {
            return { ...planOption, price: planOption.monthlyPrice };
          });
          return updatedPlanOptions;
        });

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.monthlyPrice };
          });
          return updatedAddonOptions;
        });

        return { ...prevPlan, yearly: false };
      });
    }

    // setPlan((prevPlan) => {
    //   return { ...prevPlan, yearly: !plan.yearly };
    // });
  };

  const checkBox = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const title = e.target.getAttribute("data-title-name");
    const price = parseInt(e.target.getAttribute("data-price"));
    if (e.target.checked == true) {
      setAddons((prevAddons) => [
        ...prevAddons,
        { id: id, title: title, price: price },
      ]);
    } else {
      setAddons((prevAddons) => {
        return prevAddons.filter((addon) => addon.id != id);
      });
    }

    setAddonOptions((prevAddons) => {
      const updatedAddons = prevAddons.map((addon) => {
        if (addon.id == id) {
          if (addon.selected == false) {
            return { ...addon, selected: true };
          } else {
            return { ...addon, selected: false };
          }
        } else {
          return addon;
        }
      });
      return updatedAddons;
    });
  };

  const selectAddon = (id) => {
    setAddonOptions((prevAddons) => {
      const updatedAddons = prevAddons.map((addon) => {
        if (addon.id == id) {
          if (addon.selected == false) {
            return { ...addon, selected: true };
          } else {
            return { ...addon, selected: false };
          }
        } else {
          return addon;
        }
      });
      return updatedAddons;
    });
  };
  if (isLoading || !serviceRegistration) {
    return <Loading />;
  }
  if (error && !serviceRegistration) {
    // Handle error, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }

  return (
    // <div className="bg-white !h-full">
    <div className={formStyle.body}>
      <div className={formStyle.container}>
        <div className={formStyle.relativeDiv}>
          <img
            className={formStyle.sidebarImage}
            src={BackgroundSidebar}
            alt="sidebar"
          />
          <img
            className={formStyle.topbarImage}
            src={BackgroundSidebarMobile}
            alt="topbar"
          />
          <div className={formStyle.stepsContainer}>
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className={formStyle.thankYouContainer}>
          {(displayThankyou && (
            <>
              <Thankyou />
            </>
          )) || (
            <>
              <div>
                {!isSigh && havePersonalInfo ? (
                  <SectionHeading
                    title={localization.formSteps.verification.title}
                    desc={
                      "Enter the 6-digit verification code that was sent to your phone number."
                    }
                  />
                ) : (
                  <SectionHeading
                    title={
                      isSigh
                        ? serviceRegistration.serviceRegistrationName
                        : localization.formSteps.personalInfo.title
                    }
                    desc="Please provide your name, email address, and phone number."
                  />
                )}
                {serviceRegistration.addDashboardItemID && (
                  <DrawFrom
                    serviceRegistration={serviceRegistration}
                    onSubmit={onSubmit}
                    disable={disable}
                    prevStep={prevStep}
                    result={result}
                    returnInfoStep={() => {
                      setIsSigh(false);
                      setHavePersonalInfo(false);
                    }}
                    havePersonalInfo={havePersonalInfo}
                    isConfirm={stepNumber === steps.length}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Form;
