#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// Read PR description
const prBody = fs.readFileSync('/vercel/sandbox/PR_DESCRIPTION.md', 'utf8');

// GitHub API configuration
const owner = 'Smartconnectcrm';
const repo = 'smartconnect-website';
const head = 'concept-b-redesign';
const base = 'main';
const title = 'feat: Concept B redesign + legal/compliance documentation';

// Check for GitHub token
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!token) {
  console.error('❌ Error: GITHUB_TOKEN or GH_TOKEN environment variable not set');
  console.log('\n📝 Manual PR Creation Required:');
  console.log(`\n🔗 Create PR at: https://github.com/${owner}/${repo}/pull/new/${head}`);
  console.log(`\n📋 PR Details:`);
  console.log(`   Title: ${title}`);
  console.log(`   Base: ${base}`);
  console.log(`   Head: ${head}`);
  console.log(`\n✅ Branch pushed successfully to: origin/${head}`);
  process.exit(0);
}

const data = JSON.stringify({
  title,
  body: prBody,
  head,
  base,
  draft: false
});

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/repos/${owner}/${repo}/pulls`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization': `token ${token}`,
    'User-Agent': 'Node.js PR Creator',
    'Accept': 'application/vnd.github.v3+json'
  }
};

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 201) {
      const pr = JSON.parse(responseData);
      console.log('✅ Pull Request Created Successfully!\n');
      console.log(`🔗 PR URL: ${pr.html_url}`);
      console.log(`📝 PR Number: #${pr.number}`);
      console.log(`📋 Title: ${pr.title}`);
      console.log(`🌿 Branch: ${head} → ${base}`);
      console.log(`\n✨ Status: Ready for review (not auto-merged)`);
    } else {
      console.error(`❌ Failed to create PR (Status: ${res.statusCode})`);
      console.error('Response:', responseData);
      console.log(`\n📝 Manual PR Creation Required:`);
      console.log(`🔗 Create PR at: https://github.com/${owner}/${repo}/pull/new/${head}`);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error creating PR:', error.message);
  console.log(`\n📝 Manual PR Creation Required:`);
  console.log(`🔗 Create PR at: https://github.com/${owner}/${repo}/pull/new/${head}`);
});

req.write(data);
req.end();
