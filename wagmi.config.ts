import { defineConfig } from "@wagmi/cli";
import { blockExplorer, react } from "@wagmi/cli/plugins";
import { launchpadAbi } from "./contracts/launchpad";
import { erc20Abi } from "viem";
import { launchpadProjectAbi } from "./contracts/launchpad-project";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      abi: launchpadAbi,
      name: "Launchpad",
      address: "0xb8d8701589cE9cecbCEdc8DbDAdff30E987Ee0e8",
    },
    { abi: launchpadProjectAbi, name: "LaunchpadProject" },
    { abi: erc20Abi, name: "erc20" },
  ],
  plugins: [
    react({
      getHookName({ contractName, type, itemName }) {
        return `use${type.charAt(0).toUpperCase() + type.slice(1)}${contractName}${itemName || ""}Evm`;
      },
    }),
  ],
});
