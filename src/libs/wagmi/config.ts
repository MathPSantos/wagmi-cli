import { createConfig, fallback, http } from "wagmi";
import { arbitrum, bsc } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [arbitrum, bsc],
  transports: {
    [arbitrum.id]: fallback([http()]),
    [bsc.id]: fallback([http()]),
  },
});
