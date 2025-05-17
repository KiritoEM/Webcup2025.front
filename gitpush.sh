#!/usr/bin/env bash

echo -e "⚠️ Run this script in git-bash or Linux terminal"

# Show the status
echo -e "\n📋 Git status:"
if [ -z "$(git status --porcelain)" ]; then 
  echo -e " ✅ No file to add..."
  exit 0
else
  git status

  # Add all changes
  echo -e "\n✅ Adding changes..."
  git add .
fi

# Enter commit message 
while [ -z "$commitMessage" ]; do
  echo ""
  read -e -rp "✏️  Enter the commit message: " commitMessage
  if [ -z "$commitMessage" ]; then
    echo "⚠️  The commit message cannot be empty !!!"
  fi
done

# Commit
echo -e "\n📌 Commit in progress..."
if ! git commit -m "$commitMessage"; then
  echo -e "\n❌ Git commit failed (hooks or errors). Aborting push." >&2
  exit 1
fi
echo "✅ Commit done: '$commitMessage'"

# Detect current branch
currentBranch=$(git rev-parse --abbrev-ref HEAD)
if [ -z "$currentBranch" ]; then
  echo "❌ Impossible to detect current branch."
  exit 1
fi
echo -e "\n🌿 Current branch : '$currentBranch'"

# Push to GitHub
echo -e "\n🚀 Pushing into 'origin/$currentBranch'..."
if ! git push origin "$currentBranch"; then
  echo -e "\n❌ Git push failed." >&2
  exit 1
fi

echo -e "\n✅ Pushed successfully to GitHub"
exit 0
