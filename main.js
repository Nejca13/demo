import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// Replicate __dirname functionality in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
