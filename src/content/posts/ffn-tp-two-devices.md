---
title: "One reduction per FFN: splitting an MLP across an iGPU and an NPU"
description: Megatron-style column-then-row splitting, an uneven device ratio, and why batch-1 decode makes this harder than it looks.
date: 2026-11-12
tags: [heteromega, parallelism, rocm]
draft: true
---

> Draft outline. Replace each TODO with your own words, then set `draft: false`.

## Column first, then row

Split the up/gate weight $A$ by columns and the down weight $B$ by rows:

$$
A = \begin{bmatrix} A_1 & A_2 \end{bmatrix}, \qquad
B = \begin{bmatrix} B_1 \\ B_2 \end{bmatrix}
$$

Because the activation $\phi$ is elementwise, each device can finish its own slice:

$$
Y = \phi(XA)\,B = \phi(XA_1)\,B_1 + \phi(XA_2)\,B_2
$$

so the only communication is one sum at the end. TODO: say how this carries over to SiLU-and-multiply with separate gate and up weights.

## An uneven split

TODO: how the offline-profiled ratio is chosen, and why the two devices don't get half each.

## The GPU-side kernels

TODO: what you wrote in ROCm/HIP and what was hard about W4A16.

## Batch-1 decode is bandwidth-bound

TODO: the iGPU and NPU share one memory bus. When can splitting still help?
