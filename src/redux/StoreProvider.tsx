import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { rootStore } from "./store";

function StoreProvider(props: PropsWithChildren): React.JSX.Element {
  return <Provider store={rootStore}>{props?.children}</Provider>;
}

export { StoreProvider };
