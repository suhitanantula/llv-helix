# Lines-Loops-Vibes MCP Server

An MCP server implementing the Lines-Loops-Vibes framework inspired by Suhit Anantula's methodologies for iterative thinking and rhythmic problem-solving.

## Overview

This server provides three distinct types of elements, each with their own rhythmic patterns:

- **Lines** 〰️: Connections or paths between points with different rhythms
- **Loops** 🔄: Iterative cycles with various patterns and behaviors  
- **Vibes** ✨: Energy states and atmospheres with frequency and amplitude

## Installation

```bash
# Install MCP SDK dependency
npm install @modelcontextprotocol/sdk

# Add to Claude Code
claude mcp add lines-loops-vibes node -- /path/to/index.js
```

## Available Tools

### Line Tools
- `create_line`: Create a new line connection with rhythm
- `trace_line`: Send messages along a line with specific speed

### Loop Tools
- `create_loop`: Create an iterative loop with type and rhythm
- `iterate_loop`: Execute one iteration of a loop

### Vibe Tools
- `create_vibe`: Create an energy state with frequency and rhythm
- `pulse_vibe`: Send a pulse through a vibe

### System Tools
- `set_context`: Set context that influences rhythms
- `synchronize`: Sync multiple elements together
- `compose_rhythm`: Compose complex rhythms from components
- `visualize_system`: View the entire system state

## Rhythm Types

### Line Rhythms
- **steady**: Constant flow
- **accelerating**: Building speed
- **pulsing**: On/off pattern
- **syncopated**: Off-beat pattern
- **flowing**: Natural wave-like

### Loop Rhythms  
- **constant**: Unchanging pattern
- **variable**: Changing intervals
- **fibonacci**: Mathematical sequence
- **exponential**: Exponential growth
- **harmonic**: Musical intervals

### Vibe Rhythms
- **ambient**: Atmospheric background
- **driving**: Strong steady beat
- **syncopated**: Complex off-beat
- **polyrhythmic**: Multiple simultaneous rhythms
- **freeform**: Random/improvised

## Context Types

Contexts modify the rhythms of influenced elements:

- **creative**: 1.5x rhythm multiplier
- **analytical**: 0.8x rhythm multiplier  
- **meditative**: 0.5x rhythm multiplier
- **collaborative**: 1.2x rhythm multiplier
- **experimental**: 2.0x rhythm multiplier

## Example Usage

```javascript
// Create elements
create_line("thought_flow", "problem", "solution", "flowing")
create_loop("iterate", "convergent", "fibonacci") 
create_vibe("focus", "intense", 80, "driving")

// Set context
set_context("creative_session", "creative", ["thought_flow", "iterate"])

// Use elements
trace_line("thought_flow", 1.2, "exploring possibilities")
iterate_loop("iterate", "new insight")
pulse_vibe("focus", 0.8, 2)

// Synchronize system
synchronize(["thought_flow", "iterate", "focus"], "creative_flow")

// View system
visualize_system(true, 16)
```

This creates a synchronized creative thinking system where lines, loops, and vibes work together with context-influenced rhythms.