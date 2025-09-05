#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class LinesLoopsVibesServer {
  constructor() {
    this.server = new Server(
      {
        name: 'lines-loops-vibes-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.lines = new Map();
    this.loops = new Map();
    this.vibes = new Map();
    this.rhythms = new Map();
    this.contexts = new Map();
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'create_line',
          description: 'Create a line - a connection or path between points',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the line',
              },
              from: {
                type: 'string',
                description: 'Starting point',
              },
              to: {
                type: 'string',
                description: 'Ending point',
              },
              rhythm: {
                type: 'string',
                enum: ['steady', 'accelerating', 'pulsing', 'syncopated', 'flowing'],
                description: 'Rhythm of the line',
              },
            },
            required: ['name', 'from', 'to'],
          },
        },
        {
          name: 'create_loop',
          description: 'Create a loop - an iterative cycle',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the loop',
              },
              type: {
                type: 'string',
                enum: ['infinite', 'convergent', 'divergent', 'spiral', 'oscillating'],
                description: 'Type of loop pattern',
              },
              rhythm: {
                type: 'string',
                enum: ['constant', 'variable', 'fibonacci', 'exponential', 'harmonic'],
                description: 'Rhythm pattern of iterations',
              },
            },
            required: ['name', 'type'],
          },
        },
        {
          name: 'create_vibe',
          description: 'Create a vibe - an energy or atmosphere',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the vibe',
              },
              energy: {
                type: 'string',
                enum: ['calm', 'intense', 'chaotic', 'focused', 'expansive'],
                description: 'Energy type',
              },
              frequency: {
                type: 'number',
                minimum: 1,
                maximum: 100,
                description: 'Frequency/tempo (1-100 Hz)',
              },
              rhythm: {
                type: 'string',
                enum: ['ambient', 'driving', 'syncopated', 'polyrhythmic', 'freeform'],
                description: 'Rhythmic pattern',
              },
            },
            required: ['name', 'energy'],
          },
        },
        {
          name: 'set_context',
          description: 'Set the context that influences rhythms',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Context name',
              },
              type: {
                type: 'string',
                enum: ['creative', 'analytical', 'meditative', 'collaborative', 'experimental'],
                description: 'Type of context',
              },
              influences: {
                type: 'array',
                items: { type: 'string' },
                description: 'What this context influences (lines/loops/vibes names)',
              },
            },
            required: ['name', 'type'],
          },
        },
        {
          name: 'trace_line',
          description: 'Trace along a line with a specific rhythm',
          inputSchema: {
            type: 'object',
            properties: {
              line_name: {
                type: 'string',
                description: 'Name of the line to trace',
              },
              speed: {
                type: 'number',
                minimum: 0.1,
                maximum: 10,
                description: 'Speed multiplier',
              },
              message: {
                type: 'string',
                description: 'Message or data to carry along the line',
              },
            },
            required: ['line_name'],
          },
        },
        {
          name: 'iterate_loop',
          description: 'Execute one iteration of a loop with rhythm',
          inputSchema: {
            type: 'object',
            properties: {
              loop_name: {
                type: 'string',
                description: 'Name of the loop to iterate',
              },
              input: {
                type: 'string',
                description: 'Input for this iteration',
              },
              apply_rhythm: {
                type: 'boolean',
                description: 'Apply the loop\'s rhythm pattern',
                default: true,
              },
            },
            required: ['loop_name', 'input'],
          },
        },
        {
          name: 'pulse_vibe',
          description: 'Send a pulse through a vibe',
          inputSchema: {
            type: 'object',
            properties: {
              vibe_name: {
                type: 'string',
                description: 'Name of the vibe',
              },
              amplitude: {
                type: 'number',
                minimum: 0,
                maximum: 1,
                description: 'Pulse amplitude (0-1)',
              },
              duration: {
                type: 'number',
                description: 'Pulse duration in beats',
              },
            },
            required: ['vibe_name'],
          },
        },
        {
          name: 'synchronize',
          description: 'Synchronize lines, loops, and vibes',
          inputSchema: {
            type: 'object',
            properties: {
              elements: {
                type: 'array',
                items: { type: 'string' },
                description: 'Elements to synchronize (names of lines/loops/vibes)',
              },
              master_rhythm: {
                type: 'string',
                description: 'Master rhythm to sync to',
              },
              phase_offset: {
                type: 'number',
                minimum: 0,
                maximum: 360,
                description: 'Phase offset in degrees',
              },
            },
            required: ['elements'],
          },
        },
        {
          name: 'compose_rhythm',
          description: 'Compose a complex rhythm from lines, loops, and vibes',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name for the composed rhythm',
              },
              components: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    element: { type: 'string' },
                    weight: { type: 'number' },
                  },
                },
                description: 'Components and their weights',
              },
              tempo: {
                type: 'number',
                description: 'Base tempo in BPM',
              },
            },
            required: ['name', 'components'],
          },
        },
        {
          name: 'visualize_system',
          description: 'Visualize the entire lines-loops-vibes system',
          inputSchema: {
            type: 'object',
            properties: {
              show_rhythms: {
                type: 'boolean',
                description: 'Show rhythm patterns',
                default: true,
              },
              time_window: {
                type: 'number',
                description: 'Time window to visualize (in beats)',
              },
            },
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case 'create_line':
          return this.createLine(args);
        case 'create_loop':
          return this.createLoop(args);
        case 'create_vibe':
          return this.createVibe(args);
        case 'set_context':
          return this.setContext(args);
        case 'trace_line':
          return this.traceLine(args);
        case 'iterate_loop':
          return this.iterateLoop(args);
        case 'pulse_vibe':
          return this.pulseVibe(args);
        case 'synchronize':
          return this.synchronize(args);
        case 'compose_rhythm':
          return this.composeRhythm(args);
        case 'visualize_system':
          return this.visualizeSystem(args);
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  createLine(args) {
    const { name, from, to, rhythm = 'steady' } = args;
    
    const line = {
      name,
      from,
      to,
      rhythm,
      created_at: new Date().toISOString(),
      traces: [],
    };

    this.lines.set(name, line);
    this.rhythms.set(`line_${name}`, this.generateRhythm(rhythm));

    return {
      content: [
        {
          type: 'text',
          text: `〰️ Line "${name}" created!\n\nFrom: ${from} → To: ${to}\nRhythm: ${rhythm}\n\n${this.visualizeLineRhythm(rhythm)}\n\nThe line is ready to carry messages with ${rhythm} rhythm.`,
        },
      ],
    };
  }

  createLoop(args) {
    const { name, type, rhythm = 'constant' } = args;
    
    const loop = {
      name,
      type,
      rhythm,
      iterations: [],
      created_at: new Date().toISOString(),
      phase: 0,
    };

    this.loops.set(name, loop);
    this.rhythms.set(`loop_${name}`, this.generateRhythm(rhythm));

    return {
      content: [
        {
          type: 'text',
          text: `🔄 Loop "${name}" created!\n\nType: ${type}\nRhythm: ${rhythm}\n\n${this.visualizeLoopPattern(type)}\n\nThe ${type} loop is ready with ${rhythm} rhythm.`,
        },
      ],
    };
  }

  createVibe(args) {
    const { name, energy, frequency = 50, rhythm = 'ambient' } = args;
    
    const vibe = {
      name,
      energy,
      frequency,
      rhythm,
      created_at: new Date().toISOString(),
      pulses: [],
    };

    this.vibes.set(name, vibe);
    this.rhythms.set(`vibe_${name}`, this.generateRhythm(rhythm));

    return {
      content: [
        {
          type: 'text',
          text: `✨ Vibe "${name}" created!\n\nEnergy: ${energy}\nFrequency: ${frequency} Hz\nRhythm: ${rhythm}\n\n${this.visualizeVibeEnergy(energy, frequency)}\n\nThe ${energy} vibe resonates at ${frequency}Hz with ${rhythm} rhythm.`,
        },
      ],
    };
  }

  setContext(args) {
    const { name, type, influences = [] } = args;
    
    const context = {
      name,
      type,
      influences,
      created_at: new Date().toISOString(),
    };

    this.contexts.set(name, context);

    const rhythmModifier = this.getContextRhythmModifier(type);
    influences.forEach(element => {
      if (this.rhythms.has(`line_${element}`) || this.rhythms.has(`loop_${element}`) || this.rhythms.has(`vibe_${element}`)) {
        this.applyContextToRhythm(element, rhythmModifier);
      }
    });

    return {
      content: [
        {
          type: 'text',
          text: `🎭 Context "${name}" set!\n\nType: ${type}\nInfluences: ${influences.join(', ') || 'None'}\n\n${this.visualizeContext(type)}\n\nThe ${type} context will modify rhythms of influenced elements.`,
        },
      ],
    };
  }

  traceLine(args) {
    const { line_name, speed = 1, message = '' } = args;
    const line = this.lines.get(line_name);

    if (!line) {
      return {
        content: [
          {
            type: 'text',
            text: `❌ Line "${line_name}" not found.`,
          },
        ],
      };
    }

    const rhythm = this.rhythms.get(`line_${line_name}`);
    const trace = {
      timestamp: new Date().toISOString(),
      message,
      speed,
      rhythmStep: rhythm ? rhythm.next() : 1,
    };

    line.traces.push(trace);

    return {
      content: [
        {
          type: 'text',
          text: `〰️ Tracing line "${line_name}"\n\nFrom: ${line.from} → To: ${line.to}\nSpeed: ${speed}x\nMessage: "${message}"\n\n${this.animateLineTrace(line.rhythm, speed)}\n\nRhythm pulse: ${trace.rhythmStep}`,
        },
      ],
    };
  }

  iterateLoop(args) {
    const { loop_name, input, apply_rhythm = true } = args;
    const loop = this.loops.get(loop_name);

    if (!loop) {
      return {
        content: [
          {
            type: 'text',
            text: `❌ Loop "${loop_name}" not found.`,
          },
        ],
      };
    }

    const rhythm = apply_rhythm ? this.rhythms.get(`loop_${loop_name}`) : null;
    const iteration = {
      number: loop.iterations.length + 1,
      input,
      timestamp: new Date().toISOString(),
      rhythmStep: rhythm ? rhythm.next() : 1,
      phase: this.calculatePhase(loop.type, loop.iterations.length),
    };

    loop.iterations.push(iteration);
    loop.phase = iteration.phase;

    return {
      content: [
        {
          type: 'text',
          text: `🔄 Loop "${loop_name}" - Iteration ${iteration.number}\n\nInput: "${input}"\nPhase: ${iteration.phase}°\nRhythm: ${iteration.rhythmStep}\n\n${this.visualizeLoopIteration(loop.type, iteration.number)}\n\nPattern: ${this.describeLoopBehavior(loop.type, iteration.number)}`,
        },
      ],
    };
  }

  pulseVibe(args) {
    const { vibe_name, amplitude = 0.5, duration = 1 } = args;
    const vibe = this.vibes.get(vibe_name);

    if (!vibe) {
      return {
        content: [
          {
            type: 'text',
            text: `❌ Vibe "${vibe_name}" not found.`,
          },
        ],
      };
    }

    const rhythm = this.rhythms.get(`vibe_${vibe_name}`);
    const pulse = {
      timestamp: new Date().toISOString(),
      amplitude,
      duration,
      frequency: vibe.frequency,
      rhythmStep: rhythm ? rhythm.next() : 1,
    };

    vibe.pulses.push(pulse);

    return {
      content: [
        {
          type: 'text',
          text: `✨ Pulsing vibe "${vibe_name}"\n\nEnergy: ${vibe.energy}\nAmplitude: ${(amplitude * 100).toFixed(0)}%\nDuration: ${duration} beats\n\n${this.visualizePulse(amplitude, vibe.frequency)}\n\nRhythm: ${vibe.rhythm} @ ${pulse.rhythmStep}`,
        },
      ],
    };
  }

  synchronize(args) {
    const { elements, master_rhythm = null, phase_offset = 0 } = args;

    const syncData = {
      elements,
      master_rhythm,
      phase_offset,
      timestamp: new Date().toISOString(),
    };

    const syncResults = elements.map(element => {
      const hasLine = this.lines.has(element);
      const hasLoop = this.loops.has(element);
      const hasVibe = this.vibes.has(element);
      
      return {
        element,
        type: hasLine ? 'line' : hasLoop ? 'loop' : hasVibe ? 'vibe' : 'unknown',
        synced: hasLine || hasLoop || hasVibe,
      };
    });

    return {
      content: [
        {
          type: 'text',
          text: `🔗 Synchronizing ${elements.length} elements\n\nMaster Rhythm: ${master_rhythm || 'Auto-detected'}\nPhase Offset: ${phase_offset}°\n\n${syncResults.map(r => `${r.synced ? '✅' : '❌'} ${r.element} (${r.type})`).join('\n')}\n\n${this.visualizeSyncPattern(elements.length, phase_offset)}`,
        },
      ],
    };
  }

  composeRhythm(args) {
    const { name, components, tempo = 120 } = args;

    const composition = {
      name,
      components,
      tempo,
      created_at: new Date().toISOString(),
    };

    const rhythmPattern = this.generateCompositeRhythm(components);
    this.rhythms.set(`composed_${name}`, rhythmPattern);

    return {
      content: [
        {
          type: 'text',
          text: `🎼 Rhythm composed: "${name}"\n\nTempo: ${tempo} BPM\nComponents:\n${components.map(c => `  • ${c.element}: ${(c.weight * 100).toFixed(0)}%`).join('\n')}\n\n${this.visualizeCompositeRhythm(components)}\n\nComposite rhythm created and available for use.`,
        },
      ],
    };
  }

  visualizeSystem(args) {
    const { show_rhythms = true, time_window = 16 } = args;

    const lines = Array.from(this.lines.values());
    const loops = Array.from(this.loops.values());
    const vibes = Array.from(this.vibes.values());

    let visualization = '🎨 LINES-LOOPS-VIBES SYSTEM\n\n';

    if (lines.length > 0) {
      visualization += '〰️ LINES:\n';
      lines.forEach(line => {
        visualization += `  ${line.name}: ${line.from} → ${line.to}`;
        if (show_rhythms) visualization += ` [${line.rhythm}]`;
        visualization += '\n';
      });
      visualization += '\n';
    }

    if (loops.length > 0) {
      visualization += '🔄 LOOPS:\n';
      loops.forEach(loop => {
        visualization += `  ${loop.name}: ${loop.type}`;
        if (show_rhythms) visualization += ` [${loop.rhythm}]`;
        visualization += ` (${loop.iterations.length} iterations)\n`;
      });
      visualization += '\n';
    }

    if (vibes.length > 0) {
      visualization += '✨ VIBES:\n';
      vibes.forEach(vibe => {
        visualization += `  ${vibe.name}: ${vibe.energy} @ ${vibe.frequency}Hz`;
        if (show_rhythms) visualization += ` [${vibe.rhythm}]`;
        visualization += '\n';
      });
      visualization += '\n';
    }

    if (show_rhythms) {
      visualization += this.visualizeSystemRhythm(time_window);
    }

    return {
      content: [
        {
          type: 'text',
          text: visualization,
        },
      ],
    };
  }

  generateRhythm(type) {
    const patterns = {
      steady: { pattern: [1, 1, 1, 1], index: 0 },
      accelerating: { pattern: [1, 1.2, 1.5, 2], index: 0 },
      pulsing: { pattern: [0.5, 1, 0.5, 1], index: 0 },
      syncopated: { pattern: [1, 0.5, 0.75, 1.25], index: 0 },
      flowing: { pattern: [0.8, 1, 1.2, 1], index: 0 },
      constant: { pattern: [1], index: 0 },
      variable: { pattern: [0.5, 1, 2, 1], index: 0 },
      fibonacci: { pattern: [1, 1, 2, 3, 5, 8], index: 0 },
      exponential: { pattern: [1, 2, 4, 8], index: 0 },
      harmonic: { pattern: [1, 0.5, 0.33, 0.25], index: 0 },
      ambient: { pattern: [0.3, 0.5, 0.4, 0.6], index: 0 },
      driving: { pattern: [1, 1, 1, 1], index: 0 },
      polyrhythmic: { pattern: [3, 4, 5], index: 0 },
      freeform: { pattern: [Math.random(), Math.random(), Math.random()], index: 0 },
    };

    const rhythm = patterns[type] || patterns.constant;
    
    return {
      next() {
        const value = rhythm.pattern[rhythm.index];
        rhythm.index = (rhythm.index + 1) % rhythm.pattern.length;
        return value;
      },
    };
  }

  getContextRhythmModifier(contextType) {
    const modifiers = {
      creative: 1.5,
      analytical: 0.8,
      meditative: 0.5,
      collaborative: 1.2,
      experimental: 2.0,
    };
    return modifiers[contextType] || 1.0;
  }

  applyContextToRhythm(element, modifier) {
    console.error(`Applied ${modifier}x rhythm modifier to ${element}`);
  }

  visualizeLineRhythm(rhythm) {
    const patterns = {
      steady: '━━━━━━━━',
      accelerating: '━━━━━━━━━⟫',
      pulsing: '━ ━ ━ ━',
      syncopated: '━━ ━ ━━━',
      flowing: '〰️〰️〰️〰️',
    };
    return patterns[rhythm] || '━━━━━━━━';
  }

  visualizeLoopPattern(type) {
    const patterns = {
      infinite: '∞∞∞∞∞',
      convergent: '◯◯◯•',
      divergent: '•◯◯◯',
      spiral: '🌀',
      oscillating: '↺↻↺↻',
    };
    return patterns[type] || '◯◯◯◯';
  }

  visualizeVibeEnergy(energy, frequency) {
    const energySymbols = {
      calm: '≈≈≈≈≈',
      intense: '⚡⚡⚡⚡⚡',
      chaotic: '✱✱✱✱✱',
      focused: '◉◉◉◉◉',
      expansive: '◎◎◎◎◎',
    };
    const freq = '〜'.repeat(Math.ceil(frequency / 20));
    return `${energySymbols[energy] || '≈≈≈≈≈'} ${freq}`;
  }

  visualizeContext(type) {
    const contexts = {
      creative: '🎨 🎭 🎪 🎨',
      analytical: '📊 📈 📉 📊',
      meditative: '☯️ ☯️ ☯️ ☯️',
      collaborative: '🤝 🤝 🤝 🤝',
      experimental: '🧪 🔬 ⚗️ 🧬',
    };
    return contexts[type] || '◆◆◆◆';
  }

  animateLineTrace(rhythm, speed) {
    const base = '→';
    const fast = '⟫';
    const slow = '⟶';
    const symbol = speed > 1.5 ? fast : speed < 0.5 ? slow : base;
    return symbol.repeat(8);
  }

  calculatePhase(type, iteration) {
    const phases = {
      infinite: (iteration * 30) % 360,
      convergent: Math.max(0, 360 - iteration * 30),
      divergent: Math.min(360, iteration * 30),
      spiral: (iteration * 45) % 360,
      oscillating: Math.sin(iteration * Math.PI / 4) * 180 + 180,
    };
    return Math.floor(phases[type] || 0);
  }

  visualizeLoopIteration(type, number) {
    const symbols = {
      infinite: '∞',
      convergent: number > 5 ? '•' : '◯',
      divergent: number > 5 ? '◯' : '•',
      spiral: '🌀',
      oscillating: number % 2 ? '↺' : '↻',
    };
    const symbol = symbols[type] || '◯';
    return `${symbol.repeat(Math.min(number, 10))}${number > 10 ? '...' : ''}`;
  }

  describeLoopBehavior(type, iteration) {
    const descriptions = {
      infinite: 'Continuous cycling',
      convergent: iteration > 8 ? 'Approaching fixed point' : 'Converging',
      divergent: iteration > 8 ? 'Expanding rapidly' : 'Diverging',
      spiral: 'Spiraling ' + (iteration % 2 ? 'inward' : 'outward'),
      oscillating: 'Oscillating ' + (iteration % 2 ? 'forward' : 'backward'),
    };
    return descriptions[type] || 'Processing';
  }

  visualizePulse(amplitude, frequency) {
    const height = Math.ceil(amplitude * 5);
    const width = Math.ceil(frequency / 10);
    let pulse = '';
    for (let i = 0; i < height; i++) {
      pulse += '▁▂▃▄▅▆▇█'[Math.min(7, Math.floor(i * 8 / height))].repeat(width) + '\n';
    }
    return pulse;
  }

  visualizeSyncPattern(count, offset) {
    const base = '◯';
    const synced = '◉';
    const pattern = [];
    for (let i = 0; i < count; i++) {
      const phase = (i * 360 / count + offset) % 360;
      pattern.push(phase < 180 ? synced : base);
    }
    return pattern.join(' → ');
  }

  generateCompositeRhythm(components) {
    const composite = { pattern: [], index: 0 };
    components.forEach(comp => {
      const weight = comp.weight || 0.5;
      composite.pattern.push(weight);
    });
    
    return {
      next() {
        const value = composite.pattern[composite.index];
        composite.index = (composite.index + 1) % composite.pattern.length;
        return value;
      },
    };
  }

  visualizeCompositeRhythm(components) {
    return components.map(c => {
      const bars = Math.ceil(c.weight * 10);
      return '█'.repeat(bars) + '░'.repeat(10 - bars);
    }).join(' | ');
  }

  visualizeSystemRhythm(timeWindow) {
    let rhythm = '🎵 SYSTEM RHYTHM (next ' + timeWindow + ' beats):\n';
    rhythm += '┌' + '─'.repeat(timeWindow * 2) + '┐\n';
    
    const types = ['Lines', 'Loops', 'Vibes'];
    types.forEach(type => {
      rhythm += '│';
      for (let i = 0; i < timeWindow; i++) {
        rhythm += i % 4 === 0 ? '█ ' : '░ ';
      }
      rhythm += '│ ' + type + '\n';
    });
    
    rhythm += '└' + '─'.repeat(timeWindow * 2) + '┘\n';
    return rhythm;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Lines-Loops-Vibes MCP Server running on stdio');
  }
}

const server = new LinesLoopsVibesServer();
server.run().catch(console.error);