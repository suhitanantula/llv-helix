// Enhanced Creative Flows - Interactive Creative Process Builder
// Open Source Enhancement for Lines-Loops-Vibes MCP Server

class CreativeFlowBuilder {
  constructor() {
    this.flows = new Map();
    this.presets = new Map();
    this.session = {
      current_flow: null,
      components: [],
      insights: [],
      score: 0
    };
    this.initializePresets();
  }

  // Enhancement #2: Interactive Creative Flows
  createFlow(name, description) {
    const flow = {
      name,
      description,
      components: [],
      connections: [],
      created: new Date().toISOString(),
      energy_signature: null
    };
    
    this.flows.set(name, flow);
    this.session.current_flow = name;
    
    console.log(`🎨 Created creative flow: "${name}"`);
    console.log(`📝 ${description}`);
    
    return flow;
  }

  addComponent(type, config) {
    const flow = this.flows.get(this.session.current_flow);
    if (!flow) {
      throw new Error("No active flow. Create a flow first.");
    }

    const component = {
      id: `${type}_${Date.now()}`,
      type, // 'vibe', 'line', 'loop'
      config,
      added: new Date().toISOString()
    };

    flow.components.push(component);
    this.session.components.push(component);
    
    console.log(`✨ Added ${type} component: ${config.name || component.id}`);
    this.analyzeComponent(component);
    
    return component;
  }

  connectComponents(fromId, toId, relationship = 'flows_to') {
    const flow = this.flows.get(this.session.current_flow);
    const connection = {
      from: fromId,
      to: toId,
      relationship,
      strength: this.calculateConnectionStrength(fromId, toId)
    };
    
    flow.connections.push(connection);
    console.log(`🔗 Connected ${fromId} ${relationship} ${toId} (strength: ${connection.strength})`);
    
    return connection;
  }

  // Enhancement #3: Creative Insights Layer
  analyzeComponent(component) {
    const insights = [];
    
    // Energy analysis
    if (component.config.energy) {
      const energyInsight = this.analyzeEnergy(component.config.energy);
      insights.push(`Energy: ${energyInsight}`);
    }

    // Frequency analysis
    if (component.config.frequency) {
      const freqInsight = this.analyzeFrequency(component.config.frequency);
      insights.push(`Frequency: ${freqInsight}`);
    }

    // Rhythm analysis
    if (component.config.rhythm) {
      const rhythmInsight = this.analyzeRhythm(component.config.rhythm);
      insights.push(`Rhythm: ${rhythmInsight}`);
    }

    if (insights.length > 0) {
      console.log(`💡 Component insights:`);
      insights.forEach(insight => console.log(`   • ${insight}`));
      this.session.insights.push(...insights);
    }

    this.updateCreativeScore();
  }

  analyzeEnergy(energy) {
    const energyMap = {
      'calm': 'Promotes deep reflection and steady development',
      'focused': 'Drives goal-oriented creative work',
      'intense': 'Enables breakthrough moments and rapid iteration',
      'chaotic': 'Unleashes experimental and unconventional thinking',
      'expansive': 'Opens broad creative exploration and connection-making'
    };
    return energyMap[energy] || 'Creates unique creative atmosphere';
  }

  analyzeFrequency(frequency) {
    if (frequency < 30) return 'Deep contemplative mode - thorough, philosophical';
    if (frequency < 60) return 'Balanced creative mode - systematic, productive';
    if (frequency < 80) return 'Dynamic creative mode - fast iteration, pattern recognition';
    return 'High-energy innovation mode - experimental, breakthrough potential';
  }

  analyzeRhythm(rhythm) {
    const rhythmMap = {
      'ambient': 'Creates flowing, organic creative development',
      'driving': 'Maintains forward momentum and purposeful progress',
      'pulsing': 'Provides periodic creative bursts and reflection cycles',
      'syncopated': 'Enables unexpected creative connections and surprises',
      'flowing': 'Allows natural creative evolution and gentle transitions'
    };
    return rhythmMap[rhythm] || 'Creates unique creative timing patterns';
  }

