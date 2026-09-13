#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const number = process.argv[2];
const command = process.argv[3];

if (!number) {
    console.error("Usage: pnpm lesson <number>");
    process.exit(1);
}

if (!/^\d+$/.test(number)) {
    console.error("Lesson number must be a number.");
    process.exit(1);
}

if (["dev", "build"].includes(command) === false) {
    console.error("Command must be either 'dev' or 'build'.");
    process.exit(1);
}

const presentationPath = path.resolve(
    process.cwd(),
    "Lessons",
    number,
    "Presentation",
);

if (!existsSync(presentationPath)) {
    console.error(`❌ Lesson ${number} does not exist.`);
    process.exit(1);
}

console.log(`📚 Starting Lesson ${number}...`);

const child = spawn("pnpm", [command ?? "dev"], {
    cwd: presentationPath,
    stdio: "inherit",
    shell: process.platform === "win32",
});

child.on("exit", (code) => {
    process.exit(code ?? 0);
});
