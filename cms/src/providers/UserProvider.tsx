import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/index";
import { loadUser } from "../stores/auth";

interface IInitialLoadProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IInitialLoadProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadUser()).finally(() => setLoading(false));
  }, [dispatch]);

  return loading ? null : children;
}
