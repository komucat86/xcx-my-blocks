var en$1 = {
	"midi.entry.name": "MIDI",
	"midi.entry.description": "MIDI extension for controlling musical instruments and devices"
};
var ja$1 = {
	"midi.entry.name": "MIDI",
	"midi.entry.description": "楽器やデバイスを制御するためのMIDI拡張機能"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"midi.entry.name": "MIDI",
	"midi.entry.description": "がっきやでばいすをせいぎょするためのMIDIかくちょうきのう"
}
};

var version$1 = "0.0.0";

/**
 * This is a MIDI extension for Xcratch.
 */


/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var version = "v".concat(version$1);
var entry = {
  get name() {
    return formatMessage$1({
      id: 'midi.entry.name',
      defaultMessage: 'MIDI',
      description: 'name of the extension'
    });
  },
  extensionId: 'midi',
  extensionURL: 'https://komucat86.github.io/xcx-my-blocks/dist/midi.mjs',
  collaborator: 'komucat86',
  get description() {
    return "".concat(formatMessage$1({
      defaultMessage: 'MIDI extension for controlling musical instruments and devices',
      description: 'Description for MIDI extension',
      id: 'midi.entry.description'
    }), " (").concat(version, ")");
  },
  tags: ['MIDI', 'music', 'instrument'],
  featured: false,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://komucat86.github.io/xcx-my-blocks/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

var en = {
	"midi.name": "MIDI",
	"midi.noteOn": "send Note On note [NOTE] velocity [VELOCITY] channel [CHANNEL]",
	"midi.noteOff": "send Note Off note [NOTE] velocity [VELOCITY] channel [CHANNEL]",
	"midi.controlChange": "send CC controller [CONTROLLER] value [VALUE] channel [CHANNEL]",
	"midi.programChange": "send Program Change program [PROGRAM] channel [CHANNEL]",
	"midi.pitchBend": "send Pitch Bend value [VALUE] channel [CHANNEL]",
	"midi.getAvailableDevices": "MIDI devices",
	"midi.isInitialized": "MIDI initialized?"
};
var ja = {
	"midi.name": "MIDI",
	"midi.noteOn": "ノートオン ノート [NOTE] ベロシティ [VELOCITY] チャンネル [CHANNEL]",
	"midi.noteOff": "ノートオフ ノート [NOTE] ベロシティ [VELOCITY] チャンネル [CHANNEL]",
	"midi.controlChange": "CC送信 コントローラー [CONTROLLER] 値 [VALUE] チャンネル [CHANNEL]",
	"midi.programChange": "プログラムチェンジ プログラム [PROGRAM] チャンネル [CHANNEL]",
	"midi.pitchBend": "ピッチベンド 値 [VALUE] チャンネル [CHANNEL]",
	"midi.getAvailableDevices": "MIDIデバイス",
	"midi.isInitialized": "MIDI初期化済み?"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"midi.name": "MIDI",
	"midi.noteOn": "ノートオン ノート [NOTE] ベロシティ [VELOCITY] チャンネル [CHANNEL]",
	"midi.noteOff": "ノートオフ ノート [NOTE] ベロシティ [VELOCITY] チャンネル [CHANNEL]",
	"midi.controlChange": "CC送信 コントローラー [CONTROLLER] 値 [VALUE] チャンネル [CHANNEL]",
	"midi.programChange": "プログラムチェンジ プログラム [PROGRAM] チャンネル [CHANNEL]",
	"midi.pitchBend": "ピッチベンド 値 [VALUE] チャンネル [CHANNEL]",
	"midi.getAvailableDevices": "MIDIデバイス",
	"midi.isInitialized": "MIDI初期化済み?"
}
};

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: true } : { done: false, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = true, u = false; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = true, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

// BlockType definition
var BlockType = {
  COMMAND: 'command',
  REPORTER: 'reporter',
  BOOLEAN: 'boolean'};

// ArgumentType definition
var ArgumentType = {
  NUMBER: 'number'
};

// Simple Cast utility
var Cast = {
  toString: function toString(value) {
    return String(value);
  },
  toNumber: function toNumber(value) {
    return Number(value);
  }
};

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'midi';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://komucat86.github.io/xcx-my-blocks/dist/midi.mjs';

/**
 * MIDI Extension for Scratch 3.0
 */
var MidiExtension = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for MIDI.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function MidiExtension(runtime) {
    _classCallCheck(this, MidiExtension);
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
  return _createClass(MidiExtension, [{
    key: "initMidiAccess",
    value: function initMidiAccess() {
      var _this = this;
      if (!navigator.requestMIDIAccess) {
        console.warn('Web MIDI API is not supported in this browser');
        return;
      }
      navigator.requestMIDIAccess().then(function (midiAccess) {
        _this.midiAccess = midiAccess;
        _this.isInitialized = true;
        _this.updateAvailableDevices();
        console.log('MIDI Access initialized successfully');
      }, function (error) {
        console.error('Failed to initialize MIDI Access:', error);
      });
    }

    /**
     * Update list of available MIDI devices
     */
  }, {
    key: "updateAvailableDevices",
    value: function updateAvailableDevices() {
      if (!this.midiAccess) return;
      this.availableDevices = [];
      var outputs = this.midiAccess.outputs.values();
      var _iterator = _createForOfIteratorHelper(outputs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var output = _step.value;
          this.availableDevices.push({
            id: output.id,
            name: output.name
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Select a MIDI output device
     * @param {string} deviceId - The ID of the MIDI device
     */
  }, {
    key: "selectDevice",
    value: function selectDevice(deviceId) {
      if (!this.midiAccess) return;
      try {
        this.midiOutput = this.midiAccess.outputs.get(deviceId);
        if (this.midiOutput) {
          console.log("Selected MIDI device: ".concat(this.midiOutput.name));
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
  }, {
    key: "noteOn",
    value: function noteOn(note, velocity, channel) {
      if (!this.midiOutput) {
        console.warn('No MIDI device selected');
        return;
      }
      var noteNum = Math.max(0, Math.min(127, Cast.toNumber(note)));
      var vel = Math.max(0, Math.min(127, Cast.toNumber(velocity)));
      var ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));
      var noteOnMessage = [0x90 + ch, noteNum, vel];
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
  }, {
    key: "noteOff",
    value: function noteOff(note, velocity, channel) {
      if (!this.midiOutput) {
        console.warn('No MIDI device selected');
        return;
      }
      var noteNum = Math.max(0, Math.min(127, Cast.toNumber(note)));
      var vel = Math.max(0, Math.min(127, Cast.toNumber(velocity)));
      var ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));
      var noteOffMessage = [0x80 + ch, noteNum, vel];
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
  }, {
    key: "controlChange",
    value: function controlChange(controller, value, channel) {
      if (!this.midiOutput) {
        console.warn('No MIDI device selected');
        return;
      }
      var ctrl = Math.max(0, Math.min(127, Cast.toNumber(controller)));
      var val = Math.max(0, Math.min(127, Cast.toNumber(value)));
      var ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));
      var ccMessage = [0xB0 + ch, ctrl, val];
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
  }, {
    key: "programChange",
    value: function programChange(program, channel) {
      if (!this.midiOutput) {
        console.warn('No MIDI device selected');
        return;
      }
      var prog = Math.max(0, Math.min(127, Cast.toNumber(program)));
      var ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));
      var pcMessage = [0xC0 + ch, prog];
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
  }, {
    key: "pitchBend",
    value: function pitchBend(value, channel) {
      if (!this.midiOutput) {
        console.warn('No MIDI device selected');
        return;
      }
      var bendValue = Math.max(0, Math.min(16383, Cast.toNumber(value)));
      var ch = Math.max(0, Math.min(15, Cast.toNumber(channel)));
      var lsb = bendValue & 0x7F;
      var msb = bendValue >> 7 & 0x7F;
      var pitchBendMessage = [0xE0 + ch, lsb, msb];
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
  }, {
    key: "getAvailableDevices",
    value: function getAvailableDevices() {
      this.updateAvailableDevices();
      return this.availableDevices.map(function (device) {
        return device.name;
      }).join(', ') || 'No devices';
    }

    /**
     * Get current initialized status
     * @return {boolean} - true if MIDI is initialized
     */
  }, {
    key: "isInitializedStatus",
    value: function isInitializedStatus() {
      return this.isInitialized;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: MidiExtension.EXTENSION_ID,
        name: MidiExtension.EXTENSION_NAME,
        extensionURL: MidiExtension.extensionURL,
        showStatusButton: false,
        blocks: [{
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, '---', {
          opcode: 'get-available-devices',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.getAvailableDevices',
            default: 'MIDI devices',
            description: 'get list of available MIDI devices'
          }),
          func: 'getAvailableDevices'
        }, {
          opcode: 'is-initialized',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: 'midi.isInitialized',
            default: 'MIDI initialized?',
            description: 'check if MIDI is initialized'
          }),
          func: 'isInitializedStatus'
        }],
        menus: {}
      };
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'midi.name',
        default: 'MIDI',
        description: 'name of the extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
}();

export { MidiExtension as blockClass, entry };
//# sourceMappingURL=midi.mjs.map
