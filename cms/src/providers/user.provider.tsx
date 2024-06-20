import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/index.store";

import { getCurrentUser } from "../stores/auth.store";

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

  return loading ? null : children;
}
