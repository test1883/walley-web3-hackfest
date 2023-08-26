import { useBosLoaderStore } from '@/stores/bos-loader';
import { useVmStore } from '@/stores/vm';
import styled from "styled-components"

import { Spinner } from '../lib/Spinner';

type Props = {
  src: string;
  props?: object;
};

export function VmComponent(props: Props) {
  const { EthersProvider, ethersContext, Widget } = useVmStore();
  const redirectMapStore = useBosLoaderStore();

  if (!EthersProvider || !redirectMapStore.hasResolved) {
    return <Spinner />;
  }

  return (
    <EthersProvider value={ethersContext}>
      <Widget
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
        {...props}
      />
    </EthersProvider>
  );
}
