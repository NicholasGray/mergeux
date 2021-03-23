import * as React from 'react';

/* eslint linebreak-style: ["error", "windows"] */
const Template = function (prop) {
  return (
    <button type="button" mode="filled" size={prop.size}>
      {prop.label}
    </button>
  );
};

export { Template as default };
