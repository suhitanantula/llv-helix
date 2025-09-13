# 🧪 Testing Your Helix Framework MCP Server

*Complete testing guide to ensure everything works perfectly*

---

## ✅ **Quick Status Check**

**Your Helix Framework is ready! Here's what's been verified:**

- ✅ **Basic functionality**: All core tools working
- ✅ **Claude Code integration**: MCP server connected and healthy
- ✅ **Enhanced error handling**: Comprehensive validation added
- ✅ **Data persistence**: Save/load functionality ready
- ✅ **Documentation**: Updated with The Helix Moment branding

---

## 🎯 **Testing Methods**

### **1. Built-in Test Suite**

```bash
# Run the comprehensive test suite
npm test
```

**Expected Output:**
- ✅ create_line works!
- ✅ create_loop works!
- ✅ create_vibe works!
- ✅ visualize_system works!

### **2. Interactive Demo**

```bash
# Experience The Helix Framework in action
npm run demo
```

**What This Tests:**
- Creative flow building
- Component insights generation
- Real-time scoring system
- Template loading
- Visualization engine

### **3. Claude Code Integration**

#### **Add MCP Server:**
```bash
# For local development
claude mcp add llv-helix node -- $(pwd)/index.js

# For published package (when available)
claude mcp add llv-helix npx -- llv-helix
```

#### **Verify Connection:**
```bash
claude mcp list
# Should show: llv-helix: ✓ Connected
```

#### **Test in Claude Code:**
Open Claude Code and try these commands:

```bash
# Basic Helix creation
claude "Create a vibe called 'innovation' with focused energy and 75Hz frequency"

# Strategic workflow
claude "Create a line from 'current_state' to 'ai_transformation' with accelerating rhythm"

# Advanced orchestration
claude "Create a loop called 'learning_cycle' with spiral type and fibonacci rhythm"

# System visualization
claude "Visualize the complete system with rhythm patterns"
```

---

## 🎨 **Practical Examples to Test**

### **Example 1: AI Transformation Strategy**
```bash
# In Claude Code, test this complete workflow:

# 1. Create strategic foundation
claude "Create a vibe called 'org_intelligence' with focused energy and 45Hz frequency"

# 2. Build transformation pathway
claude "Create a line from 'traditional_org' to 'co_intelligent_org' with accelerating rhythm"

# 3. Add learning mechanism
claude "Create a loop called 'capability_building' with spiral type and fibonacci rhythm"

# 4. Apply strategic context
claude "Set context called 'ai_transformation' with creative type, influencing org_intelligence and capability_building"

# 5. Orchestrate the transformation
claude "Synchronize org_intelligence, traditional_org-to-co_intelligent_org, and capability_building"

# 6. Save your strategy
claude "Save this transformation framework as 'q4_ai_strategy'"
```

### **Example 2: Innovation Sprint Planning**
```bash
# Test rapid innovation framework:

# High-energy innovation mode (90Hz)
claude "Create a vibe called 'breakthrough_mode' with chaotic energy and 90Hz frequency"

# Divergent ideation process
claude "Create a loop called 'ideation_sprint' with divergent type and exponential rhythm"

# Solution crystallization
claude "Create a line from 'wild_ideas' to 'viable_solutions' with flowing rhythm"

# Pulse the innovation energy
claude "Pulse breakthrough_mode with 0.9 amplitude for 3 beats"

# Iterate the ideation cycle
claude "Iterate ideation_sprint with input 'what if we completely reimagined our customer onboarding?'"

# Visualize the innovation system
claude "Visualize the system showing rhythm patterns over 12 beats"
```

### **Example 3: Project Recovery Scenario**
```bash
# Test project turnaround framework:

# Assess current project state (60Hz focused execution)
claude "Create a vibe called 'project_health' with focused energy and 60Hz frequency"

# Establish feedback loop for quick wins
claude "Create a loop called 'daily_standup' with convergent type and constant rhythm"

# Clear path to delivery
claude "Create a line from 'current_blockers' to 'delivered_features' with steady rhythm"

# Set collaborative context
claude "Set context called 'team_recovery' with collaborative type, influencing project_health and daily_standup"

# Trace the delivery path
claude "Trace current_blockers-to-delivered_features with speed 1.2 and message 'removing impediments'"

# Check system health
claude "Visualize the complete system"
```

