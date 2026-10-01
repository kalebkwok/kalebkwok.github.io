export type Project = {
  slug: string;
  title: string;
  dates: string;
  summary: string;
  details: string[];
  tags: string[];
  // Add a public repo or write-up link here once one exists.
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'mini-sglang',
    title: 'Mini-SGLang inference engine',
    dates: 'Jan – Sep 2026',
    summary: 'A rewrite of sgl-project/mini-sglang, rebuilt one module at a time.',
    details: [
      'Reimplemented request scheduling, radix KV caching, chunked prefill, and overlap scheduling.',
      'Runs on FlashAttention and FlashInfer attention backends.',
    ],
    tags: ['PyTorch', 'FlashInfer', 'FlashAttention', 'KV cache'],
  },
  {
    slug: 'heteromega',
    title: 'HeteroMega',
    dates: 'Aug 2026 – present',
    summary:
      'Megatron-style FFN tensor parallelism across the iGPU and NPU of an AMD Ryzen AI Max+ 395, serving W4A16 Llama-3.1-8B at batch size 1. Builds on HeteroMosaic.',
    details: [
      'I write the GPU-side ROCm kernels.',
      'FFN weights are split by column and row with an offline-profiled device ratio, so each FFN needs one reduction and no weight copies.',
    ],
    tags: ['ROCm', 'HIP', 'Tensor parallelism'],
  },
  {
    slug: 'agentic-rl',
    title: 'Agentic RL for a memory-augmented coding agent',
    dates: 'Jan – May 2026',
    summary:
      'An RL pipeline for a Qwen3-8B coding agent whose vLLM rollouts call ChromaDB-backed memory tools inside the agent loop.',
    details: [
      'verl GRPO training on eight A6000 GPUs with rollout tensor parallelism (TP=2), Ulysses sequence parallelism (SP=4), and actor and optimizer offload.',
      'Trained 150 steps on 1,630 coding tasks; LiveCodeBench v6 accuracy went from 34.86% to 42.29% on 175 sandboxed problems.',
    ],
    tags: ['verl', 'GRPO', 'vLLM', 'ChromaDB'],
  },
];