  updateCreativeScore() {
    let score = 0;
    const components = this.session.components;
    
    // Diversity bonus
    const types = new Set(components.map(c => c.type));
    score += types.size * 10;
    
    // Energy variety bonus
    const energies = new Set(components.map(c => c.config.energy).filter(Boolean));
    score += energies.size * 15;
    
    // Frequency range bonus
    const frequencies = components.map(c => c.config.frequency).filter(Boolean);
    if (frequencies.length > 0) {
      const range = Math.max(...frequencies) - Math.min(...frequencies);
      score += Math.min(range, 50); // Cap at 50 points
    }
    
    // Connection bonus
    const flow = this.flows.get(this.session.current_flow);
    if (flow && flow.connections.length > 0) {
      score += flow.connections.length * 5;
    }
    
    this.session.score = score;
    console.log(`🎯 Creative Flow Score: ${score}/100`);
    
    this.provideRecommendations(score);
  }

  provideRecommendations(score) {
    const recommendations = [];
    
    if (score < 30) {
      recommendations.push("Try adding more component variety");
      recommendations.push("Experiment with different energy types");
    } else if (score < 60) {
      recommendations.push("Consider expanding your frequency range");
      recommendations.push("Add more connections between components");
    } else if (score < 80) {
      recommendations.push("Your flow is strong! Try adding a contrasting rhythm");
      recommendations.push("Consider chaining components for complex workflows");
    } else {
      recommendations.push("Excellent creative flow! Ready for advanced experimentation");
      recommendations.push("Try saving this as a template for future use");
    }
    
    if (recommendations.length > 0) {
      console.log(`💭 Recommendations:`);
      recommendations.forEach(rec => console.log(`   • ${rec}`));
    }
  }

  // Enhancement #4: Domain Templates
  initializePresets() {
    // Writing Flow
    this.presets.set('writing_flow', {
      name: 'Creative Writing Flow',
      description: 'Optimized for storytelling and narrative development',
      template: [
        { type: 'vibe', config: { name: 'inspiration', energy: 'calm', frequency: 25, rhythm: 'ambient' }},
        { type: 'line', config: { name: 'story_arc', from: 'concept', to: 'narrative', rhythm: 'flowing' }},
        { type: 'loop', config: { name: 'character_development', type: 'spiral', rhythm: 'fibonacci' }},
        { type: 'vibe', config: { name: 'creativity_burst', energy: 'intense', frequency: 75, rhythm: 'pulsing' }}
      ],
      connections: [
        { from: 'inspiration', to: 'story_arc', relationship: 'energizes' },
        { from: 'story_arc', to: 'character_development', relationship: 'flows_through' }
      ]
    });

    // Innovation Flow
    this.presets.set('innovation_flow', {
      name: 'Innovation & Problem Solving',
      description: 'Designed for breakthrough thinking and solution generation',
      template: [
        { type: 'vibe', config: { name: 'analysis_mode', energy: 'focused', frequency: 45, rhythm: 'driving' }},
        { type: 'loop', config: { name: 'ideation_cycle', type: 'divergent', rhythm: 'exponential' }},
        { type: 'line', config: { name: 'solution_path', from: 'problem', to: 'breakthrough', rhythm: 'accelerating' }},
        { type: 'vibe', config: { name: 'chaos_innovation', energy: 'chaotic', frequency: 90, rhythm: 'freeform' }}
      ],
      connections: [
        { from: 'analysis_mode', to: 'ideation_cycle', relationship: 'initiates' },
        { from: 'ideation_cycle', to: 'solution_path', relationship: 'feeds_into' },
        { from: 'chaos_innovation', to: 'solution_path', relationship: 'disrupts' }
      ]
    });

    // Business Strategy Flow
    this.presets.set('strategy_flow', {
      name: 'Strategic Planning Flow',
      description: 'Structured approach for business and strategic thinking',
      template: [
        { type: 'vibe', config: { name: 'market_intelligence', energy: 'calm', frequency: 30, rhythm: 'ambient' }},
        { type: 'line', config: { name: 'competitive_analysis', from: 'data', to: 'insights', rhythm: 'steady' }},
        { type: 'loop', config: { name: 'strategy_iteration', type: 'convergent', rhythm: 'constant' }},
        { type: 'vibe', config: { name: 'disruptive_thinking', energy: 'intense', frequency: 85, rhythm: 'syncopated' }}
      ],
      connections: [
        { from: 'market_intelligence', to: 'competitive_analysis', relationship: 'informs' },
        { from: 'competitive_analysis', to: 'strategy_iteration', relationship: 'drives' }
      ]
    });

    // Artistic Creation Flow
    this.presets.set('artistic_flow', {
      name: 'Artistic Expression Flow',
      description: 'For visual arts, design, and creative expression',
      template: [
        { type: 'vibe', config: { name: 'aesthetic_foundation', energy: 'calm', frequency: 20, rhythm: 'ambient' }},
        { type: 'line', config: { name: 'creative_exploration', from: 'inspiration', to: 'expression', rhythm: 'flowing' }},
        { type: 'loop', config: { name: 'artistic_refinement', type: 'spiral', rhythm: 'harmonic' }},
        { type: 'vibe', config: { name: 'avant_garde', energy: 'chaotic', frequency: 95, rhythm: 'freeform' }}
      ],
      connections: [
        { from: 'aesthetic_foundation', to: 'creative_exploration', relationship: 'grounds' },
        { from: 'creative_exploration', to: 'artistic_refinement', relationship: 'evolves_through' }
      ]
    });

    console.log(`📚 Loaded ${this.presets.size} creative flow templates`);
  }

