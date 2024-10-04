export const observerCallback = useCallback(
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
