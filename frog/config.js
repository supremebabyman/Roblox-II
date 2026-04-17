// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/frog/ixl/",
  bare: "/tspmo/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/frog/handler.js",
  client: "/frog/client.js",
  bundle: "/frog/bundle.js",
  config: "/frog/config.js",
  sw: "/frog/fr.sw.js",
};