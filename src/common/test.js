import useCurrencyRates from "./getMovieData";



function Test() {
 const { nameFromApi, descriptionFromApi } = useCurrencyRates();
    return (
      
      <p>
        
       Nazwa: {nameFromApi}.<br/>
       Opis: {descriptionFromApi}.
  
      </p>
    );
  }
  
  export default Test;
  





