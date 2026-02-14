import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import translations from './translations.json';

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
let formatMessage = messageData => messageData.default;

/**
 * Setup format-message for this extension.
 */
const setupTranslations = () => {
    const localeSetup = formatMessage.setup();
    if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(
            localeSetup.translations[localeSetup.locale],
            translations[localeSetup.locale]
        );
    }
};

const EXTENSION_ID = 'midi';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://komucat86.github.io/xcx-my-blocks/dist/midi.mjs';

/**
 * MIDI Extension for Scratch 3.0
 */
class MidiExtension {
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    static set formatMessage (formatter) {
        formatMessage = formatter;
        if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return formatMessage({
            id: 'midi.name',
            default: 'MIDI',
            description: 'name of the extension'
        });
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
    static get extensionURL () {
        return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */
    static set extensionURL (url) {
        extensionURL = url;
    }

    /**
     * Construct a set of blocks for MIDI.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        if (runtime.formatMessage) {
            // Replace 'formatMessage' to a formatter which is used in the runtime.
            formatMessage = runtime.formatMessage;
        }

        // MIDI state
        this.midiAccess = null;
        this.midiOutput = null;
        this.isInitialized = false;
        this.availableDevices = [];

        // Initialize MIDI Access
        this.initMidiAccess();
    }

    /**
     * Initialize MIDI Access
     */
    initMidiAccess () {
        if (!navigator.requestMIDIAccess) {
            console.warn('Web MIDI API is not supported in this browser');
            return;
        }

        navigator.requestMIDIAccess()
            .then(
                midiAccess => {
                    this.midiAccess = midiAccess;
                    this.isInitialized = true;
                    this.updateAvailableDevices();
                    console.log('MIDI Access initialized successfully');
                },
                error => {
                    console.error('Failed to initialize MIDI Access:', error);
                }
            );
    }

    /**
     * Update list of available MIDI devices
     */
    updateAvailableDevices () {
        if (!this.midiAccess) return;

        this.availableDevices = [];
        const outputs = this.midiAccess.outputs.values();

        for (let output of outputs) {
            this.availableDevices.push({
                id: output.id,
                name: output.name
            });
        }
    }

    /**
     * Select a MIDI output device
     * @param {string} deviceId - The ID of the MIDI device
     */
    selectDevice (deviceId) {
        if (!this.midiAccess) return;

        try {
            this.midiOutput = this.midiAccess.outputs.get(deviceId);
            if (this.midiOutput) {
                console.log(`Selected MIDI device: ${this.midiOutput.name}`);
            }
        } catch (error) {
            console.error('Failed to select MIDI device:', error);
        }
    }

    /**
     * Send Note On message
     * @param {number} note - Note number (0-127)
     * @param {number} velocity - Velocity (0-127)
     * @param {number} channel - MIDI channel (0-15)
     */
    noteOn (note, velocity, channel) {
        if (!this.midiOutput) {
            console.warn('No MIDI device selected');
            return;
        }

        const noteNum = Math.max(0, Math.min(127, Cast.toNumber(note)));
        const vel = Math.max(0, Math.min(127, Cast.toNumber(velocity)));
        const ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));

        const noteOnMessage = [0x90 + ch, noteNum, vel];

        try {
            this.midiOutput.send(noteOnMessage);
        } catch (error) {
            console.error('Failed to send Note On message:', error);
        }
    }

