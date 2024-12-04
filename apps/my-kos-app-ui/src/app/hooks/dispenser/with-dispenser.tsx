import { DispenserModel } from '@kos-ui/my-kos-app-model';
import { useDispenser } from './use-dispenser';

interface DispenserProps {
  dispenser: DispenserModel;
}
// react HOC to provide a Dispenser to a component
export function withDispenser<T extends DispenserProps = DispenserProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof DispenserProps>) => {
    const { model, status, KosModelLoader } = useDispenser();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} dispenser={model} />
      </KosModelLoader>
    );
  };
}