---

## 🛠️ **Advanced Features Testing**

### **Data Persistence**
```bash
# Test session saving/loading:

# Create a framework
claude "Create a vibe called 'strategy_session' with expansive energy and 50Hz"
claude "Create a loop called 'insights_cycle' with spiral type"

# Save the session
claude "Save current session as 'weekly_strategy'"

# Load it back (in a new session)
claude "Load session 'weekly_strategy'"

# Merge with new insights
claude "Load session 'weekly_strategy' with merge enabled"
```

### **Rhythm Composition**
```bash
# Test complex rhythm orchestration:

# Create multiple elements
claude "Create a vibe called 'innovation' with intense energy and 90Hz"
claude "Create a vibe called 'execution' with focused energy and 60Hz"
claude "Create a vibe called 'culture' with expansive energy and 75Hz"

# Compose master rhythm
claude "Compose a rhythm called 'quarterly_rhythm' with components: innovation (weight 0.3), execution (weight 0.5), culture (weight 0.2), tempo 72 BPM"

# Visualize the composition
claude "Visualize system with rhythm patterns over 16 beats"
```

### **Error Handling**
```bash
# Test improved error handling:

# Try invalid operations
claude "Create a line with empty name and missing endpoints"
claude "Synchronize non-existent elements"
claude "Compose rhythm with invalid components"

# Should get helpful error messages with ❌ or ⚠️ indicators
```

---

## 🐛 **Troubleshooting**

### **MCP Server Issues**

**Problem**: `claude mcp list` shows "Failed to connect"
```bash
# Solution: Check file path and permissions
ls -la index.js
node index.js --help  # Should show error about stdin

# Re-add with correct path
claude mcp remove llv-helix
claude mcp add llv-helix node -- $(pwd)/index.js
```

**Problem**: Tools not available in Claude Code
```bash
# Check server logs
claude mcp logs llv-helix

# Restart the server
claude mcp restart llv-helix
```

### **Package Issues**

**Problem**: `npm test` fails
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm test
```

**Problem**: Demo doesn't run
```bash
# Check for missing files
ls -la enhanced-examples.js creative-flows.js
npm run demo
```

### **Persistence Issues**

**Problem**: Data not saving
```bash
# Check environment variable
echo $LLV_PERSISTENCE  # Should be 'true' or empty

# Check directory permissions
ls -la llv-data/  # Should be writable

# Test with explicit environment
LLV_PERSISTENCE=true claude "Save current session"
```

---

## 📊 **Success Indicators**

### ✅ **Everything Working Correctly:**
- `npm test` shows all green checkmarks
- `claude mcp list` shows "✓ Connected"
- Claude Code responds to Helix commands
- System visualizations display properly
- Data saves/loads without errors
- Error messages are helpful and clear

### 🎯 **Performance Benchmarks:**
- MCP server starts in < 2 seconds
- Tool responses appear instantly in Claude Code
- Visualization renders complex systems clearly
- Persistence operations complete quickly
- Error handling provides specific guidance

---

## 🚀 **Next Steps After Testing**

### **If Everything Works:**
1. **Share your success**: Tag #HelixMoment on social media
2. **Join the community**: GitHub discussions and feedback
3. **Book strategy call**: Professional AI transformation consultation
4. **Contribute**: Share templates and use cases

### **If Issues Found:**
1. **Check troubleshooting** section above
2. **Review logs**: `claude mcp logs llv-helix`
3. **Community support**: GitHub issues and discussions
4. **Direct feedback**: Contact through official channels

---

## 💬 **Share Your Testing Results**

We'd love to hear about your experience:

- **GitHub**: Create issue or discussion
- **LinkedIn**: Tag @suhitanantula with your results
- **Twitter/X**: Share with #HelixMoment hashtag
- **Direct**: Strategy discovery call feedback

---

*Your Helix Moment is ready to transform how you approach strategic intelligence!* 🌀✨