  loadPreset(presetName) {
    const preset = this.presets.get(presetName);
    if (!preset) {
      console.log(`❌ Preset "${presetName}" not found`);
      return;
    }

    // Create flow from template
    this.createFlow(preset.name, preset.description);
    const flow = this.flows.get(this.session.current_flow);

    console.log(`📋 Loading preset: ${preset.name}`);
    console.log(`📝 ${preset.description}\n`);

    // Add components
    preset.template.forEach(template => {
      this.addComponent(template.type, template.config);
    });

    // Add connections
    preset.connections.forEach(conn => {
      const fromComponent = flow.components.find(c => 
        c.config.name === conn.from || c.id.includes(conn.from)
      );
      const toComponent = flow.components.find(c => 
        c.config.name === conn.to || c.id.includes(conn.to)
      );
      
      if (fromComponent && toComponent) {
        this.connectComponents(fromComponent.id, toComponent.id, conn.relationship);
      }
    });

    this.visualizeFlow();
    return flow;
  }

  listPresets() {
    console.log(`\n📚 Available Creative Flow Templates:`);
    console.log('='.repeat(50));
    
    this.presets.forEach((preset, key) => {
      console.log(`🎨 ${key}`);
      console.log(`   ${preset.name}`);
      console.log(`   ${preset.description}`);
      console.log('');
    });
  }

  calculateConnectionStrength(fromId, toId) {
    const flow = this.flows.get(this.session.current_flow);
    const fromComp = flow.components.find(c => c.id === fromId);
    const toComp = flow.components.find(c => c.id === toId);
    
    if (!fromComp || !toComp) return 0.5;
    
    let strength = 0.5; // Base strength
    
    // Energy compatibility
    if (fromComp.config.energy && toComp.config.energy) {
      const energyCompat = this.calculateEnergyCompatibility(fromComp.config.energy, toComp.config.energy);
      strength += energyCompat * 0.3;
    }
    
    // Frequency harmony
    if (fromComp.config.frequency && toComp.config.frequency) {
      const freqDiff = Math.abs(fromComp.config.frequency - toComp.config.frequency);
      const freqHarmony = Math.max(0, 1 - freqDiff / 100);
      strength += freqHarmony * 0.2;
    }
    
    return Math.min(1, strength);
  }

