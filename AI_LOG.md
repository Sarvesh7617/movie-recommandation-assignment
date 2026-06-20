# AI_LOG.md

## Tools Used

* ChatGPT
* Next.js Documentation
* Mantine Documentation

## Best Prompts

### Prompt 1

"Build a movie search app in Next.js using OMDb API with debounced search, loading states, and pagination."

Why it worked:
It generated the initial project structure and API integration quickly.

### Prompt 2

"Review my React code and identify conceptual mistakes in loading, error handling, and pagination."

Why it worked:
It helped identify issues such as rendering JSX inside functions and duplicate API calls.

### Prompt 3

"Refactor a Next.js movie finder app into reusable components."

Why it worked:
It helped separate concerns and improve code organization.

## What I Fixed Manually

* Replaced incorrect Notification rendering with state-driven error handling.
* Fixed pagination edge cases and button disabling logic.
* Added localStorage-based favorites persistence.
* Implemented movie details modal using OMDb movie detail endpoint.
* Added loading, error, and empty states to improve user experience.
* Configured deployment environment variables manually.
