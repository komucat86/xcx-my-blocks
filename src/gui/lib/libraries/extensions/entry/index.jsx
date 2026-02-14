/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';
import {version as packageVersion} from '../../../../../../package.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const version = `v${packageVersion}`;

const entry = {
    get name () {
        return formatMessage({
            id: 'myBlocks.entry.name',
            defaultMessage: 'My Blocks',
            description: 'name of the extension'
        });
    },
    extensionId: 'myBlocks',
    extensionURL: 'https://komucat86.github.io/xcx-my-blocks/dist/myBlocks.mjs',
    collaborator: 'komucat86',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return `${formatMessage({
            defaultMessage: 'an extension for Xcratch',
            description: 'Description for this extension',
            id: 'myBlocks.entry.description'
        })} (${version})`;
    },
    tags: [],
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://komucat86.github.io/xcx-my-blocks/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
