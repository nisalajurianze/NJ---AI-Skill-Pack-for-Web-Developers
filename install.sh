#!/bin/bash

# NJ Global Skill Pack Installer (Mac/Linux)

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/skills"
GEMINI_DIR="$HOME/.gemini/config/skills"
CODEX_DIR="$HOME/.codex/skills"

echo -e "\033[1;36m=========================================\033[0m"
echo -e "\033[1;36m Installing NJ Global Skill Pack... \033[0m"
echo -e "\033[1;36m=========================================\033[0m"

# Create target directories
if [ ! -d "$GEMINI_DIR" ]; then
    mkdir -p "$GEMINI_DIR"
    echo -e "\033[1;32m[+] Created Gemini skills directory\033[0m"
fi

if [ ! -d "$CODEX_DIR" ]; then
    mkdir -p "$CODEX_DIR"
    echo -e "\033[1;32m[+] Created Codex skills directory\033[0m"
fi

# Copy skills
echo -e "\033[1;33m[*] Copying skills to $GEMINI_DIR...\033[0m"
cp -R "$SOURCE_DIR/"* "$GEMINI_DIR/"

echo -e "\033[1;33m[*] Copying skills to $CODEX_DIR...\033[0m"
cp -R "$SOURCE_DIR/"* "$CODEX_DIR/"

echo -e "\033[1;36m=========================================\033[0m"
echo -e "\033[1;32m Installation Complete! \033[0m"
echo -e "\033[1;37m Please restart your AI Assistant (Codex/Gemini) to load the new skills.\033[0m"
echo -e "\033[1;36m=========================================\033[0m"
