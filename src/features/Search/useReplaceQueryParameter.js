import {useNavigate, useLocation } from "react-router-dom";

const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useNavigate();

   return ({ key, value}) => {
    const searchParams = new URLSearchParams(location.search);
      if(value === undefined) {
            searchParams.delete(key);
       }
        else {
         searchParams.set(key, value);
        }
     return history.push(`${location.pathname}?${searchParams.toString()}`);
    }
}

export default useReplaceQueryParameter;