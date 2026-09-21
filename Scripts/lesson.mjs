#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const number = process.argv[2];
const r_type = process.argv[3];
const command = process.argv[4];

if (!number) {
    console.error("Usage: pnpm lesson <number>");
    process.exit(1);
}

if (!/^\d+$/.test(number)) {
    console.error("Lesson number must be a number.");
    process.exit(1);
}

if (!r_type) {
    console.error("Usage: pnpm lesson <number> <type>");
    process.exit(1);
}

if (["presentation", "homework", "p", "h"].includes(r_type) === false) {
    console.error(
        'Type must be either "presentation" ("p") or "homework" ("h").',
    );
    process.exit(1);
}

const type = (() => {
    switch (r_type) {
        case "presentation":
        case "p":
            return "Presentation";
        case "homework":
        case "h":
            return "Homework";
    }
})();

if (!command) {
    console.error("Usage: pnpm lesson <number> <type> <command>");
    process.exit(1);
}

if (["dev", "build"].includes(command) === false) {
    console.error("Command must be either 'dev' or 'build'.");
    process.exit(1);
}

const presentationPath = path.resolve(process.cwd(), "Lessons", number, type);

if (!existsSync(presentationPath)) {
    console.error(`❌ Lesson ${number} does not exist.`);
    process.exit(1);
}

console.log(`📚 Starting ${type} of Lesson ${number}...`);

const child = spawn("pnpm", [command ?? "dev"], {
    cwd: presentationPath,
    stdio: "inherit",
    shell: process.platform === "win32",
});

child.on("exit", (code) => {
    process.exit(code ?? 0);
});
