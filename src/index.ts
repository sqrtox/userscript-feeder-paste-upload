import { isFeederRoomUrl } from '~/utils/isFeederRoomUrl';
import { applyHandlePaste } from '~/utils/applyHandlePaste';

if (isFeederRoomUrl(location.href)) {
  applyHandlePaste();
}
