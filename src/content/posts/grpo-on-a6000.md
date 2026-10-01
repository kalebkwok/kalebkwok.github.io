---
title: Fitting GRPO for an 8B coding agent on eight A6000s
description: How rollout tensor parallelism, Ulysses sequence parallelism, and offload made verl training fit — and what broke on the way.
date: 2026-10-29
tags: [verl, rl, vllm]
draft: true
---

> Draft outline. Replace each TODO with your own words, then set `draft: false`.

## The memory budget

TODO: Qwen3-8B, 8 × A6000 48 GB, max response length. What doesn't fit by default?

## Rollout: vLLM with TP=2

TODO: why 2 and not 4 or 8.

## Training: Ulysses SP=4 and offload

TODO: what sequence parallelism splits, and what actor and optimizer offload cost you in step time.

## Memory tools inside the agent loop

TODO: how ChromaDB reads and writes happen during a rollout.

## What broke

TODO: the hardest thing to get running.

## What I'd change

TODO.
