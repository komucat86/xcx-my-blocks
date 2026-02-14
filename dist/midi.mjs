var en$1 = {
	"midi.entry.name": "MIDI Input",
	"midi.entry.description": "Receive MIDI input from keyboards and controllers"
};
var ja$1 = {
	"midi.entry.name": "MIDI入力",
	"midi.entry.description": "キーボードとコントローラーからMIDI入力を受け取る"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"midi.entry.name": "MIDI入力",
	"midi.entry.description": "キーボードとコントローラーからMIDI入力をうけとる"
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
      defaultMessage: 'MIDI Input',
      description: 'name of the extension'
    });
  },
  extensionId: 'midi',
  extensionURL: 'https://komucat86.github.io/xcx-my-blocks/dist/midi.mjs',
  collaborator: 'komucat86',
  get description() {
    return "".concat(formatMessage$1({
      defaultMessage: 'Receive MIDI input from keyboards and controllers',
      description: 'Description for MIDI input extension',
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

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}

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
	"midi.name": "MIDI Input",
	"midi.lastNote": "last note",
	"midi.lastVelocity": "last velocity",
	"midi.lastController": "last controller",
	"midi.lastControlValue": "last CC value",
	"midi.isNotePressed": "note [NOTE] pressed?",
	"midi.anyKeyPressed": "any key pressed?",
	"midi.keyPressCount": "key press count",
	"midi.getAvailableDevices": "MIDI devices",
	"midi.isInitialized": "MIDI initialized?"
};
var ja = {
	"midi.name": "MIDI入力",
	"midi.lastNote": "最後のノート",
	"midi.lastVelocity": "最後のベロシティ",
	"midi.lastController": "最後のコントローラー",
	"midi.lastControlValue": "最後のCC値",
	"midi.isNotePressed": "ノート [NOTE] が押されている?",
	"midi.anyKeyPressed": "キーが押された?",
	"midi.keyPressCount": "キー押下カウント",
	"midi.getAvailableDevices": "MIDIデバイス",
	"midi.isInitialized": "MIDI初期化済み?"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"midi.name": "MIDI入力",
	"midi.lastNote": "さいごのノート",
	"midi.lastVelocity": "さいごのベロシティ",
	"midi.lastController": "さいごのコントローラー",
	"midi.lastControlValue": "さいごのCC値",
	"midi.isNotePressed": "ノート [NOTE] がおされている?",
	"midi.anyKeyPressed": "キーがおされた?",
	"midi.keyPressCount": "キーおうかカウント",
	"midi.getAvailableDevices": "MIDIデバイス",
	"midi.isInitialized": "MIDI初期化済み?"
}
};

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: true } : { done: false, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = true, u = false; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = true, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

// BlockType definition
var BlockType = {
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
 * MIDI Extension for Scratch 3.0 - MIDI Input (Receiver)
 */
var MidiExtension = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for MIDI Input.
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
    this.midiInput = null;
    this.isInitialized = false;
    this.availableDevices = [];

    // Received MIDI data
    this.lastNote = null;
    this.lastVelocity = 0;
    this.lastController = null;
    this.lastControlValue = 0;
    this.noteStates = {}; // Track which notes are currently pressed
    this.lastChannel = 0;

    // Event tracking
    this.keyPressedThisFrame = false;
    this.anyKeyPressedCount = 0;

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

        // Set up MIDI device change listener
        midiAccess.addEventListener('statechange', function (event) {
          _this.updateAvailableDevices();
        });
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
      var inputs = this.midiAccess.inputs.values();
      var _iterator = _createForOfIteratorHelper(inputs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          this.availableDevices.push({
            id: input.id,
            name: input.name
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Select a MIDI input device
     * @param {string} deviceId - The ID of the MIDI device
     */
  }, {
    key: "selectDevice",
    value: function selectDevice(deviceId) {
      var _this2 = this;
      if (!this.midiAccess) return;
      try {
        // Stop listening to previous device
        if (this.midiInput) {
          this.midiInput.removeEventListener('midimessage', this.onMidiMessage.bind(this));
        }

        // Get new device
        this.midiInput = this.midiAccess.inputs.get(deviceId);
        if (this.midiInput) {
          // Listen for MIDI messages
          this.midiInput.addEventListener('midimessage', function (event) {
            _this2.onMidiMessage(event);
          });
          console.log("Selected MIDI input device: ".concat(this.midiInput.name));
        }
      } catch (error) {
        console.error('Failed to select MIDI device:', error);
      }
    }

    /**
     * Handle incoming MIDI messages
     * @param {MIDIMessageEvent} event - MIDI message event
     */
  }, {
    key: "onMidiMessage",
    value: function onMidiMessage(event) {
      var _event$data = _slicedToArray(event.data, 3),
        command = _event$data[0],
        note = _event$data[1],
        value = _event$data[2];
      var channel = command & 0x0F;
      var status = command & 0xF0;
      this.lastChannel = channel;

      // Note On (0x90)
      if (status === 0x90 && value > 0) {
        this.lastNote = note;
        this.lastVelocity = value;
        this.noteStates[note] = true;
        this.keyPressedThisFrame = true;
        this.anyKeyPressedCount++;
        console.log("Note On: Note=".concat(note, ", Velocity=").concat(value, ", Channel=").concat(channel));
      }
      // Note Off (0x80) or Note On with velocity 0
      else if (status === 0x80 || status === 0x90 && value === 0) {
        this.lastNote = note;
        this.lastVelocity = value;
        delete this.noteStates[note];
        console.log("Note Off: Note=".concat(note, ", Channel=").concat(channel));
      }
      // Control Change (0xB0)
      else if (status === 0xB0) {
        this.lastController = note;
        this.lastControlValue = value;
        console.log("CC: Controller=".concat(note, ", Value=").concat(value, ", Channel=").concat(channel));
      }
    }

    /**
     * Get last received note number
     * @return {number} - Note number (0-127)
     */
  }, {
    key: "getLastNote",
    value: function getLastNote() {
      return this.lastNote !== null ? this.lastNote : 0;
    }

    /**
     * Get last received velocity
     * @return {number} - Velocity (0-127)
     */
  }, {
    key: "getLastVelocity",
    value: function getLastVelocity() {
      return this.lastVelocity;
    }

    /**
     * Get last received controller number
     * @return {number} - Controller number (0-127)
     */
  }, {
    key: "getLastController",
    value: function getLastController() {
      return this.lastController !== null ? this.lastController : 0;
    }

    /**
     * Get last received CC value
     * @return {number} - CC value (0-127)
     */
  }, {
    key: "getLastControlValue",
    value: function getLastControlValue() {
      return this.lastControlValue;
    }

    /**
     * Check if a specific note is currently pressed
     * @param {number} note - Note number to check
     * @return {boolean} - true if note is pressed
     */
  }, {
    key: "isNotePressedValue",
    value: function isNotePressedValue(note) {
      var noteNum = Math.max(0, Math.min(127, Cast.toNumber(note)));
      return this.noteStates[noteNum] === true;
    }

    /**
     * Check if any key was pressed this frame
     * @return {boolean} - true if any key was pressed
     */
  }, {
    key: "isAnyKeyPressed",
    value: function isAnyKeyPressed() {
      var result = this.keyPressedThisFrame;
      this.keyPressedThisFrame = false; // Reset after reading
      return result;
    }

    /**
     * Get the key press event count
     * This increments each time a key is pressed
     * @return {number} - current key press count
     */
  }, {
    key: "getKeyPressCount",
    value: function getKeyPressCount() {
      return this.anyKeyPressedCount;
    }

    /**
     * Get list of available MIDI input devices
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
          opcode: 'last-note',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.lastNote',
            default: 'last note',
            description: 'get last received note number'
          }),
          func: 'getLastNote'
        }, {
          opcode: 'last-velocity',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.lastVelocity',
            default: 'last velocity',
            description: 'get last received velocity'
          }),
          func: 'getLastVelocity'
        }, {
          opcode: 'last-controller',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.lastController',
            default: 'last controller',
            description: 'get last received CC number'
          }),
          func: 'getLastController'
        }, {
          opcode: 'last-control-value',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.lastControlValue',
            default: 'last CC value',
            description: 'get last received CC value'
          }),
          func: 'getLastControlValue'
        }, {
          opcode: 'is-note-pressed',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: 'midi.isNotePressed',
            default: 'note [NOTE] pressed?',
            description: 'check if a note is currently pressed'
          }),
          func: 'isNotePressedValue',
          arguments: {
            NOTE: {
              type: ArgumentType.NUMBER,
              defaultValue: 60
            }
          }
        }, {
          opcode: 'any-key-pressed',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: 'midi.anyKeyPressed',
            default: 'any key pressed?',
            description: 'check if any key was pressed'
          }),
          func: 'isAnyKeyPressed'
        }, {
          opcode: 'key-press-count',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'midi.keyPressCount',
            default: 'key press count',
            description: 'get total key press events'
          }),
          func: 'getKeyPressCount'
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
        default: 'MIDI Input',
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
