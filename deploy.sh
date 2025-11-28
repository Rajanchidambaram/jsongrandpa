#!/bin/bash

# JSON Grandpa - Quick Deploy Script
# This script helps you deploy to GitHub and Vercel

echo "🚀 JSON Grandpa Deployment Helper"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Run: git init"
    exit 1
fi

# Get GitHub username
echo "📝 Enter your GitHub username:"
read GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Set up remote
echo ""
echo "🔗 Setting up GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USERNAME/jsongrandpa.git"

echo ""
echo "✅ Remote configured: https://github.com/$GITHUB_USERNAME/jsongrandpa.git"
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub:"
echo "   👉 https://github.com/new"
echo "   - Name: jsongrandpa"
echo "   - Public repository"
echo "   - Don't initialize with README"
echo ""
echo "2. Then run:"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   👉 https://vercel.com/new"
echo "   - Import your jsongrandpa repository"
echo "   - Click Deploy"
echo ""
echo "🎉 That's it! Your site will be live in minutes."
