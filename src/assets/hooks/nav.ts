import { useNavigate } from "react-router-dom";

export const useNav = () => {
    const navigate = useNavigate();
  
    return (address: string) => (_event: React.MouseEvent) => {
      navigate(address);
    };
  };

