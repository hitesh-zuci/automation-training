import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

const selectorsPath = path.resolve(process.cwd(), "selectors");

export function loadSelectors<T>(fileName: string): T {
    const filePath = path.join(selectorsPath, fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Selector file not found: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");

    return parse(fileContent) as T;
}

