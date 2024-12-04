import {
  Kos,
  SingletonKosModelRegistrationBean,
  isKosModel,
} from '@kosdev-code/kos-ui-sdk';
import { DispenserModel, DispenserOptions } from './types';
import { DispenserModelImpl, MODEL_TYPE } from './dispenser-model';

export const Registration: SingletonKosModelRegistrationBean<
  DispenserModel,
  DispenserOptions
> = {
  registration: {
    [MODEL_TYPE]: {
      class: DispenserModelImpl,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Singleton.create<DispenserModel, DispenserOptions>(MODEL_TYPE),
  predicate: isKosModel(MODEL_TYPE),
};
export default Registration;