  calculateEnergyCompatibility(energy1, energy2) {
    const compatibilityMatrix = {
      'calm': { 'calm': 1, 'focused': 0.8, 'intense': 0.3, 'chaotic': 0.1, 'expansive': 0.7 },
      'focused': { 'calm': 0.8, 'focused': 1, 'intense': 0.6, 'chaotic': 0.2, 'expansive': 0.4 },
      'intense': { 'calm': 0.3, 'focused': 0.6, 'intense': 1, 'chaotic': 0.8, 'expansive': 0.5 },
      'chaotic': { 'calm': 0.1, 'focused': 0.2, 'intense': 0.8, 'chaotic': 1, 'expansive': 0.6 },
      'expansive': { 'calm': 0.7, 'focused': 0.4, 'intense': 0.5, 'chaotic': 0.6, 'expansive': 1 }
    };
    
    return compatibilityMatrix[energy1]?.[energy2] || 0.5;
  }

  visualizeFlow() {
    const flow = this.flows.get(this.session.current_flow);
    if (!flow) return;

    console.log(`\n🎨 Flow Visualization: ${flow.name}`);
    console.log('='.repeat(60));
    
    // Show components
    console.log('📦 Components:');
    flow.components.forEach(comp => {
      const energy = comp.config.energy ? `⚡${comp.config.energy}` : '';
      const freq = comp.config.frequency ? `📻${comp.config.frequency}Hz` : '';
      const rhythm = comp.config.rhythm ? `🎵${comp.config.rhythm}` : '';
      
      console.log(`   ${this.getComponentIcon(comp.type)} ${comp.config.name || comp.id} ${energy} ${freq} ${rhythm}`);
    });
    
    // Show connections
    if (flow.connections.length > 0) {
      console.log('\n🔗 Connections:');
      flow.connections.forEach(conn => {
        const strength = '●'.repeat(Math.round(conn.strength * 5));
        console.log(`   ${conn.from} ${conn.relationship} ${conn.to} ${strength}`);
      });
    }
    
    console.log(`\n🎯 Creative Score: ${this.session.score}/100`);
  }

  getComponentIcon(type) {
    const icons = {
      'vibe': '✨',
      'line': '〰️',
      'loop': '🔄'
    };
    return icons[type] || '📦';
  }

  exportFlow(flowName) {
    const flow = this.flows.get(flowName || this.session.current_flow);
    if (!flow) {
      console.log('❌ No flow to export');
      return;
    }
    
    const exported = {
      ...flow,
      exported_at: new Date().toISOString(),
      session_insights: this.session.insights,
      creative_score: this.session.score
    };
    
    console.log(`💾 Exported flow: ${flow.name}`);
    return exported;
  }
}

// Example usage and testing
async function demonstrateEnhancedFlows() {
  const builder = new CreativeFlowBuilder();
  
  console.log('🚀 Enhanced Creative Flow Builder Demo');
  console.log('='.repeat(50));
  
  // Show available templates
  builder.listPresets();
  
  // Load and demonstrate a preset
  console.log('Loading Innovation Flow template...\n');
  builder.loadPreset('innovation_flow');
  
  console.log('\n' + '='.repeat(50));
  console.log('🎉 Enhanced open-source features demonstrated!');
  console.log('✅ Interactive Creative Flows');
  console.log('✅ Creative Insights Layer');  
  console.log('✅ Domain Templates');
}

export { CreativeFlowBuilder, demonstrateEnhancedFlows };

// Run demo if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  demonstrateEnhancedFlows().catch(console.error);
}