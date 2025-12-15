"use client";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import { Fragment, useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import { config } from "@/lib/cookie-consent/config";

const ConsentManager = () => {
  useEffect(() => {
    CookieConsent.run({
      ...config,
    });
  }, []);

  return <Fragment />;
};

export default ConsentManager;
