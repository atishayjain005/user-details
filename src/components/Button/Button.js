import React from "react";

export default function Button({ cta, label }) {
  return (
    <button className="btn btn-light nav-item" onClick={cta}>
      {label}
    </button>
  );
}
