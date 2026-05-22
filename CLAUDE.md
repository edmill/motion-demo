@AGENTS.md

# Motion system
Before generating any UI component that involves animation, transition, or motion,
read MOTION.md and SKILL.md in the project root and apply the recipes defined there.
Import motionTokens from @/lib/motion-tokens — never hardcode duration or easing values.

# Component scope
When asked to build a new instance of an existing component, match the reference
implementation exactly — same layout, same visual design, same interactions.
Do not add features, recipes, or design elements beyond what's in the reference.
"Craft" or "build" means reproduce, not reimagine.
