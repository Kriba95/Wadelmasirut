export function assembleTypesenseServerConfig() {
  let TYPESENSE_SERVER_CONFIG = {
    apiKey: "xFo7IEefAG0nhewjp0hOS14hom1KHLby", // Be sure to use an API key that only allows searches, in production
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST,
        port: process.env.NEXT_PUBLIC_TYPESENSE_PORT,
        protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL,
      },
    ],
    numRetries: 8,
    connectionTimeoutSeconds: 2

  };

  // if (process.env[`TYPESENSE_HOST_2`]) {
  //   TYPESENSE_SERVER_CONFIG.nodes.push({
  //     host: process.env[`TYPESENSE_HOST_2`],
  //     port: process.env.NEXT_PUBLIC_TYPESENSE_PORT,
  //     protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL,
  //   });
  // }

  return TYPESENSE_SERVER_CONFIG
}
