import { ServiceFactory, resolveServiceUrl } from "@kosdev-code/kos-ui-sdk";
const { URL } = resolveServiceUrl("DISPENSER_SERVICE");
const { getAll } = ServiceFactory.build({
  basePath: `${URL}/api/dispenser`,
});

interface DispenserResponse {
  id: string;
}
/**
 * @category Service
 * Retrieves the initial dispenser data.
 */
export const getDispensers = async () => {
  const response = await getAll<DispenserResponse>({});
  return response;
};
