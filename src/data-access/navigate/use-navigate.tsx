import { useEffect, useState } from "react";
import { api } from "../api";
import { NavLink } from "../../interfaces/nav-link";

export const useNavigate = () => {
  const [navItems, setNavItems] = useState<Array<NavLink>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<NavLink>({ path: "nav" });
      setNavItems(items);
    };
    get();
  }, []);
  return navItems;
};
