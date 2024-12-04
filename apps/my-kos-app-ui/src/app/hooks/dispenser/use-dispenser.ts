import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Dispenser, DispenserModel } from "@kos-ui/my-kos-app-model";

export const useDispenser = () => {
  const modelId = Dispenser.type;
  const result = useKosModel<DispenserModel>({
    modelId,
    modelType: Dispenser.type,
    options: {},
  });

  return result;
};
