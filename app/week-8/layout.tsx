// import { AuthContextProvider } from "./_utils/auth-context";
 
// const Layout = ({ children }) => {
//   return <AuthContextProvider>{children}</AuthContextProvider>;
// };
 
// export default Layout;

import { ReactNode } from "react";
import { AuthContextProvider } from "./_utils/auth-context";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}