    /**
     * Send Note Off message
     * @param {number} note - Note number (0-127)
     * @param {number} velocity - Velocity (0-127)
     * @param {number} channel - MIDI channel (0-15)
     */
    noteOff (note, velocity, channel) {
        if (!this.midiOutput) {
            console.warn('No MIDI device selected');
            return;
        }

        const noteNum = Math.max(0, Math.min(127, Cast.toNumber(note)));
        const vel = Math.max(0, Math.min(127, Cast.toNumber(velocity)));
        const ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));

        const noteOffMessage = [0x80 + ch, noteNum, vel];

        try {
            this.midiOutput.send(noteOffMessage);
        } catch (error) {
            console.error('Failed to send Note Off message:', error);
        }
    }

    /**
     * Send Control Change message (CC)
     * @param {number} controller - CC number (0-127)
     * @param {number} value - CC value (0-127)
     * @param {number} channel - MIDI channel (0-15)
     */
    controlChange (controller, value, channel) {
        if (!this.midiOutput) {
            console.warn('No MIDI device selected');
            return;
        }

        const ctrl = Math.max(0, Math.min(127, Cast.toNumber(controller)));
        const val = Math.max(0, Math.min(127, Cast.toNumber(value)));
        const ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));

        const ccMessage = [0xB0 + ch, ctrl, val];

        try {
            this.midiOutput.send(ccMessage);
        } catch (error) {
            console.error('Failed to send CC message:', error);
        }
    }

    /**
     * Send Program Change message
     * @param {number} program - Program number (0-127)
     * @param {number} channel - MIDI channel (0-15)
     */
    programChange (program, channel) {
        if (!this.midiOutput) {
            console.warn('No MIDI device selected');
            return;
        }

        const prog = Math.max(0, Math.min(127, Cast.toNumber(program)));
        const ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));

        const pcMessage = [0xC0 + ch, prog];

        try {
            this.midiOutput.send(pcMessage);
        } catch (error) {
            console.error('Failed to send Program Change message:', error);
        }
    }

    /**
     * Send Pitch Bend message
     * @param {number} value - Pitch bend value (0-16383, 8192 is center/no bend)
     * @param {number} channel - MIDI channel (0-15)
     */
    pitchBend (value, channel) {
        if (!this.midiOutput) {
            console.warn('No MIDI device selected');
            return;
        }

        const bendValue = Math.max(0, Math.min(16383, Cast.toNumber(value)));
        const ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));

        const lsb = bendValue & 0x7F;
        const msb = (bendValue >> 7) & 0x7F;
        const pitchBendMessage = [0xE0 + ch, lsb, msb];

        try {
            this.midiOutput.send(pitchBendMessage);
        } catch (error) {
            console.error('Failed to send Pitch Bend message:', error);
        }
    }

    /**
     * Get list of available MIDI devices
     * @return {string} - comma-separated list of device names
     */
    getAvailableDevices () {
        this.updateAvailableDevices();
        return this.availableDevices.map(device => device.name).join(', ') || 'No devices';
    }

    /**
     * Get current initialized status
     * @return {boolean} - true if MIDI is initialized
     */
    isInitializedStatus () {
        return this.isInitialized;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        setupTranslations();
        return {
            id: MidiExtension.EXTENSION_ID,
            name: MidiExtension.EXTENSION_NAME,
            extensionURL: MidiExtension.extensionURL,
            showStatusButton: false,
            blocks: [
                {
                    opcode: 'note-on',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'midi.noteOn',
                        default: 'send Note On note [NOTE] velocity [VELOCITY] channel [CHANNEL]',
                        description: 'send MIDI Note On message'
                    }),
                    func: 'noteOn',
                    arguments: {
                        NOTE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 60
                        },
                        VELOCITY: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        CHANNEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'note-off',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'midi.noteOff',
                        default: 'send Note Off note [NOTE] velocity [VELOCITY] channel [CHANNEL]',
                        description: 'send MIDI Note Off message'
                    }),
                    func: 'noteOff',
                    arguments: {
                        NOTE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 60
                        },
                        VELOCITY: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        CHANNEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'control-change',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'midi.controlChange',
                        default: 'send CC controller [CONTROLLER] value [VALUE] channel [CHANNEL]',
                        description: 'send MIDI Control Change message'
                    }),
                    func: 'controlChange',
                    arguments: {
                        CONTROLLER: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 7
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 64
                        },
                        CHANNEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'program-change',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'midi.programChange',
                        default: 'send Program Change program [PROGRAM] channel [CHANNEL]',
                        description: 'send MIDI Program Change message'
                    }),
                    func: 'programChange',
                    arguments: {
                        PROGRAM: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        CHANNEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'pitch-bend',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'midi.pitchBend',
                        default: 'send Pitch Bend value [VALUE] channel [CHANNEL]',
                        description: 'send MIDI Pitch Bend message'
                    }),
                    func: 'pitchBend',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 8192
                        },
                        CHANNEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                '---',
                {
                    opcode: 'get-available-devices',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'midi.getAvailableDevices',
                        default: 'MIDI devices',
                        description: 'get list of available MIDI devices'
                    }),
                    func: 'getAvailableDevices'
                },
                {
                    opcode: 'is-initialized',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'midi.isInitialized',
                        default: 'MIDI initialized?',
                        description: 'check if MIDI is initialized'
                    }),
                    func: 'isInitializedStatus'
                }
            ],
            menus: {
            }
        };
    }
}

export {MidiExtension as default, MidiExtension as blockClass};
