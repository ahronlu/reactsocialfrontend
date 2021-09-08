import React, { useEffect } from "react";

export default function Container({ children, wide }) {
  return (
    <div className={"container py-md-5 " + (wide ? "" : "container--narrow")}>
      {children}
    </div>
  );
}
