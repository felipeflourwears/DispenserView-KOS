import { IKosDataModel } from "@kosdev-code/kos-ui-sdk";

export interface DispenserOptions {
  name?: string;
}

export interface DispenserModel extends DispenserOptions, IKosDataModel {
  id: string;
  updateModel(options: DispenserOptions): void;
}
