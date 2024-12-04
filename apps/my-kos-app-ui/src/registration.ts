import type { IKosRegistry } from "@kosdev-code/kos-ui-sdk";
import { CoreModels } from "@kosdev-code/kos-ui-sdk"; 
import { Dispenser } from '@kos-ui/my-kos-app-model';
import { DispenserModels } from "@kosdev-code/kos-dispense-sdk"; 

export const kosModels: IKosRegistry['models'] = { 
  ...CoreModels, 
  ...Dispenser.registration,
...DispenserModels, 
};

export const Registry: IKosRegistry = { 
  models: kosModels, 
  preloadModels: [],
};