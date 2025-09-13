# LLV Framework Installation Guide

*Complete setup instructions for the Lines-Loops-Vibes MCP Server*

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- **Node.js** 16+ installed
- **Claude Code** or compatible MCP client
- **Git** for cloning the repository

### 1. Installation Options

#### Option A: NPM Install (Recommended)
```bash
# Install globally from npm
npm install -g llv-helix

# Or use with npx (no installation)
npx llv-helix
```

#### Option B: Clone from Source
```bash
# Clone the repository
git clone https://github.com/suhitanantula/llv-helix.git
cd llv-helix

# Install dependencies
npm install
```

### 2. Test the Installation
```bash
# Test basic MCP server functionality
npm test

# Try the enhanced creative examples
npm run demo

# Experience the interactive creative flows
npm run creative-flows
```

### 3. Add to Claude Code
```bash
# If installed globally
claude mcp add llv-framework npx -- llv-helix

# If cloned from source
claude mcp add llv-framework node -- $(pwd)/index.js
```

### 4. Verify Installation
```bash
# Check that the server is registered
claude mcp list

# Test a basic creative flow
claude "Create a vibe called 'innovation' with focused energy and 75Hz frequency"
```

---

## 🛠️ Detailed Installation Options

### Option 1: Basic MCP Server (Core Functionality)
*Use this for the foundational Lines-Loops-Vibes MCP tools*

```bash
git clone https://github.com/suhitanantula/llv-helix.git
cd llv-helix
npm install
claude mcp add llv-framework node -- $(pwd)/index.js
```

**What you get:**
- Core MCP server with Lines, Loops, Vibes tools
- Basic rhythm and frequency functionality
- System visualization and synchronization

### Option 2: Enhanced Creative Playground (Open Source Features)
*Use this for the interactive creative flows and real-time insights*

```bash
git clone https://github.com/suhitanantula/llv-helix.git
cd llv-helix
npm install

# Run the creative examples
npm run demo
```

**What you get:**
- Interactive Creative Flow Builder
- Real-time creative insights and scoring
- 4 professional domain templates
- Component connection intelligence

### Option 3: Complete Development Setup
*Use this for contributing to the framework or advanced customization*

```bash
git clone https://github.com/suhitanantula/llv-helix.git
cd llv-helix

# Set up development environment
npm install

# Run all tests and examples
npm run test-all
```

**What you get:**
- Complete source code access
- Development tools and testing suites
- Documentation and contribution guidelines
- Access to all features and examples

---

## 📋 Package.json Scripts Reference

```json
{
  "scripts": {
    "start": "node index.js",
    "test": "node test.js",
    "demo": "node enhanced-examples.js",
    "creative-flows": "node creative-flows.js", 
    "enhanced-demo": "node enhanced-examples.js",
    "setup-dev": "npm install",
    "test-all": "node test.js && node enhanced-examples.js"
  }
}
```

---

## 🔧 Configuration Options

### MCP Server Configuration
The server can be configured through environment variables:

```bash
# Set custom port (default: auto-assigned)
export LLV_PORT=8080

# Set log level (default: info)
export LLV_LOG_LEVEL=debug

# Set custom data directory (default: ./llv-data)
export LLV_DATA_DIR=/path/to/data

# Enable/disable data persistence (default: enabled)
export LLV_PERSISTENCE=true

# Start with custom config
npm start
```

### Claude Code Integration

#### Method 1: Command Line (Recommended)
```bash
# Using NPM package (easiest)
claude mcp add llv-framework npx -- llv-helix

# From local installation
claude mcp add llv-framework node -- /path/to/llv-helix/index.js

# With environment variables
claude mcp add llv-framework --env LLV_LOG_LEVEL=debug npx -- llv-helix

# Project-scoped (shared via .mcp.json)
claude mcp add --scope project llv-framework npx -- llv-helix
```

