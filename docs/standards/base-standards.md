---
description: This document contains all development rules and guidelines for this project, applicable to all AI agents (Claude, Cursor, Codex, Gemini, etc.).
alwaysApply: true
---

## 1. Core Principles

- **Small tasks, one at a time**: Always work in baby steps, one at a time. Never go forward more than one step.
- **Test-Driven Development**: Start with failing tests for any new functionality (TDD), according to the task details.
- **Type Safety**: All code must be fully typed.
- **Clear Naming**: Use clear, descriptive names for all variables and functions.
- **Incremental Changes**: Prefer incremental, focused changes over large, complex modifications.
- **Question Assumptions**: Always question assumptions and inferences.
- **Pattern Detection**: Detect and highlight repeated code patterns.

## 2. Language Standards
- **English Only**: All technical artifacts must always use English, including:
    - Code (variables, functions, classes, comments, error messages, log messages)
    - Documentation (README, guides, API docs)
    - Jira tickets (titles, descriptions, comments)
    - Data schemas and database names
    - Configuration files and scripts
    - Git commit messages
    - Test names and descriptions

## 3. Specific standards

For detailed standards and guidelines specific to different areas of the project, refer to:

- [Backend Standards](./backend-standards.md) - API development, database patterns, testing, security and backend best practices
- [Frontend Standards](./frontend-standards.md) - Component patterns, UI/UX guidelines, and frontend architecture (framework-agnostic — see AGENTS.md for the declared stack)
- [Documentation Standards](./documentation-standards.md) - Technical documentation structure, formatting, and maintenance guidelines, including AI standards like this document

## 4. Project Skills

- Skills live in `.agents/skills`.
- When a request matches a skill, load and follow the corresponding `SKILL.md` automatically before continuing.
- Also load any referenced files in the skill folder (for example, `references/*.md`) when the skill requires them.

## 5. Planning Model Requirement

Planning workflows must run with Opus high reasoning (or equivalent maximum reasoning model for your agent).

This requirement applies to:
- `/mcp:t2s:design`
- `/mcp:t2s:plan`
- `/mcp:t2s:refine`

Before starting any of these workflows, verify the session is using high reasoning. If it is not, **self-correct** by updating the agent's configuration settings to use the highest available reasoning model, then continue — do not stop and ask the user. Do the same to come back to standard speed/reasoning for any other step.

## 6. Symlink Integrity and Multi-Agent Portability

- **Canonical Source**: Keep reusable artifacts in `trace2spec` as the canonical source. Agent-specific paths (such as `.claude` and `.cursor`) should reference them through symlinks when possible.
- **Update Safety**: Whenever a file is renamed, moved, or its suffix changes, verify and update all symlinks that target it before considering the change complete.
- **New Artifact Linking**: Whenever creating a new artifact that requires multi-agent exposure (for example new agents or skills in `trace2spec`), create the corresponding symlinks from the expected agent-specific reference paths.
- **External Customization Review**: Whenever customization is introduced outside `trace2spec`, evaluate whether it should be moved into `trace2spec` and replaced with symlinks from the original locations.
- **Completion Gate**: A change is incomplete if it leaves broken symlinks, stale targets, or duplicated canonical artifacts across agent-specific folders.

## 7. Mandatory Trace2Spec Artifact Updates for Post-Apply Changes

When a new fix/change request appears after `/mcp:t2s:code` and before archiving or `/mcp:t2s:test`, agents must treat it as a design/spec update first, not as an informal "fix this quickly". It's the core principle of Trace2Spec, documentation is the source of truth.

Required order:

1. Update the current Trace2Spec artifacts that are affected (e.g., `docs/design/requirement-traceability-matrix.md`, `docs/design/software-design-document.md`, use cases, and the target `docs/features/DU-[XXX].md`). Don't add tasks as "bugfixes" but as part of the initial design.
2. If artifact regeneration is needed, run the corresponding workflow (`/mcp:t2s:refine` for pre-code design adjustments, or `/mcp:t2s:change` for post-code evolution) before coding.
3. Implement code only after artifacts reflect the new request, via `/mcp:t2s:code`.
4. Re-run verification (`/mcp:t2s:test`) against the updated artifacts before archiving.

Do not apply direct code-only fixes in this window without updating the Trace2Spec artifacts.
