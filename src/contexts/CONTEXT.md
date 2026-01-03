# Context

These are reusable contexts and hooks. Use them for sharing access to variables across multiple pages.

## Directory structure

`/src/app/contexts/YourContext/` directory should contain two files:
<br>

1. `useYour.ts` : this hook should contain logic (primarly for refactoring purposes)
2. `index.ts` : this file should contain `YourProvider` and `useYourContext`

If The logic is simple the useYourContext hook can be avoided
