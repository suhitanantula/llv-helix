# LLV Framework Quick Start Guide

*Get systematic creativity running in 5 minutes*

---

## 🚀 Ultra-Quick Setup

```bash
# 1. Clone & Install
git clone https://github.com/thegreenguy1012/LLV-MCP.git
cd LLV-MCP
npm install

# 2. Test Basic Functionality
npm test

# 3. Experience Enhanced Features
npm run demo

# 4. Try Interactive Creative Flows
npm run creative-flows
```

## 🎯 Choose Your Experience

### 🎨 **Creative Playground** (Enhanced Open Source)
*Interactive flows, real-time insights, professional templates*

```bash
# You're already on enhanced-open-source branch
npm run demo
npm run creative-flows
```

**What you get:**
- ✨ Interactive Creative Flow Builder
- 💡 Real-time creative insights and scoring (0-100+)
- 📚 4 professional templates (Innovation, Strategy, Writing, Artistic)
- 🔗 Component connection intelligence

### ⚙️ **MCP Server** (Core Tools)
*Basic Lines-Loops-Vibes MCP functionality*

**Option A: Command Line (Development)**
```bash
# Add to Claude Code
claude mcp add llv-framework node -- $(pwd)/index.js

# Test in Claude
claude "Create a vibe with focused energy and 60Hz frequency"
```

**Option B: Configuration File (Production)**
```json
{
  "mcpServers": {
    "llv-framework": {
      "command": "npx",
      "args": ["-y", "@llv/mcp-server"]
    }
  }
}
```

**What you get:**
- Core MCP server with Lines, Loops, Vibes tools
- System visualization and synchronization
- Basic rhythm and frequency functionality

## 🎪 Try These Examples

### 1. **Innovation Challenge**
```bash
npm run creative-flows
# Select: innovation_flow template
# Watch: Real-time creative scoring and insights
```

### 2. **Business Strategy Session**  
```bash
npm run demo
# See: Strategic Planning Flow in action
# Result: 125+ creative flow scores
```

### 3. **Custom Creative Flow**
```javascript
// In creative-flows.js or your own script:
import { CreativeFlowBuilder } from './creative-flows.js';

const builder = new CreativeFlowBuilder();
builder.createFlow('my_challenge', 'Your creative challenge');
builder.addComponent('vibe', { 
  name: 'innovation_mode', 
  energy: 'chaotic', 
  frequency: 90 
});
// → Get real-time insights and scoring
```

## 🔧 Common Commands

```bash
# Test everything works
npm test

# Run enhanced creative examples
npm run demo

# Try interactive creative flows
npm run creative-flows

# Use as MCP server in Claude
claude mcp add llv-framework node -- $(pwd)/index.js

# Check MCP server is registered
claude mcp list

# View detailed installation guide
cat INSTALLATION.md
```

## 💡 Quick Tips

**For Developers:**
- Check out `creative-flows.js` for the Creative Flow Builder API
- Extend templates in the `initializePresets()` function
- All examples are in `enhanced-examples.js`

**For Business Users:**
- Try the Strategic Planning template for business challenges
- Use creative scoring to optimize brainstorming sessions
- Export flows for sharing with teams

**For Creatives:**
- Artistic and Writing templates provide structured creativity
- Experiment with different frequency ranges (20Hz-90Hz)
- Connection intelligence helps understand creative relationships

## ❓ Need Help?

- **Installation Issues**: See [INSTALLATION.md](INSTALLATION.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)  
- **Community**: GitHub Discussions
- **Professional Services**: [suhitanantula.com](https://www.suhitanantula.com/)

## 🎉 You're Ready!

**Next Steps:**
1. Try `npm run demo` to see systematic creativity in action
2. Experiment with `npm run creative-flows` for interactive flows
3. Join the community and share your creative applications
4. Explore professional services for business transformation

**Welcome to systematic creativity!** 🎨

---

*The LLV Framework - transforming creativity from art to science*