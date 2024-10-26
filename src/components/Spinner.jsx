import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
      <div className="loading-spinner">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={0} // Set timeout to 0 for continuous loading
        />
      </div>
    );
  };

  const MyComponent = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
  
        try {
          const response = await fetch('http://localhost:3030/getevent_detail');
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        
      </div>
    )
  };