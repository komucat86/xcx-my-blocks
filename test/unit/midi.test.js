import {blockClass} from '../../src/vm/extensions/midi/index.js';

describe('MIDI Extension', () => {
    let runtime;
    let blocks;

    beforeEach(() => {
        runtime = {
            formatMessage: jest.fn(x => x.default || x.defaultMessage)
        };
        blocks = new blockClass(runtime);
    });

    test('extension is correctly constructed', () => {
        expect(blockClass.EXTENSION_ID).toBe('midi');
        expect(blockClass.EXTENSION_NAME).toBe('MIDI');
    });

    test('getInfo contains proper data', () => {
        const info = blocks.getInfo();
        expect(info.id).toBe('midi');
        expect(info.name).toBe('MIDI');
        expect(info.blocks).toBeInstanceOf(Array);
        expect(info.blocks.length).toBeGreaterThan(0);
    });

    test('blocks contain expected opcodes', () => {
        const info = blocks.getInfo();
        const opcodes = info.blocks
            .filter(block => typeof block === 'object')
            .map(block => block.opcode);

        expect(opcodes).toContain('note-on');
        expect(opcodes).toContain('note-off');
        expect(opcodes).toContain('control-change');
        expect(opcodes).toContain('program-change');
        expect(opcodes).toContain('pitch-bend');
        expect(opcodes).toContain('get-available-devices');
        expect(opcodes).toContain('is-initialized');
    });

    test('note-on block has correct structure', () => {
        const info = blocks.getInfo();
        const noteOnBlock = info.blocks.find(b => b.opcode === 'note-on');

        expect(noteOnBlock).toBeDefined();
        expect(noteOnBlock.blockType).toBe('command');
        expect(noteOnBlock.func).toBe('noteOn');
        expect(noteOnBlock.arguments).toHaveProperty('NOTE');
        expect(noteOnBlock.arguments).toHaveProperty('VELOCITY');
        expect(noteOnBlock.arguments).toHaveProperty('CHANNEL');
    });

    test('getAvailableDevices returns string', () => {
        const result = blocks.getAvailableDevices();
        expect(typeof result).toBe('string');
    });

    test('isInitializedStatus returns boolean', () => {
        const result = blocks.isInitializedStatus();
        expect(typeof result).toBe('boolean');
    });

    test('noteOn clamps parameters', () => {
        // Should not throw error with invalid values
        expect(() => blocks.noteOn(300, 200, 20)).not.toThrow();
    });

    test('noteOff clamps parameters', () => {
        // Should not throw error with invalid values
        expect(() => blocks.noteOff(-50, 200, 20)).not.toThrow();
    });

    test('controlChange clamps parameters', () => {
        // Should not throw error with invalid values
        expect(() => blocks.controlChange(200, 300, 20)).not.toThrow();
    });

    test('programChange clamps parameters', () => {
        // Should not throw error with invalid values
        expect(() => blocks.programChange(200, 20)).not.toThrow();
    });

    test('pitchBend clamps parameters', () => {
        // Should not throw error with invalid values
        expect(() => blocks.pitchBend(20000, 20)).not.toThrow();
    });
});
