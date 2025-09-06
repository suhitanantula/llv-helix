// Creative Writing & Storytelling Lab with 6D Creativity System
import { VerboseCreativeMode } from './verbose_creativity_diagnostic.js';

class CreativeWritingLab {
  constructor() {
    this.writing_log = [];
    this.story_elements = new Map();
    this.narrative_layers = [];
    this.literary_analysis = {};
  }
  
  async developStory(writingChallenge) {
    console.log("\n" + "✍️".repeat(50));
    console.log("📚 CREATIVE WRITING LAB SESSION");  
    console.log("✍️".repeat(50));
    
    // PHASE 1: Deep Character & World Building (18Hz)
    console.log("\n" + "=".repeat(80));
    console.log("🎭 PHASE 1: DEEP CHARACTER & WORLD BUILDING");
    console.log("=".repeat(80));
    
    const worldbuilding_mode = new VerboseCreativeMode({
      frequency: 18,        // Ultra-deep contemplative thinking
      amplitude: 0.4,       // Gentle, reflective approach
      speed: 0.3,           // Extremely thorough development 
      duration: 20,         // Very long-term persistence
      energy: 'calm',       // Peaceful, meditative
      rhythm: 'ambient'     // Flowing background processing
    });
    
    const character_development = await worldbuilding_mode.generateCreativeOutputVerbose(
      `Create deep, complex characters and rich world-building for: ${writingChallenge}`,
      { problem_type: 'character_development', time_constraint: 'deep_exploration', phase: 'worldbuilding' }
    );
    
    this.logWritingStep('CHARACTER_WORLDBUILDING', character_development);
    
    // PHASE 2: Plot Structure & Narrative Design (65Hz)
    console.log("\n" + "=".repeat(80));
    console.log("📖 PHASE 2: PLOT STRUCTURE & NARRATIVE DESIGN");  
    console.log("=".repeat(80));
    
    const structure_mode = new VerboseCreativeMode({
      frequency: 65,        // Balanced systematic thinking
      amplitude: 0.7,       // Strong structural focus
      speed: 1.2,           // Efficient plotting
      duration: 12,         // Medium-term development
      energy: 'focused',    // Goal-oriented storytelling
      rhythm: 'driving'     // Forward narrative momentum
    });
    
    const plot_structure = await structure_mode.generateCreativeOutputVerbose(
      `Design compelling plot structure and narrative architecture for: ${writingChallenge}`,
      { problem_type: 'narrative_structure', time_constraint: 'systematic_development', phase: 'plotting' }
    );
    
    this.logWritingStep('PLOT_STRUCTURE', plot_structure);
    
    // PHASE 3: Experimental Narrative Innovation (95Hz)  
    console.log("\n" + "=".repeat(80));
    console.log("🎪 PHASE 3: EXPERIMENTAL NARRATIVE INNOVATION");
    console.log("=".repeat(80));
    
    const experimental_mode = new VerboseCreativeMode({
      frequency: 95,        // Ultra-high experimental thinking
      amplitude: 0.92,      // Maximum creative force
      speed: 2.5,           // Rapid creative iteration
      duration: 4,          // Short experimental bursts  
      energy: 'chaotic',    // Wild literary experimentation
      rhythm: 'freeform'    // No narrative constraints
    });
    
    const narrative_innovation = await experimental_mode.generateCreativeOutputVerbose(
      `Generate experimental narrative techniques and innovative storytelling approaches for: ${writingChallenge}`,
      { problem_type: 'narrative_innovation', time_constraint: 'creative_breakthrough', phase: 'experimentation' }
    );
    
    this.logWritingStep('NARRATIVE_INNOVATION', narrative_innovation);
    
    // PHASE 4: Literary Synthesis & Style Development
    console.log("\n" + "=".repeat(80));
    console.log("🎨 PHASE 4: LITERARY SYNTHESIS & STYLE DEVELOPMENT");
    console.log("=".repeat(80));
    
    const synthesis_result = this.synthesizeLiteraryWork();
    
    return {
      complete_story_concept: synthesis_result,
      character_worldbuilding: character_development,
      plot_structure: plot_structure, 
      narrative_innovation: narrative_innovation,
      writing_roadmap: this.generateWritingRoadmap(),
      full_diagnostic_log: this.writing_log
    };
  }
  