#### Method 2: Manual Configuration (.mcp.json)
For project-specific configuration, create `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "llv-framework": {
      "command": "npx",
      "args": ["-y", "llv-helix"],
      "env": {
        "LLV_LOG_LEVEL": "info"
      }
    }
  }
}
```

**Alternative configurations:**

```json
{
  "mcpServers": {
    "llv-framework": {
      "command": "node",
      "args": ["/path/to/llv-helix/index.js"],
      "env": {
        "LLV_PORT": "8080",
        "LLV_LOG_LEVEL": "debug",
        "LLV_DATA_DIR": "/custom/data/path",
        "LLV_PERSISTENCE": "true"
      }
    }
  }
}
```

```json
{
  "mcpServers": {
    "llv-framework": {
      "command": "npx",
      "args": ["-y", "llv-helix"]
    }
  }
}
```

---

## 🎯 Usage Examples

### Basic MCP Usage
```bash
# After installation, use in Claude Code:
claude "Create a creative flow for innovation"
claude "Add a vibe with chaotic energy and 90Hz frequency"
claude "Connect the components and visualize the system"
claude "Save the current session data"
claude "Load a previous session"
```

### Enhanced Creative Flows
```bash
# Interactive creative session:
node creative-flows.js

# Professional template usage:
claude "Load the innovation catalyst template"
claude "Show me the creative flow score and recommendations"
```

### Development and Customization
```bash
# Create custom templates:
node -e "
const builder = new CreativeFlowBuilder();
builder.createFlow('my_custom_flow', 'Description');
// Add your custom components
"

# Export and share flows:
claude "Export my creative flow for sharing"
```

---

## 🐛 Troubleshooting

### Common Installation Issues

**Issue**: `npm install` fails with dependency errors
```bash
# Solution: Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Claude Code can't find the MCP server
```bash
# Solution: Use absolute path
claude mcp add llv-framework node -- $(pwd)/index.js

# Verify path is correct
ls -la index.js
```

**Issue**: MCP server starts but tools aren't available
```bash
# Solution: Check server logs
claude mcp logs llv-framework

# Restart with debug logging
LLV_LOG_LEVEL=debug claude mcp restart llv-framework
```

**Issue**: Enhanced features not working
```bash
# Solution: Make sure dependencies are installed
npm install

# Try running the demo
npm run demo
```

### Compatibility Issues

**Node.js Version**: Requires Node.js 16+
```bash
# Check version
node --version

# Update if needed (using nvm)
nvm install 16
nvm use 16
```

**Claude Code Version**: Requires compatible MCP client
```bash
# Update Claude Code if needed
claude --version
# Follow Claude Code update instructions
```

---

## 📚 Next Steps

### Learning Resources
1. **Try the Examples**: `npm run demo` for immediate experience
2. **Read the Documentation**: Check `docs/` directory for detailed guides
3. **Join the Community**: GitHub Discussions for questions and sharing
4. **Contribute**: See `CONTRIBUTING.md` for contribution guidelines

### Professional Implementation
For organizations needing:
- Custom framework development
- Team training and implementation  
- Measured creative ROI optimization
- AI-augmented creative intelligence

Contact: [Professional Services](https://www.suhitanantula.com/)

### Development and Contribution
- **GitHub Repository**: https://github.com/suhitanantula/llv-helix
- **Issues and Features**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Join community discussions for questions and sharing
- **Pull Requests**: Contributions welcome following contribution guidelines

---

## ✅ Installation Verification Checklist

- [ ] Node.js 16+ installed
- [ ] Repository cloned successfully
- [ ] Dependencies installed with `npm install`
- [ ] Basic test passes with `npm test`
- [ ] MCP server added to Claude Code
- [ ] Server appears in `claude mcp list`
- [ ] Basic tools work in Claude Code session
- [ ] Demo runs successfully with `npm run demo`

**Installation successful?** You're ready to experience systematic creativity! 🎨

Start with: `npm run demo` or ask Claude to "Create your first creative flow using the LLV Framework"

---

*For additional support, join our community or contact the development team through GitHub.*