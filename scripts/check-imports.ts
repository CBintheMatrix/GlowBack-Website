import { existsSync } from "node:fs";
import { join } from "node:path";

const required = [
  "components/navbar.tsx",
  "components/ui/button.tsx",
  "components/ui/input.tsx",
  "components/ui/textarea.tsx",
];

let missing = false;
for (const rel of required) {
  const p = join(process.cwd(), rel);
  if (!existsSync(p)) {
    console.error("✗ Missing file:", rel);
    missing = true;
  } else {
    console.log("✓ Found:", rel);
  }
}
if (missing) {
  process.exit(1);
}