  logWritingStep(phase, result) {
    const step = {
      phase: phase,
      timestamp: new Date().toISOString(),
      creative_output: result.creative_output,
      confidence: result.confidence,
      mode_used: result.mode_used,
      quality_metrics: result.quality_metrics,
      internal_reasoning: result.diagnostic_log
    };
    
    this.writing_log.push(step);
    
    console.log(`\n📊 ${phase} WRITING SUMMARY:`);
    console.log("-".repeat(50));
    console.log(`Creative Output: ${result.creative_output}`);
    console.log(`Confidence Level: ${(result.confidence * 100).toFixed(0)}%`);
    console.log(`Processing Stages: ${result.processing_stages}`);
    console.log(`Creative Intensity: ${result.mode_used.calculated_properties.creative_intensity}`);
    
    // Extract literary techniques from the creative output
    const literary_techniques = this.extractLiteraryTechniques(result.creative_output, phase);
    console.log(`\n✍️ LITERARY TECHNIQUES EXTRACTED:`);
    literary_techniques.forEach((technique, index) => {
      console.log(`   ${index + 1}. ${technique}`);
    });
    
    return step;
  }
  
  extractLiteraryTechniques(creative_output, phase) {
    const techniques = [];
    
    switch (phase) {
      case 'CHARACTER_WORLDBUILDING':
        if (creative_output.includes('systematic') || creative_output.includes('methodical')) {
          techniques.push("Develop detailed character backstories with psychological depth");
          techniques.push("Create immersive world with consistent internal logic and history");  
          techniques.push("Build character relationships through shared experiences and conflicts");
        }
        if (creative_output.includes('gentle') || creative_output.includes('gradual')) {
          techniques.push("Use subtle character reveals through actions rather than exposition");
          techniques.push("Layer world-building details throughout narrative organically");
        }
        if (creative_output.includes('reflective') || creative_output.includes('contemplation')) {
          techniques.push("Incorporate philosophical themes through character introspection");
          techniques.push("Create symbolic elements that reflect deeper meanings");
        }
        break;
        
      case 'PLOT_STRUCTURE':
        if (creative_output.includes('systematic') || creative_output.includes('balanced')) {
          techniques.push("Employ three-act structure with well-defined turning points");
          techniques.push("Create parallel plot threads that converge meaningfully");
          techniques.push("Build tension through escalating conflicts and stakes");
        }
        if (creative_output.includes('focused') || creative_output.includes('goal-oriented')) {
          techniques.push("Drive narrative through clear character motivations and goals");
          techniques.push("Use foreshadowing and setup-payoff patterns effectively");
        }
        if (creative_output.includes('momentum') || creative_output.includes('driving')) {
          techniques.push("Maintain narrative pace through strategic scene transitions");
          techniques.push("Create chapter/section hooks that compel continued reading");
        }
        break;
        
      case 'NARRATIVE_INNOVATION':  
        if (creative_output.includes('experimental') || creative_output.includes('breakthrough')) {
          techniques.push("Experiment with non-linear narrative structure and time manipulation");
          techniques.push("Use unreliable narrators or multiple perspective shifts");
          techniques.push("Incorporate multimedia elements or unconventional formatting");
        }
        if (creative_output.includes('chaotic') || creative_output.includes('rule-breaking')) {
          techniques.push("Break fourth wall or challenge reader expectations deliberately");
          techniques.push("Blend genres in unexpected ways to create unique hybrid forms");
          techniques.push("Use stream-of-consciousness or experimental prose techniques");
        }
        if (creative_output.includes('wild') || creative_output.includes('unpredictable')) {
          techniques.push("Create metafictional elements that comment on the storytelling process");
          techniques.push("Experiment with interactive or choose-your-own-adventure elements");
        }
        break;
    }
    
    // Add phase-agnostic techniques based on creative output patterns
    if (creative_output.includes('emotion') || creative_output.includes('feeling')) {
      techniques.push("Evoke strong emotional responses through sensory details and imagery");
    }
    
    if (creative_output.includes('dialogue') || creative_output.includes('voice')) {
      techniques.push("Develop distinct character voices through dialogue and internal monologue");
    }
    
    if (creative_output.includes('theme') || creative_output.includes('meaning')) {
      techniques.push("Weave thematic elements seamlessly into plot and character development");
    }
    
    return techniques.length > 0 ? techniques : ["Develop customized narrative approach based on creative insights"];
  }
  
  synthesizeLiteraryWork() {
    console.log("\n🔄 SYNTHESIZING COMPLETE LITERARY WORK...");
    console.log("-".repeat(60));
    
    const synthesis = {
      writing_phases: this.writing_log.map(step => ({
        phase: step.phase,
        frequency_used: step.mode_used.parameters.frequency,
        energy_type: step.mode_used.parameters.energy,
        confidence: step.confidence,
        key_techniques: this.extractLiteraryTechniques(step.creative_output, step.phase)
      })),
      
      writing_timeline: this.generateWritingTimeline(),
      creative_analysis: this.analyzeLiteraryParameters(),
      artistic_merit: this.assessArtisticMerit(),
      narrative_coherence: this.evaluateNarrativeCoherence(),
      innovation_level: this.calculateLiteraryInnovation()
    };
    
    console.log("\n📊 SYNTHESIS RESULTS:");
    console.log(`   Writing Development Phases: ${synthesis.writing_phases.length}`);
    console.log(`   Writing Timeline: ${synthesis.writing_timeline.total_duration}`);
    console.log(`   Innovation Score: ${synthesis.innovation_level.overall_score}/10`);
    console.log(`   Artistic Merit: ${synthesis.artistic_merit.assessment}`);
    
    return synthesis;
  }
  
