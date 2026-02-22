<template>
  <table
    style="width:100%;max-width:900px;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
    <tbody>
      <tr style="padding:0px">
        <td style="padding:0px">
          <!-- Title & Authors -->
          <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-top:20px;">
            <tbody>
              <tr>
                <td style="padding:2.5%;width:100%;vertical-align:middle;text-align:center;">
                  <h1 class="name" style="font-size: 2.2em; line-height: 1.2;">
                    ProtoPrompt: Multi-perspective Prompt Optimization via Prototypical Feedback
                  </h1>
                  <p class="author" style="font-size: 1.2em; margin-top: 15px;">
                    <b>Minhyuk An (Leader)</b>, Taehun Kang, Haerin Byeon, and Sung-Bae Cho
                  </p>
                  <p style="font-size: 1em; color: #666;">
                    Dept. of Artificial Intelligence, Yonsei University
                  </p>
                  <p class="date" style="font-size: 1.1em; margin-top: 10px;">
                    <em>Submitted to European Chapter of the Association for Computational Linguistics (EACL)</em>
                  </p>
                  <div style="margin-top: 20px;">
                    <a href="/project/EACL_submission.pdf" target="_blank" rel="noopener noreferrer" class="btn-link"><i class='fa'>&#xf15c;&nbsp;</i>Paper</a>
                    <a href="https://github.com/als7928/Prompt-Optimization-with-Generalized-Feedback" target="_blank" rel="noopener noreferrer" class="btn-link"><i class="fa">&#xf09b;&nbsp;</i>Code</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">

          <!-- Abstract Section -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Abstract</h2>
            <p class="abstract" style="line-height: 1.6; text-align: justify;">
              Automated Prompt Optimization (APO) has emerged as a promising research direction to enhance Large Language Models (LLMs). However, current APO approaches often rely on single-perspective feedback, leading to inefficient optimization paths and high computational costs. This research proposes <strong>ProtoPrompt</strong>, which integrates Monte Carlo Tree Search (MCTS) with a **Prototypical Feedback** mechanism. By generating diverse feedback candidates and identifying the most representative feedback (Prototype), ProtoPrompt guides LLMs through a more generalized and efficient optimization process. Experimental results across BIG-Bench benchmarks demonstrate up to 1.64%p accuracy gains and 18.19% inference cost reduction.
            </p>
          </section>

          <!-- Problem & Motivation -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Motivation: Overfitting in APO</h2>
            <p class="paperdesc">
              Existing APO methods like OPRO or MCTS-based optimization often refine prompts based on specific failure cases. This "local" optimization can lead to <strong>overfitting</strong> where the prompt performs well on one batch but degrades on others. We observed that generalized instructions often outperform specific ones across diverse tasks. This motivated us to develop a feedback mechanism that abstracts specific errors into general principles.
            </p>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/protoprompt_fig4.png" alt="Motivation analysis" style="width:60%; border-radius: 8px;">
              <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
                Figure 2: Performance analysis of generalized vs. specific feedback. Prototypical Feedback (PF) shows consistent gains by preventing LLMs from being distracted by outlier errors.
              </p>
            </div>
          </section>

          <!-- Methodology -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Method Design: Prototypical Feedback</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/protoprompt_overview.png" alt="ProtoPrompt Framework" style="width:100%; max-width: 800px;">
            </div>
            <p class="paperdesc">
              ProtoPrompt operates as an iterative Search-Evaluation-Update loop integrated with MCTS:
            </p>
            <ul style="line-height: 1.8;">
              <li><strong>Feedback Generation:</strong> The Optimizer LLM (GPT-4) generates multiple diverse feedback candidates based on current prompt performance.</li>
              <li><strong>Prototypical Selection:</strong> Feedback candidates are projected into an embedding space. The most central/representative candidate is selected as the **Prototype**, ensuring the update direction reflects the most common error patterns.</li>
              <li><strong>Tree Search Optimization:</strong> Employs MCTS (Selection, Expansion, Simulation, Backpropagation) to efficiently navigate the prompt space, using rewards based on validation accuracy.</li>
            </ul>
          </section>

          <!-- Quantitative Results -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Experimental Results</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/protoprompt_fig2.png" alt="Main result" style="width:100%; max-width: 800px;">
            </div>
            <p class="paperdesc">
              Across 6 BIG-Bench tasks (Logical, Geometry, Causal, etc.), ProtoPrompt achieved an average accuracy of 78.4%, outperforming standard MCTS (76.5%) and Zero-shot CoT. 
            </p>
            
            <div style="display: flex; gap: 20px; justify-content: space-between; flex-wrap: wrap; margin-top: 30px;">
              <div style="flex: 1; min-width: 300px; text-align: center;">
                <img src="/project/protoprompt_fig1.png" alt="Convergence" style="width:100%;">
                <p style="font-size: 0.9em; font-style: italic;">(a) Convergence Analysis: ProtoPrompt reaches higher accuracy at lower search depths.</p>
              </div>
              <div style="flex: 1; min-width: 300px; text-align: center;">
                <img src="/project/protoprompt_fig3.png" alt="Cost analysis" style="width:100%;">
                <p style="font-size: 0.9em; font-style: italic;">(b) Cost-Benefit Analysis: Significant reduction in token usage per unit of accuracy gain.</p>
              </div>
            </div>
          </section>

          <!-- Conclusion -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Conclusion</h2>
            <p class="paperdesc">
              ProtoPrompt demonstrates that <strong>representative feedback</strong> is a key factor in automated prompt engineering. By abstracting diverse perspectives into prototypes, we prevent optimization drift and achieve robust, cost-effective prompt refinement. The resulting prompts exhibit high generalizability across various LLM architectures (GPT-4o, GPT-o3-mini).
            </p>
          </section>

        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.name { color: #003262; font-weight: 700; margin-bottom: 10px; }
.btn-link {
  display: inline-block;
  padding: 8px 18px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  margin: 0 5px;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-link:hover { background-color: #e9ecef; border-color: #bbb; color: #000; }
.paperdesc { line-height: 1.7; text-align: justify; margin-bottom: 15px; }
</style>

<script setup>
</script>
