import { useNavigate, useLocation } from "react-router-dom";

const useReplaceQueryParameter = () => {
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    }
    else {
      searchParams.set(key, value);
    }
  }
}

export default useReplaceQueryParameter;