  generateWritingTimeline() {
    return {
      phase_1_worldbuilding: "Weeks 1-4: Deep character and world development",
      phase_2_plotting: "Weeks 3-8: Plot structure and narrative design", 
      phase_3_experimentation: "Weeks 6-7: Innovative technique integration",
      phase_4_writing: "Weeks 8-16: First draft composition",
      phase_5_revision: "Weeks 16-20: Editing and refinement",
      total_duration: "4-5 months for completed manuscript",
      parallel_execution: "Worldbuilding continues through plotting, experimentation informs writing process"
    };
  }
  
  analyzeLiteraryParameters() {
    const frequencies = this.writing_log.map(step => 
      parseFloat(step.mode_used.parameters.frequency.replace('Hz', ''))
    );
    
    return {
      frequency_range: `${Math.min(...frequencies)}Hz - ${Math.max(...frequencies)}Hz`,
      cognitive_progression: "Deep Contemplation (18Hz) → Structured Plotting (65Hz) → Experimental Innovation (95Hz)",
      energy_evolution: "calm → focused → chaotic",
      rhythm_evolution: "ambient → driving → freeform",
      literary_sequence: "Confirmed: Ultra-low→Mid→Ultra-high frequency progression optimal for comprehensive storytelling"
    };
  }
  
  assessArtisticMerit() {
    const avg_confidence = this.writing_log.reduce((sum, step) => sum + step.confidence, 0) / this.writing_log.length;
    
    let merit_score = 0;
    let factors = [];
    
    // Deep character work contributes to literary depth
    const worldbuilding_confidence = this.writing_log.find(step => step.phase === 'CHARACTER_WORLDBUILDING')?.confidence || 0;
    if (worldbuilding_confidence > 0.6) {
      merit_score += 3;
      factors.push("Deep character and world development");
    }
    
    // Strong structural work indicates solid craftsmanship
    const structure_confidence = this.writing_log.find(step => step.phase === 'PLOT_STRUCTURE')?.confidence || 0;
    if (structure_confidence > 0.65) {
      merit_score += 3;
      factors.push("Strong narrative structure and plotting");
    }
    
    // Innovation contributes to artistic originality
    const innovation_confidence = this.writing_log.find(step => step.phase === 'NARRATIVE_INNOVATION')?.confidence || 0;
    if (innovation_confidence > 0.7) {
      merit_score += 4;
      factors.push("High narrative innovation and experimental techniques");
    }
    
    return {
      score: merit_score,
      assessment: merit_score >= 8 ? 'HIGH' : merit_score >= 5 ? 'MODERATE' : 'DEVELOPING',
      artistic_factors: factors,
      overall_confidence: avg_confidence
    };
  }
  
  evaluateNarrativeCoherence() {
    const structure_step = this.writing_log.find(step => step.phase === 'PLOT_STRUCTURE');
    const innovation_step = this.writing_log.find(step => step.phase === 'NARRATIVE_INNOVATION');
    
    let coherence_score = 5; // Base score
    let strengths = [];
    let challenges = [];
    
    // Strong structural foundation improves coherence
    if (structure_step?.confidence > 0.6) {
      coherence_score += 2;
      strengths.push("Solid structural foundation");
    }
    
    // Very high innovation may create coherence challenges
    if (innovation_step?.mode_used.calculated_properties.creative_intensity.includes('200%+')) {
      coherence_score -= 1;
      challenges.push("High innovation complexity may require careful integration");
    }
    
    // Focused energy in structure phase helps coherence
    if (structure_step?.mode_used.parameters.energy === 'focused') {
      coherence_score += 1;
      strengths.push("Goal-oriented narrative development");
    }
    
    // Balanced approach across phases
    const frequency_range = Math.max(...this.writing_log.map(s => parseFloat(s.mode_used.parameters.frequency.replace('Hz', '')))) - 
                           Math.min(...this.writing_log.map(s => parseFloat(s.mode_used.parameters.frequency.replace('Hz', ''))));
    if (frequency_range > 60) {
      strengths.push("Wide cognitive range ensures comprehensive development");
    }
    
    return {
      score: Math.max(1, Math.min(10, coherence_score)),
      assessment: coherence_score >= 7 ? 'HIGH' : coherence_score >= 4 ? 'MODERATE' : 'NEEDS_WORK',
      narrative_strengths: strengths,
      potential_challenges: challenges
    };
  }
  
