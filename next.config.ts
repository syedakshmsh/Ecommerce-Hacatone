import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  


  images:{
    domains:["cdn.sanity.io"]
  },
  experimentalconfig: {
    missingSuspenseWithCSRBailout: false,
  },
  
  
  };


export default nextConfig;
