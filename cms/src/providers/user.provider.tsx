import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/index.store";

import { getCurrentUser } from "../stores/auth.store";

import Loading from "../components/Loading/Loading";
interface IInitialLoadProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IInitialLoadProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    dispatch(getCurrentUser(token)).finally(() => setLoading(false));
  }, [dispatch]);

  return loading ? <Loading /> : children;
}
