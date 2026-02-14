/**
 * This is a MIDI extension for Xcratch.
 */

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
            id: 'midi.entry.name',
            defaultMessage: 'MIDI',
            description: 'name of the extension'
        });
    },
    extensionId: 'midi',
    extensionURL: 'https://komucat86.github.io/xcx-my-blocks/dist/midi.mjs',
    collaborator: 'komucat86',
    get description () {
        return `${formatMessage({
            defaultMessage: 'MIDI extension for controlling musical instruments and devices',
            description: 'Description for MIDI extension',
            id: 'midi.entry.description'
        })} (${version})`;
    },
    tags: ['MIDI', 'music', 'instrument'],
    featured: false,
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
