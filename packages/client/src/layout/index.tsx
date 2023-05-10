interface LayoutProps {
  children: JSX.Element[];
}

function Layout({ children }: LayoutProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default Layout;
