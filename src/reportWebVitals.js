// Function to report web vitals performance metrics
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web vitals function with the onPerfEntry callback to report the metrics
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Export the reportWebVitals function as the default export
export default reportWebVitals;
