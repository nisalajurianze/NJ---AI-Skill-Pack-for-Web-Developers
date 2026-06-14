const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const isUninstall = args.includes('--uninstall');
const isLocal = args.includes('--local');

const sourceDir = path.join(__dirname, 'skills');

if (!fs.existsSync(sourceDir)) {
    console.error(`[Error] Skills directory not found at ${sourceDir}`);
    console.error(`Please ensure you are running this script from the root of the repository.`);
    process.exit(1);
}

// Define target directories for skills
const getTargetDirs = () => {
    if (isLocal) {
        const cwd = process.cwd();
        return [
            path.join(cwd, '.gemini', 'config', 'skills'),
            path.join(cwd, '.codex', 'skills'),
            path.join(cwd, '.cursor', 'rules'),
            path.join(cwd, '.claude', 'rules')
        ];
    } else {
        const home = os.homedir();
        return [
            path.join(home, '.gemini', 'config', 'skills'),
            path.join(home, '.codex', 'skills'),
            path.join(home, '.cursor', 'rules'),
            path.join(home, '.claude', 'rules')
        ];
    }
};

// Define global instructions files mapping
const getGlobalInstructionsMapping = () => {
    const home = os.homedir();
    const cwd = process.cwd();
    
    if (isLocal) {
        return [
            { src: 'global_instructions.md', dest: path.join(cwd, '.gemini', 'config', 'global_instructions.md') },
            { src: 'global_instructions.md', dest: path.join(cwd, '.codex', 'global_instructions.md') },
            { src: 'global_instructions.md', dest: path.join(cwd, '.cursorrules') },
            { src: 'global_instructions.md', dest: path.join(cwd, 'CLAUDE.md') }
        ];
    } else {
        return [
            { src: 'global_instructions.md', dest: path.join(home, '.gemini', 'config', 'global_instructions.md') },
            { src: 'global_instructions.md', dest: path.join(home, '.codex', 'global_instructions.md') },
            { src: 'global_instructions.md', dest: path.join(home, '.cursor', 'rules', 'global_instructions.md') },
            { src: 'global_instructions.md', dest: path.join(home, '.claude', 'CLAUDE.md') }
        ];
    }
};

const targetDirs = getTargetDirs();
const globalInstructionsSource = path.join(__dirname, 'global_instructions.md');

console.log(`\n=========================================`);
console.log(` NJ Global Skill Pack Installer`);
console.log(` Mode: ${isUninstall ? 'Uninstall' : 'Install'} (${isLocal ? 'Local' : 'Global'})`);
console.log(`=========================================\n`);

try {
    if (isUninstall) {
        // Remove skills folders
        targetDirs.forEach(dir => {
            if (fs.existsSync(dir)) {
                console.log(`[*] Removing skills from ${dir}...`);
                const skills = fs.readdirSync(sourceDir);
                skills.forEach(skill => {
                    const targetPath = path.join(dir, skill);
                    if (fs.existsSync(targetPath)) {
                        fs.rmSync(targetPath, { recursive: true, force: true });
                    }
                });
            }
        });

        // Remove global instructions files
        const mappings = getGlobalInstructionsMapping();
        mappings.forEach(mapping => {
            if (fs.existsSync(mapping.dest)) {
                console.log(`[*] Removing global instructions from ${mapping.dest}...`);
                fs.rmSync(mapping.dest, { force: true });
            }
        });
        
        console.log(`\n[+] Uninstallation Complete!`);
    } else {
        // Install skills folders
        targetDirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                console.log(`[+] Created directory: ${dir}`);
            } else {
                // Clean up any legacy nisal-* or *.backup folders in the target directory
                const existingItems = fs.readdirSync(dir);
                existingItems.forEach(item => {
                    if (item.startsWith('nisal-') || item.endsWith('.backup')) {
                        const legacyPath = path.join(dir, item);
                        console.log(`    [i] Cleaned legacy/backup folder: ${item}`);
                        fs.rmSync(legacyPath, { recursive: true, force: true });
                    }
                });
            }
            
            console.log(`[*] Copying skills to ${dir}...`);
            const skills = fs.readdirSync(sourceDir);
            skills.forEach(skill => {
                const skillSource = path.join(sourceDir, skill);
                const skillTarget = path.join(dir, skill);
                
                // Remove existing skill folder directly if it exists (prevents duplicate indexing in AI assistant)
                if (fs.existsSync(skillTarget)) {
                    fs.rmSync(skillTarget, { recursive: true, force: true });
                }
                
                // Simple recursive copy
                const copyRecursiveSync = (src, dest) => {
                    const exists = fs.existsSync(src);
                    const stats = exists && fs.statSync(src);
                    const isDirectory = exists && stats.isDirectory();
                    if (isDirectory) {
                        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
                        fs.readdirSync(src).forEach(childItemName => {
                            copyRecursiveSync(path.join(src, childItemName),
                                              path.join(dest, childItemName));
                        });
                    } else {
                        fs.copyFileSync(src, dest);
                    }
                };
                
                copyRecursiveSync(skillSource, skillTarget);
            });
        });

        // Install global instructions files
        console.log(`\n[*] Copying global instructions and workspace rules...`);
        const mappings = getGlobalInstructionsMapping();
        if (fs.existsSync(globalInstructionsSource)) {
            mappings.forEach(mapping => {
                const targetParent = path.dirname(mapping.dest);
                if (!fs.existsSync(targetParent)) {
                    fs.mkdirSync(targetParent, { recursive: true });
                    console.log(`[+] Created directory: ${targetParent}`);
                }
                
                // Backup existing file if it exists
                if (fs.existsSync(mapping.dest)) {
                    const backupPath = `${mapping.dest}.backup`;
                    console.log(`    [i] Backing up existing ${path.basename(mapping.dest)} to ${path.basename(mapping.dest)}.backup`);
                    if (fs.existsSync(backupPath)) {
                        fs.rmSync(backupPath, { force: true });
                    }
                    fs.renameSync(mapping.dest, backupPath);
                }
                
                fs.copyFileSync(globalInstructionsSource, mapping.dest);
                console.log(`[+] Installed instructions to: ${mapping.dest}`);
            });
        } else {
            console.warn(`[Warning] Source global_instructions.md not found at ${globalInstructionsSource}`);
        }

        console.log(`\n=========================================`);
        console.log(` Installation Complete! `);
        console.log(` Please restart your AI Assistant to load the new skills.`);
        console.log(`=========================================\n`);
    }
} catch (error) {
    console.error(`\n[FATAL ERROR] Operation failed: ${error.message}`);
    console.error(`Please make sure you have sufficient read/write permissions to target directories.`);
    if (process.platform !== 'win32') {
        console.error(`Try running with elevated privileges: sudo node install.js`);
    } else {
        console.error(`Try running your terminal/command prompt as Administrator.`);
    }
    process.exit(1);
}
