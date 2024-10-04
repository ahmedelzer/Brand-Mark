import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import BrandServiceCategory from "./BrandServiceCategory";
import PageHeading from "./PageHeading";
import BrandService from "./BrandService";
import { listObserverStyle, serviceStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import serviceSchemaActions from "../Schemas/ServiceSchema/ServiceSchemaActions.json";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";
import { GetProjectUrl, SetReoute } from "../request";
import { buildApiUrl } from "../hooks/APIsFunctions/BuildApiUrl";
import UseFetchWithoutBaseUrl from "../hooks/APIsFunctions/UseFetchWithoutBaseUrl";
import reducer from "./Pagination/reducer";
import { initialState } from "./Pagination/initialState";
import LoadData from "../hooks/APIsFunctions/loadData";
// import { getRemoteRows } from "./Pagination/getRemoteRows";
//todo find a better way to handle loading and pagination and the key of pagination
// show who fun he getRemoteRows
import Loading from "./Loading";
const VIRTUAL_PAGE_SIZE = 2;
function Service({ services, serviceCategoryID }) {
  const { localization } = useContext(LanguageContext);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(VIRTUAL_PAGE_SIZE, "serviceID")
  );
  const [currentSkip, setCurrentSkip] = useState(1);
  const observerRef = useRef();
  const dataSourceAPI = (query, skip, take) => {
    SetReoute(serviceSchema.projectProxyRoute);
    return buildApiUrl(query, {
      pageIndex: skip + 1,
      pageSize: take,
      ServiceCategoryID: serviceCategoryID,
    });
  };
  const getAction =
    serviceSchemaActions &&
    serviceSchemaActions.find(
      (action) => action.dashboardFormActionMethodType === "Get"
    );
  const updateRows = (skip, rows, newTotalCount) => {
    dispatch({
      type: "UPDATE_ROWS",
      payload: {
        skip,
        rows: rows,
        totalCount: newTotalCount ? newTotalCount : state.totalCount,
      },
    });
  };
  useEffect(() => {
    LoadData(state, dataSourceAPI, getAction, updateRows, dispatch);
  });
  const getRemoteRows = (requestedSkip, take) => {
    dispatch({ type: "START_LOADING", payload: { requestedSkip, take } });
    // Load remote data logic here
  };
  const { rows, skip, totalCount, loading } = state;
  const observerCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && rows.length < totalCount && !loading) {
        getRemoteRows(currentSkip, VIRTUAL_PAGE_SIZE * 2);
        setCurrentSkip(currentSkip + 1);
      }
    },
    [rows, totalCount, loading, skip]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerCallback]);
  return (
    <section className={serviceStyles.container}>
      <div className={serviceStyles.container}>
        <div className={serviceStyles.heading}>
          <PageHeading
            subTitle={localization.services.PageHeading.subTitle}
            title={localization.services.PageHeading.title}
            desc={localization.services.PageHeading.desc}
          />
        </div>
        <div className={serviceStyles.categoryWrapper}>
          <BrandServiceCategory />
        </div>
        <div className={serviceStyles.serviceWrapper}>
          {rows.map((service) => (
            <BrandService
              key={service.serviceID}
              name={service.serviceName}
              desc={service.serviceDescription}
              img={service.ServiceImage}
            />
          ))}
        </div>
        {rows && (
          <div ref={observerRef} className={listObserverStyle.container} />
        )}
        {loading && <Loading />}
      </div>
    </section>
  );
}

export default Service;
