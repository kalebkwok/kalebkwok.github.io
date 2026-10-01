---
title: What a radix KV cache actually saves
description: Notes from rebuilding mini-sglang's prefix cache — what gets matched, what gets evicted, and how much memory a shared prompt is worth.
date: 2026-10-15
tags: [mini-sglang, kv-cache]
series: Rebuilding mini-sglang
draft: true
---

> Draft outline. Replace each TODO with your own words, then set `draft: false`.

## Why prefix caching matters

TODO: the setup. Many requests share a system prompt or earlier chat turns, so their KV for that prefix is identical.

## How big is one token's KV?

For a model with $L$ layers, $H_{kv}$ KV heads, head dimension $d$, and $b$ bytes per element, each cached token costs

$$
\text{bytes per token} = 2 \cdot L \cdot H_{kv} \cdot d \cdot b
$$

where the 2 counts K and V. TODO: plug in the numbers from your model's `config.json`.

```python
import json

cfg = json.load(open("config.json"))
L = cfg["num_hidden_layers"]
H_kv = cfg["num_key_value_heads"]
d = cfg.get("head_dim", cfg["hidden_size"] // cfg["num_attention_heads"])
b = 2  # bf16
print(2 * L * H_kv * d * b, "bytes per token")
```

## Matching a prefix in the radix tree

### Insert

TODO.

### Match

TODO.

### Evict

TODO: what is evictable, in what order, and what a running request pins.

## Radix tree vs. block hashing

| | Radix tree (SGLang) | Block hash (vLLM) |
|---|---|---|
| Match granularity | TODO | TODO |
| Eviction | TODO | TODO |

## What I measured

TODO: workload, GPU, model, baseline, and numbers.[^1]

[^1]: TODO: link the commit or script you used.
