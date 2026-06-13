---
name: nj-ai-engineering-guardian
description: Guidelines for robust AI engineering, RAG, and LLM optimization in 2026. Covers prompt curation to avoid context collapse, pre/post-generation guardrails, evaluation harnesses, semantic chunking, GraphRAG setups, and cost-control patterns. Use when building AI-powered features, chatbot engines, or RAG platforms.
---

# Nisal AI Engineering Guardian

## Purpose
This skill establishes guidelines, code recipes, and checklists for implementing the 9 core AI engineering principles of 2026 to ensure AI features are secure, accurate, cost-effective, and robust.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to build "AI features", "chatbots", or "RAG systems".
2. The user requests help with "prompt engineering", "context window", or "guardrails".
3. You are implementing OpenAI API, Anthropic, or AI SDK code that handles user input.

---

## 1. Context Window
- **Definition**: The maximum volume of text/tokens a model can hold in its working memory at once.
- **Rule**: Do not assume larger windows are always better. Models degrade in attention and recall when the context is saturated.

---

## 2. Context Collapse
- **Definition**: The sudden drop in output quality, recall accuracy, and logical cohesion when too much context is stuffed into the window.
- **Rule**: Prevent collapse through curation. Use a sliding window for conversation logs, strip redundant system instructions, and dynamically fetch only highly relevant resources.

### JavaScript Context Curation Helper
```javascript
function curateChatHistory(messages, maxTokens = 4000) {
  let tokenCount = 0;
  const curated = [];
  
  // Start from newest messages and work backwards
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    // Rough estimate: 1 word ≈ 1.3 tokens
    const estTokens = Math.ceil(msg.content.split(/\s+/).length * 1.3);
    
    if (tokenCount + estTokens > maxTokens) {
      break;
    }
    curated.unshift(msg);
    tokenCount += estTokens;
  }
  return curated;
}
```

---

## 3. Guardrails
- **Definition**: Filters and validation rules constraining inputs and outputs before, during, and after generation to protect the app.
- **Rule**: Deploying customer-facing AI without guardrails is a liability. Enforce prompt sanitization and output validation.

### JavaScript Guardrail Class
```javascript
class Guardrails {
  // Pre-generation: check input for prompt injection keywords
  static validateInput(prompt) {
    const injectionPatterns = [
      /ignore previous instructions/i,
      /system prompt/i,
      /instead of what you were told/i
    ];
    for (const pattern of injectionPatterns) {
      if (pattern.test(prompt)) {
        throw new Error("Potential prompt injection attempt detected.");
      }
    }
    return prompt;
  }

  // Post-generation: check output for blocked phrases or invalid formats
  static validateOutput(output) {
    const blockedKeywords = ["secret_key", "admin_password", "internal_api"];
    for (const keyword of blockedKeywords) {
      if (output.includes(keyword)) {
        return "Error: Output contains restricted internal information.";
      }
    }
    return output;
  }
}
```

---

## 4. Evals
- **Definition**: Structured tests designed to measure model performance on actual tasks quantitatively rather than relying on vibes.
- **Rule**: If a team cannot show their evals, they are guessing. Setup automated completion verification tests.

### Vitest Eval Test Example
```javascript
import { expect, test } from 'vitest';
import { generateAIResponse } from './aiService';

test('AI returns valid JSON schema containing product fields', async () => {
  const prompt = "Generate a JSON block for a product: name, price, stock.";
  const response = await generateAIResponse(prompt);
  
  // 1. Structure Eval
  const data = JSON.parse(response);
  expect(data).toHaveProperty('name');
  expect(data).toHaveProperty('price');
  expect(typeof data.price).toBe('number');
  
  // 2. Safety Eval
  expect(response).not.toContain("ignore");
});
```

---

## 5. GraphRAG
- **Definition**: Retrieval-Augmented Generation mapped over a knowledge graph instead of isolated text passages.
- **Rule**: Vector RAG is limited to finding passages. Use GraphRAG to follow entities and relationships, enabling multi-hop reasoning.

---

## 6. Inference
- **Definition**: Running a trained model to generate output text or assets.
- **Rule**: Training is a one-time investment; inference is ongoing rent. Optimize inference pipelines (like system prompt caching) to reduce monthly API bills.

---

## 7. Chunking
- **Definition**: Splitting raw documents into pieces before storing them in a vector database.
- **Rule**: Fixed-size chunking ignores semantics and leads to hallucinations. Implement semantic chunking matching paragraph/sentence logical boundaries.

### Semantic Chunking Logic
```javascript
function semanticChunking(text, maxWordsPerChunk = 150) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
  const chunks = [];
  let currentChunk = [];
  let currentWordCount = 0;

  for (const sentence of sentences) {
    const words = sentence.split(/\s+/).length;
    if (currentWordCount + words > maxWordsPerChunk && currentChunk.length > 0) {
      chunks.push(currentChunk.join(" "));
      currentChunk = [];
      currentWordCount = 0;
    }
    currentChunk.push(sentence.trim());
    currentWordCount += words;
  }
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(" "));
  }
  return chunks;
}
```

---

## 8. KV Cache
- **Definition**: The stored key-value attention tensors that allow models to skip recomputing past prompt tokens.
- **Rule**: Long-context workloads fill up the KV Cache and drive up inference bills. Keep system instructions stable to reuse cached slots.

---

## 9. Quantization
- **Definition**: Compressing a model by lowering the precision of its weights (e.g. from FP16 to INT8 or INT4).
- **Rule**: Use quantized open-source models to run AI directly on local/client hardware with minimal loss in accuracy.


## Strict Guardrails
- **NEVER** pass unfiltered user input directly into a system prompt without pre-generation guardrails.
- **NEVER** rely on "vibes" to test AI models. You must write structural eval tests.
- **NEVER** use naive character-length chunking for RAG without respecting sentence/semantic boundaries.