  calculateLiteraryInnovation() {
    let innovation_score = 0;
    let innovation_factors = [];
    
    this.writing_log.forEach(step => {
      // Ultra-high frequency contributes significantly to innovation
      const frequency = parseFloat(step.mode_used.parameters.frequency.replace('Hz', ''));
      if (frequency > 85) {
        innovation_score += 4;
        innovation_factors.push(`Ultra-high frequency narrative experimentation (${frequency}Hz)`);
      } else if (frequency < 25) {
        innovation_score += 2;
        innovation_factors.push(`Deep contemplative development (${frequency}Hz)`);
      } else if (frequency > 50) {
        innovation_score += 1;
        innovation_factors.push(`Structured creative development (${frequency}Hz)`);
      }
      
      // Chaotic energy increases literary experimentation
      if (step.mode_used.parameters.energy === 'chaotic') {
        innovation_score += 3;
        innovation_factors.push("Chaotic energy for experimental narrative techniques");
      }
      
      // Experimental phases with high creative intensity
      const intensity = step.mode_used.calculated_properties.creative_intensity;
      if (intensity.includes('200%') || intensity.includes('250%+')) {
        innovation_score += 3;
        innovation_factors.push("Maximum creative intensity for breakthrough storytelling");
      }
      
      // High quality metrics in innovation potential
      if (step.quality_metrics.innovation_potential > 0.75) {
        innovation_score += 2;
        innovation_factors.push("High measured innovation potential in narrative techniques");
      }
    });
    
    return {
      overall_score: Math.min(10, innovation_score),
      innovation_factors: innovation_factors,
      literary_breakthrough_probability: innovation_score >= 10 ? 'VERY_HIGH' : innovation_score >= 7 ? 'HIGH' : innovation_score >= 4 ? 'MODERATE' : 'TRADITIONAL'
    };
  }
  
  generateWritingRoadmap() {
    const last_step = this.writing_log[this.writing_log.length - 1];
    const avg_confidence = this.writing_log.reduce((sum, step) => sum + step.confidence, 0) / this.writing_log.length;
    
    const roadmap = {
      immediate_next_steps: [],
      parameter_optimizations: {},
      writing_experiments: [],
      publishing_strategy: []
    };
    
    if (avg_confidence < 0.7) {
      roadmap.immediate_next_steps.push("Conduct parameter tuning for optimal creative flow");
      roadmap.parameter_optimizations.frequency_adjustment = "+3Hz for enhanced narrative innovation";
    }
    
    if (last_step.confidence > 0.8) {
      roadmap.immediate_next_steps.push("Begin experimental narrative composition");
      roadmap.writing_experiments.push("Test ultra-high frequency modes (98Hz+) for avant-garde techniques");
    }
    
    roadmap.writing_experiments = [
      "Experiment with different frequency combinations for various scenes",
      "Test rhythm pattern variations for different narrative moods",
      "Explore energy type blending for complex character perspectives",
      "Try multi-frequency writing sessions for layered storytelling"
    ];
    
    // Add specific writing development recommendations
    roadmap.writing_development_recommendations = [
      "Create character frequency profiles for consistent voice development",
      "Use low-frequency modes for deep backstory and world-building sessions",
      "Apply high-frequency modes for action scenes and experimental passages",
      "Establish feedback loops between different frequency modes during revision"
    ];
    
    roadmap.publishing_strategy = [
      "Consider experimental/literary fiction markets for innovative techniques",
      "Target readers interested in genre-blending and experimental narratives",
      "Build author platform around creative process transparency",
      "Document frequency-based writing process for craft articles and workshops"
    ];
    
    return roadmap;
  }
}

// Execute creative writing test
async function testCreativeWriting() {
  const writingLab = new CreativeWritingLab();
  
  // Test with a complex creative writing challenge
  const writingChallenge = "Write a psychological thriller where the protagonist's memories are being altered by an unknown force, but they're unsure if it's technology, mental illness, or something supernatural";
  
  console.log(`\n🎯 TESTING CREATIVE WRITING FOR: ${writingChallenge}`);
  
  const complete_story = await writingLab.developStory(writingChallenge);
  
  console.log("\n" + "📚".repeat(50)); 
  console.log("✍️ COMPLETE STORY DEVELOPMENT READY");
  console.log("📚".repeat(50));
  
  return complete_story;
}

export { CreativeWritingLab, testCreativeWriting };

// Run creative writing test if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testCreativeWriting()
    .then(result => {
      console.log("\n" + "=".repeat(100));
      console.log("📋 FINAL CREATIVE WRITING SUMMARY");  
      console.log("=".repeat(100));
      console.log(JSON.stringify(result.complete_story_concept, null, 2));
    })
    .catch(console.error);
}