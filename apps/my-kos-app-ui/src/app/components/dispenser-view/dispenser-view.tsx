/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import { withDispenser } from '../../hooks/dispenser/with-dispenser';
import { DispenserModel } from '@kos-ui/my-kos-app-model';


const log = KosLog.createLogger({name: "dispenser-view"})
log.debug('dispenser-view component loaded');

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  .logo {
    width: 300px;
  }
`;
interface Props {
  dispenser: DispenserModel;
}
const DispenserViewComp: React.FunctionComponent<Props> = kosComponent(
  ({ dispenser }) => {
    return (
      <div css={styles}>
        <div className="logo">
          <img src="kos-logo.svg"></img>
        </div>
        <h1>Welcome to kOS</h1>
        <h2>I’m Alive!</h2>
        <p>Dispenser: {dispenser?.id}</p>
      </div>
    );
  }
);

export const DispenserView = withDispenser(DispenserViewComp);
