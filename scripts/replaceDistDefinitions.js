/**
 * TODO this script should be removed once all /src is using TypeScript
 */
import fs from "fs"
import pkg from "../package.json"

fs.renameSync("dist/index-ts-only.d.ts", pkg.types)
