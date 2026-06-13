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

// Define target directories
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

const targetDirs = getTargetDirs();

console.log(`\n=========================================`);
console.log(` NJ Global Skill Pack Installer`);
console.log(` Mode: ${isUninstall ? 'Uninstall' : 'Install'} (${isLocal ? 'Local' : 'Global'})`);
console.log(`=========================================\n`);

if (isUninstall) {
    targetDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            console.log(`[*] Removing skills from ${dir}...`);
            // We only remove the skills that are part of this pack
            const skills = fs.readdirSync(sourceDir);
            skills.forEach(skill => {
                const targetPath = path.join(dir, skill);
                if (fs.existsSync(targetPath)) {
                    fs.rmSync(targetPath, { recursive: true, force: true });
                }
            });
        }
    });
    console.log(`\n[+] Uninstallation Complete!`);
} else {
    targetDirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`[+] Created directory: ${dir}`);
        }
        
        console.log(`[*] Copying skills to ${dir}...`);
        const skills = fs.readdirSync(sourceDir);
        skills.forEach(skill => {
            const skillSource = path.join(sourceDir, skill);
            const skillTarget = path.join(dir, skill);
            
            // Backup existing skill if it exists
            if (fs.existsSync(skillTarget)) {
                const backupPath = `${skillTarget}.backup`;
                console.log(`    [i] Backing up existing ${skill} to ${skill}.backup`);
                if (fs.existsSync(backupPath)) {
                    fs.rmSync(backupPath, { recursive: true, force: true });
                }
                fs.renameSync(skillTarget, backupPath);
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
    console.log(`\n=========================================`);
    console.log(` Installation Complete! `);
    console.log(` Please restart your AI Assistant to load the new skills.`);
    console.log(`=========================================\n`);
}
