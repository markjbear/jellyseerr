import { MediaServerType } from '@server/constants/server';
import type { AllSettings } from '@server/lib/settings';

const migrateHostname = (settings: any): AllSettings => {
  const oldMediaServerType = settings.main.mediaServerType;
  console.log('Migrating media server type', oldMediaServerType);
  if (
    oldMediaServerType === MediaServerType.JELLYFIN &&
    process.env.JELLYFIN_TYPE === 'emby'
  ) {
    settings.main.mediaServerType = MediaServerType.EMBY;
  }

  return settings;
};

export default migrateHostname;
