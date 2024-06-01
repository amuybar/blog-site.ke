#!/bin/bash

# Array of commit messages
commit_messages=(
  "Initial commit"
  "Set up Next.js project"
  "Add homepage structure"
  "Implement basic CSS for homepage"
  "Create API routes for posts"
  "Add Post model with Mongoose"
  "Set up MongoDB connection"
  "Add Dockerfile for containerization"
  "Set up GitHub Actions workflow"
  "Implement CI pipeline with GitHub Actions"
  "Add linting with ESLint"
  "Add basic test cases"
  "Build hero section for homepage"
  "Create detail page for individual posts"
  "Implement post creation form"
  "Add blog post cards on homepage"
  "Implement navigation bar"
  "Style footer and newsletter form"
  "Deploy Docker image to Docker Hub"
  "Implement authentication (optional)"
  "Add environment variables handling"
  "Set up deployment pipeline"
  "Create README.md file"
  "Set up Terraform for infrastructure as code"
  "Configure Prometheus for monitoring"
  "Add Grafana for monitoring dashboards"
  "Update dependencies and npm scripts"
  "Refactor codebase for better structure"
  "Optimize images and assets"
  "Final touches before release"
)

# Array of commit dates (adjust as needed)
commit_dates=(
  "2024-06-01"
  "2024-06-03"
  "2024-06-05"
  "2024-06-07"
  "2024-06-09"
  "2024-06-11"
  "2024-06-13"
  "2024-06-15"
  "2024-07-17"
  "2024-07-19"
  "2024-07-21"
  "2024-07-23"
  "2024-07-25"
  "2024-07-27"
  "2024-07-29"
  "2024-08-01"
  "2024-08-03"
  "2024-08-05"
  "2024-08-08"
  "2024-08-09"
  "2024-08-11"
  "2024-08-13"
  "2024-08-15"
  "2024-08-17"
  "2024-08-19"
  "2024-08-19"
  "2024-08-19"
  "2024-08-20"
  "2024-08-24"
  "2024-08-24"
)

# Loop through the commit messages and dates
for i in {0..29}
do
  # Update files (optional: simulate file changes)
  echo "// Commit ${i}: ${commit_messages[$i]}" >> dummy_file_$i.js
  git add .

  # Commit with the specific date
  GIT_COMMITTER_DATE="${commit_dates[$i]}T12:00:00" git commit --date="${commit_dates[$i]}T12:00:00" -m "${commit_messages[$i]}"
done
