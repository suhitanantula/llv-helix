#!/usr/bin/env node

// Enhanced Examples - Showcasing the improved open-source capabilities
import { CreativeFlowBuilder } from './creative-flows.js';

console.log('🎨 LINES-LOOPS-VIBES Enhanced Open Source Demo');
console.log('='.repeat(60));
console.log('✨ Interactive Creative Flows');
console.log('💡 Creative Insights Layer');
console.log('📚 Domain Templates');
console.log('='.repeat(60));

async function runEnhancedExamples() {
  const builder = new CreativeFlowBuilder();
  
  // Example 1: Custom Creative Writing Session
  console.log('\n📖 EXAMPLE 1: Custom Creative Writing Session');
  console.log('-'.repeat(50));
  
  builder.createFlow('mystery_novel', 'Writing a psychological mystery novel');
  
  builder.addComponent('vibe', {
    name: 'dark_atmosphere',
    energy: 'intense',
    frequency: 35,
    rhythm: 'pulsing'
  });
  
  builder.addComponent('line', {
    name: 'plot_progression',
    from: 'clues',
    to: 'revelation',
    rhythm: 'accelerating'
  });
  
  builder.addComponent('loop', {
    name: 'red_herrings',
    type: 'spiral',
    rhythm: 'syncopated'
  });
  
  // Connect the flow
  const components = builder.session.components;
  if (components.length >= 3) {
    builder.connectComponents(components[0].id, components[1].id, 'influences');
    builder.connectComponents(components[1].id, components[2].id, 'creates');
  }
  
  builder.visualizeFlow();
  
  // Example 2: Using a Template
  console.log('\n\n🚀 EXAMPLE 2: Innovation Template for Startup Ideas');
  console.log('-'.repeat(50));
  
  builder.loadPreset('innovation_flow');
  
  // Export the flow
  const exported = builder.exportFlow();
  
  // Example 3: Business Strategy Template
  console.log('\n\n💼 EXAMPLE 3: Business Strategy Template');
  console.log('-'.repeat(50));
  
  builder.loadPreset('strategy_flow');
  
  // Example 4: Artistic Flow Template  
  console.log('\n\n🎨 EXAMPLE 4: Artistic Expression Template');
  console.log('-'.repeat(50));
  
  builder.loadPreset('artistic_flow');
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 Enhanced Open Source Features Summary:');
  console.log('='.repeat(60));
  console.log('✅ Interactive Flow Building - Chain components together');
  console.log('✅ Real-time Creative Insights - Get feedback on your choices');
  console.log('✅ Smart Scoring System - Track your creative flow strength');
  console.log('✅ Domain Templates - Pre-built flows for different use cases');
  console.log('✅ Connection Analysis - Understand component relationships');
  console.log('✅ Export & Share - Save your creative configurations');
  console.log('');
  console.log('💡 This is the open-source "creative playground" version!');
  console.log('🚀 For advanced cognitive modeling and business outcomes,');
  console.log('   explore our professional 6D creativity consulting services.');
  
  return {
    writing_session: builder.flows.get('mystery_novel'),
    innovation_template: exported,
    total_insights: builder.session.insights.length,
    final_score: builder.session.score
  };
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runEnhancedExamples()
    .then(results => {
      console.log(`\n📊 Session Results: ${results.total_insights} insights generated`);
      console.log(`🎯 Final Creative Score: ${results.final_score}/100`);
    })
    .catch(console.error);
}

export { runEnhancedExamples };