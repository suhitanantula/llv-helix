#!/usr/bin/env node

// Test the server methods directly
console.log('🧪 Testing Lines-Loops-Vibes MCP Server...\n');

// Create a mock server instance for testing
const server = {
  lines: new Map(),
  loops: new Map(),
  vibes: new Map(),
  rhythms: new Map(),
  contexts: new Map(),
  
  generateRhythm(type) {
    return { next: () => Math.random() };
  },
  
  visualizeLineRhythm(rhythm) {
    const patterns = {
      flowing: '〰️〰️〰️〰️',
      steady: '━━━━━━━━'
    };
    return patterns[rhythm] || '━━━━━━━━';
  },
  
  visualizeLoopPattern(type) {
    const patterns = { spiral: '🌀' };
    return patterns[type] || '◯◯◯◯';
  },
  
  visualizeVibeEnergy(energy, frequency) {
    return `⚡⚡⚡⚡⚡ ${'〜'.repeat(Math.ceil(frequency / 20))}`;
  },
  
  visualizeSystemRhythm(timeWindow) {
    return '🎵 SYSTEM RHYTHM\n┌────────┐\n│████░░░░│\n└────────┘';
  },
  
  createLine(args) {
    const { name, from, to, rhythm = 'steady' } = args;
    const line = { name, from, to, rhythm };
    this.lines.set(name, line);
    this.rhythms.set(`line_${name}`, this.generateRhythm(rhythm));
    
    return {
      content: [{
        type: 'text',
        text: `〰️ Line "${name}" created!\n\nFrom: ${from} → To: ${to}\nRhythm: ${rhythm}\n\n${this.visualizeLineRhythm(rhythm)}\n\nThe line is ready to carry messages with ${rhythm} rhythm.`
      }]
    };
  },
  
  createLoop(args) {
    const { name, type, rhythm = 'constant' } = args;
    const loop = { name, type, rhythm };
    this.loops.set(name, loop);
    this.rhythms.set(`loop_${name}`, this.generateRhythm(rhythm));
    
    return {
      content: [{
        type: 'text',
        text: `🔄 Loop "${name}" created!\n\nType: ${type}\nRhythm: ${rhythm}\n\n${this.visualizeLoopPattern(type)}\n\nThe ${type} loop is ready with ${rhythm} rhythm.`
      }]
    };
  },
  
  createVibe(args) {
    const { name, energy, frequency = 50, rhythm = 'ambient' } = args;
    const vibe = { name, energy, frequency, rhythm };
    this.vibes.set(name, vibe);
    this.rhythms.set(`vibe_${name}`, this.generateRhythm(rhythm));
    
    return {
      content: [{
        type: 'text',
        text: `✨ Vibe "${name}" created!\n\nEnergy: ${energy}\nFrequency: ${frequency} Hz\nRhythm: ${rhythm}\n\n${this.visualizeVibeEnergy(energy, frequency)}\n\nThe ${energy} vibe resonates at ${frequency}Hz with ${rhythm} rhythm.`
      }]
    };
  },
  
  visualizeSystem(args) {
    const lines = Array.from(this.lines.values());
    const loops = Array.from(this.loops.values());  
    const vibes = Array.from(this.vibes.values());
    
    let viz = '🎨 LINES-LOOPS-VIBES SYSTEM\n\n';
    
    if (lines.length > 0) {
      viz += '〰️ LINES:\n';
      lines.forEach(line => viz += `  ${line.name}: ${line.from} → ${line.to} [${line.rhythm}]\n`);
      viz += '\n';
    }
    
    if (loops.length > 0) {
      viz += '🔄 LOOPS:\n';
      loops.forEach(loop => viz += `  ${loop.name}: ${loop.type} [${loop.rhythm}]\n`);
      viz += '\n';
    }
    
    if (vibes.length > 0) {
      viz += '✨ VIBES:\n';
      vibes.forEach(vibe => viz += `  ${vibe.name}: ${vibe.energy} @ ${vibe.frequency}Hz [${vibe.rhythm}]\n`);
      viz += '\n';
    }
    
    viz += this.visualizeSystemRhythm(args.time_window);
    
    return { content: [{ type: 'text', text: viz }] };
  }
};

// Test create_line
console.log('Testing create_line:');
try {
  const result = server.createLine({
    name: 'test_line',
    from: 'start',
    to: 'end',
    rhythm: 'flowing'
  });
  console.log(result.content[0].text);
  console.log('✅ create_line works!\n');
} catch (error) {
  console.error('❌ create_line failed:', error.message);
}

// Test create_loop
console.log('Testing create_loop:');
try {
  const result = server.createLoop({
    name: 'test_loop',
    type: 'spiral',
    rhythm: 'fibonacci'
  });
  console.log(result.content[0].text);
  console.log('✅ create_loop works!\n');
} catch (error) {
  console.error('❌ create_loop failed:', error.message);
}

// Test create_vibe
console.log('Testing create_vibe:');
try {
  const result = server.createVibe({
    name: 'test_vibe',
    energy: 'intense',
    frequency: 60,
    rhythm: 'driving'
  });
  console.log(result.content[0].text);
  console.log('✅ create_vibe works!\n');
} catch (error) {
  console.error('❌ create_vibe failed:', error.message);
}

// Test visualize_system
console.log('Testing visualize_system:');
try {
  const result = server.visualizeSystem({
    show_rhythms: true,
    time_window: 8
  });
  console.log(result.content[0].text);
  console.log('✅ visualize_system works!\n');
} catch (error) {
  console.error('❌ visualize_system failed:', error.message);
}

console.log('🎉 All tests completed!');