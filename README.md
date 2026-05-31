# Home Mechanic Engineering

A React learning dashboard for a self-taught mechanic/engineering path: automotive mechanics, marine engines, electrical systems, formulas, calculators, serious tests, and progress tracking.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  components/   Reusable UI components
  data/         Modules, formulas, lessons, trusted sources, tests
  pages/        Main app pages
  styles/       Global CSS and theme design
  utils/        Storage and scoring logic
```

## Notes

- Code comments are in English.
- UI text is Hebrew and right-to-left.
- Progress is saved in `localStorage`.
- Tests include both multiple-choice and calculation questions.


## Local AI Tutor with Ollama

This project includes an optional local AI tutor. It is free because it uses Ollama on your own computer.
No API key is required and no secret should be placed in the React frontend.

### 1. Install Ollama
Install Ollama from the official website, then open a terminal.

### 2. Download a model
```cmd
ollama pull llama3.2
```

### 3. Start Ollama
Usually Ollama runs in the background after installation. If not, run:
```cmd
ollama serve
```

### 4. Start the local AI server
In a second terminal, inside the project folder:
```cmd
npm run dev:server
```

### 5. Start the React app
In a third terminal:
```cmd
npm run dev
```

Open the local Vite URL, usually:
```text
http://localhost:5173
```

### Optional configuration
The AI server uses these environment variables if you want to override defaults:

```cmd
set OLLAMA_MODEL=llama3.2
set AI_SERVER_PORT=8787
set OLLAMA_URL=http://127.0.0.1:11434
```

Frontend override:
```cmd
set VITE_AI_SERVER_URL=http://localhost:8787
```

### Important
The local AI can make mistakes. Use it as a tutor and hint generator, not as a certified mechanic.
For real vehicle, marine, fuel, brake, high-current, or high-voltage work, use proper supervision and service documentation.


## Local AI Tutor with Ollama

Recommended Hebrew model:

```cmd
ollama pull aya-expanse:8b
```

Fallback if your computer struggles:

```cmd
ollama pull qwen2.5:7b
```

Run the local AI server in one terminal:

```cmd
npm run dev:server
```

Run the React app in another terminal:

```cmd
npm run dev
```

Avoid `llama3.2` for Hebrew tutoring. It may loop or return mixed-language/gibberish output.
