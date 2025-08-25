# Development Guidelines for Minigolf.directory

## Philosophy

### Core Beliefs

- **Incremental progress over big bangs** - Small changes that compile and pass tests
- **Learning from existing code** - Study and plan before implementing
- **Pragmatic over dogmatic** - Adapt to project reality
- **Clear intent over clever code** - Be boring and obvious

### Simplicity Means

- Single responsibility per function/class
- Avoid premature abstractions
- No clever tricks - choose the boring solution
- If you need to explain it, it's too complex

## Process

### 1. Planning & Staging

Break complex work into 3-5 stages. Document in `IMPLEMENTATION_PLAN.md`:

```markdown
## Stage N: [Name]
**Goal**: [Specific deliverable]
**Success Criteria**: [Testable outcomes]
**Tests**: [Specific test cases]
**Status**: [Not Started|In Progress|Complete]
```
- Update status as you progress
- Remove file when all stages are done

### 2. Implementation Flow

1. **Understand** - Study existing patterns in codebase
2. **Test** - Write test first (red) - Use Vitest for unit tests
3. **Implement** - Minimal code to pass (green)
4. **Refactor** - Clean up with tests passing
5. **Commit** - With clear message linking to plan

### 3. When Stuck (After 3 Attempts)

**CRITICAL**: Maximum 3 attempts per issue, then STOP.

1. **Document what failed**:
   - What you tried
   - Specific error messages
   - Why you think it failed

2. **Research alternatives**:
   - Find 2-3 similar implementations
   - Note different approaches used

3. **Question fundamentals**:
   - Is this the right abstraction level?
   - Can this be split into smaller problems?
   - Is there a simpler approach entirely?

4. **Try different angle**:
   - Different library/framework feature?
   - Different architectural pattern?
   - Remove abstraction instead of adding?

## Technical Standards

### Architecture Principles

- **Composition over inheritance** - Use dependency injection
- **Interfaces over singletons** - Enable testing and flexibility
- **Explicit over implicit** - Clear data flow and dependencies
- **Test-driven when possible** - Never disable tests, fix them

### Astro/TypeScript Specific

- **Follow Astro patterns** - Use `.astro` files for pages and components
- **TypeScript first** - All new files should use TypeScript
- **Component composition** - Break down complex UI into smaller components
- **Static-first** - Prefer static generation over client-side rendering
- **Minimal JavaScript** - Keep client-side JS to minimum needed

### Code Quality

- **Every commit must**:
  - Compile successfully (`npm run build`)
  - Pass all existing tests (`npm run test`)
  - Include tests for new functionality
  - Follow project formatting/linting
  - Pass TypeScript checks (`npm run astro check`)

- **Before committing**:
  - Run `npm run build` to ensure build works
  - Run `npm run dev` to test functionality
  - Self-review changes
  - Ensure commit message explains "why"

### Error Handling

- Fail fast with descriptive messages
- Include context for debugging
- Handle errors at appropriate level
- Never silently swallow exceptions
- Use TypeScript types to prevent runtime errors

## Project-Specific Guidelines

### File Structure

- **Components** (`src/components/`): Reusable UI elements
- **Layouts** (`src/layouts/`): Page layout templates
- **Pages** (`src/pages/`): Route-based pages
- **Data** (`src/data/`): Static data and TypeScript interfaces
- **Styles** (`src/styles/`): Global styles (Tailwind configured)

### Component Standards

- Use TypeScript interfaces for props
- Export prop interfaces for reusability
- Use semantic HTML5 elements
- Follow accessibility best practices
- Use Tailwind CSS classes for styling
- Keep components focused on single responsibility

### Data Management

- Use TypeScript interfaces for all data structures
- Keep sample data in `src/data/` directory
- Use functions for data filtering/searching
- Maintain type safety throughout data flow

### SEO & Performance

- Use proper meta tags in BaseLayout
- Include structured data (JSON-LD) for courses
- Optimize for Core Web Vitals
- Use semantic HTML for accessibility
- Test mobile responsiveness

## Decision Framework

When multiple valid approaches exist, choose based on:

1. **Testability** - Can I easily test this?
2. **Readability** - Will someone understand this in 6 months?
3. **Consistency** - Does this match project patterns?
4. **Simplicity** - Is this the simplest solution that works?
5. **Reversibility** - How hard to change later?
6. **Performance** - Does this maintain fast loading?

## Project Integration

### Learning the Codebase

- Find 3 similar features/components
- Identify common patterns and conventions
- Use same libraries/utilities when possible
- Follow existing test patterns
- Study existing component prop patterns
- Follow established TypeScript interfaces

### Tooling

- Use Astro's built-in development server
- Use Tailwind CSS for all styling
- Use TypeScript for type safety
- Don't introduce new tools without strong justification
- Use existing data structures and functions

## Quality Gates

### Definition of Done

- [ ] Tests written and passing
- [ ] Code follows project conventions
- [ ] TypeScript compilation successful
- [ ] Build process works (`npm run build`)
- [ ] No linter/formatter warnings
- [ ] Commit messages are clear
- [ ] Implementation matches plan
- [ ] Mobile responsive design tested
- [ ] SEO meta tags updated if needed
- [ ] No TODOs without issue numbers

### Test Guidelines

- Test component behavior, not implementation
- One assertion per test when possible
- Clear test names describing scenario
- Use existing test utilities/helpers
- Tests should be deterministic
- Test both desktop and mobile viewports
- Test accessibility features

### Astro-Specific Testing

- Test static generation works correctly
- Verify TypeScript prop interfaces
- Test component rendering with various prop combinations
- Validate SEO meta tag generation
- Test responsive design breakpoints

## Commands Reference

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production  
npm run preview          # Preview production build
npm run astro check      # TypeScript and Astro checks

# Testing (when added)
npm run test             # Run unit tests
npm run test:watch       # Watch mode for tests
```

## Important Reminders

**NEVER**:
- Use `--no-verify` to bypass commit hooks
- Disable tests instead of fixing them
- Commit code that doesn't compile
- Make assumptions - verify with existing code
- Add client-side JavaScript without good reason
- Break responsive design
- Skip TypeScript type definitions

**ALWAYS**:
- Commit working code incrementally
- Update plan documentation as you go
- Learn from existing implementations
- Stop after 3 failed attempts and reassess
- Test on mobile devices/viewports
- Maintain type safety with TypeScript
- Follow Astro and Tailwind best practices
- Consider SEO impact of changes

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)