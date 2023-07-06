"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string | null>;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [Providers, setProviders] = useState<Providers | null>(null);
  if (Providers) {
    return (
      <div>
        {Object.values(Providers).map((provider, i) => (
          <button key={i}>{provider.id}</button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
