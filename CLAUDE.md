# Claude Code Custom Rules

## Commands

- `/clear` - Clear context before new task
- `@artifacts/UCO.json` - Reference specific file
- Planning Mode: Add "Mode: Planning First" to prompt

## Critical Rules for Claude Code

1. ALWAYS read PROJECT_RULES.md FIRST
2. ALWAYS use Planning Mode for complex tasks (UCO, VAL, Blueprint)
3. NEVER generate entire project in one prompt
4. ALWAYS test after each change
5. ALWAYS commit working changes immediately

## Prompting Best Practices

1. Be specific - include exact file paths
2. One task per chat for complex changes
3. Always request plan before execution for critical tasks
4. Include success criteria in prompt

## Project-Specific Commands

[Add custom slash commands here]