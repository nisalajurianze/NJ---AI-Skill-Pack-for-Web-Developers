const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, 'skills');

if (!fs.existsSync(skillsDir)) {
  console.error(`[Error] Skills directory not found at ${skillsDir}`);
  process.exit(1);
}

const skillFolders = fs.readdirSync(skillsDir).filter(name => {
  return fs.statSync(path.join(skillsDir, name)).isDirectory();
});

let failed = false;

console.log(`\n=========================================`);
console.log(` NJ AI Skill Pack - Audit Quality Gate`);
console.log(`=========================================\n`);

skillFolders.forEach(folder => {
  const filePath = path.join(skillsDir, folder, 'SKILL.md');
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] ${folder}: Missing SKILL.md file.`);
    failed = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Check YAML Frontmatter
  const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
  if (!frontmatterMatch) {
    console.error(`[FAIL] ${folder}: Missing or invalid YAML frontmatter.`);
    failed = true;
    return;
  }

  const yamlContent = frontmatterMatch[1];
  const yamlLines = yamlContent.split('\n');
  let nameField = '';
  let descField = '';

  yamlLines.forEach(line => {
    if (line.startsWith('name:')) {
      nameField = line.slice(5).trim();
    }
    if (line.startsWith('description:')) {
      descField = line.slice(12).trim();
    }
  });

  if (!nameField) {
    console.error(`[FAIL] ${folder}: Missing 'name' field in YAML frontmatter.`);
    failed = true;
  } else if (nameField !== folder) {
    console.error(`[FAIL] ${folder}: YAML frontmatter name '${nameField}' does not match folder name '${folder}'.`);
    failed = true;
  }

  if (!descField) {
    console.error(`[FAIL] ${folder}: Missing 'description' field in YAML frontmatter.`);
    failed = true;
  }

  // 2. Check H1 Title
  const hasH1 = content.split('\n').some(line => line.startsWith('# ') && !line.startsWith('#  '));
  if (!hasH1) {
    console.error(`[FAIL] ${folder}: Missing H1 title header (#).`);
    failed = true;
  }

  // 3. Check Purpose Section
  const purposeIndex = content.indexOf('## Purpose');
  if (purposeIndex === -1) {
    console.error(`[FAIL] ${folder}: Missing '## Purpose' section.`);
    failed = true;
  } else {
    // Check if purpose content exists
    const nextHeadingIndex = content.indexOf('\n#', purposeIndex + 10);
    const afterPurpose = nextHeadingIndex !== -1 ? content.slice(purposeIndex + 10, nextHeadingIndex) : content.slice(purposeIndex + 10);
    if (afterPurpose.trim().length === 0 || afterPurpose.trim().startsWith('##')) {
      console.error(`[FAIL] ${folder}: '## Purpose' section is empty.`);
      failed = true;
    }
  }

  // 4. Check Code Examples
  if (!content.includes('## Code Examples') && !content.includes('```')) {
    console.error(`[FAIL] ${folder}: Missing '## Code Examples' section and code blocks.`);
    failed = true;
  }

  // 5. Check Strict Guardrails
  if (!content.includes('## Strict Guardrails')) {
    console.error(`[FAIL] ${folder}: Missing '## Strict Guardrails' section.`);
    failed = true;
  }

  // 6. Check for Hardcoded Personal Paths
  const forbiddenPatterns = [
    /C:\\Users\\nisal/i,
    /D:\\web guide doc/i,
    /nisal-analytics-insight-engine/i
  ];

  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      console.error(`[FAIL] ${folder}: Contains forbidden hardcoded pattern/path: ${pattern}`);
      failed = true;
    }
  });
});

if (failed) {
  console.log(`\n=========================================`);
  console.log(` ❌ Audit FAILED! See errors above.`);
  console.log(`=========================================\n`);
  process.exit(1);
} else {
  console.log(`\n=========================================`);
  console.log(`   Audit PASSED! All 36 skills are clean.`);
  console.log(`=========================================\n`);
  process.exit(0);
}
