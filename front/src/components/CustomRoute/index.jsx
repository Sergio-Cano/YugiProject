import { Redirect, Route as WouterRoute } from "wouter";
import { useLogin } from "../../hooks";

const CustomRoute = ({ guarded = false, component: Component, ...rest }) => {
  const { data, isLoading } = useLogin();

  if (isLoading) return <h3>Loading...</h3>;

  if (!guarded) return <Component />;

  return guarded && data?.success ? (
    <WouterRoute {...{ component: Component, ...rest }} />
  ) : (
    <Redirect to="/" />
  );
};

export default CustomRoute;