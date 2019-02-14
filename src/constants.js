import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])


export const IMMUN_INDEX_FILE = 'immun_index.json'
export const IMMUN_FILENAME_PREFIX = 'immun_'

export const ATTEST_INDEX_FILE = 'attest_index.json'   // id:  immunId: description:
export const ATTEST_FILENAME_PREFIX = 'attest_'        // image file