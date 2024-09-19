import { useReadLaunchpadEvm, useReadLaunchpadProjectEvm } from "./generated";

export function App() {
  const { data, queryKey } = useReadLaunchpadEvm({
    functionName: "getLaunchPadsPaginated",
    args: [10n, 1n],
  });

  const { data: project } = useReadLaunchpadProjectEvm({
    address: "0x08d74586EB5cb87A0f2399E939bBb483900cE569",
    chainId: 56,
    functionName: "getLaunchPadInfo",
  });

  console.log({ queryKey, project, data });

  return <h1>Hello World</h1>;
}
