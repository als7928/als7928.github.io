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
                    Differentiable Prototypical Memory Network for Contrastive Continual Learning
                  </h1>
                  <p class="author" style="font-size: 1.2em; margin-top: 15px;">
                    <b>Minhyuk An</b><sup>1</sup>, Hyung-Jun Moon<sup>1</sup>, and Sung-Bae Cho<sup>2</sup>
                  </p>
                  <p style="font-size: 1em; color: #666;">
                    <sup>1</sup>Dept. of Artificial Intelligence, Yonsei University <br>
                    <sup>2</sup>Dept. of Computer Science, Yonsei University
                  </p>
                  <p class="date" style="font-size: 1.1em; margin-top: 10px;">
                    <em>Submitted to International Conference on Pattern Recognition (ICPR)</em>
                  </p>
                  <div style="margin-top: 20px;">
                    <a href="/assets/2026_ICPR_submission_1222.pdf" target="_blank" rel="noopener noreferrer" class="btn-link"><i class='fa'>&#xf15c;&nbsp;</i>Paper</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">

          <!-- Teaser Image -->
          <div style="text-align:center; margin-bottom: 40px;">
            <img src="/assets/CL2.png" alt="DPMN Concept" style="width:90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
              Figure 1: Concept of DPMN. New inputs generate embeddings where feature drift risks misalignment with old prototypes. The differentiable memory module updates prototypes to maintain precise alignment and prevent overlapping.
            </p>
          </div>

          <!-- Abstract Section -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Abstract</h2>
            <p class="abstract" style="line-height: 1.6; text-align: justify;">
              Promising methods for continual learning replay not the data but the prototypes for previous tasks to alleviate the limitation of computation and memory. However, they lack adaptability over tasks and do not consider relevance between prototypes and embeddings as the feature space changes. To cope with this problem, we propose a novel <strong>Differentiable Prototypical Memory Network (DPMN)</strong> that updates prototypes to be distributed effectively in the feature space. DPMN learns the feature space with contrastive objectives for higher relevance between embeddings and retrieved prototypes, while reducing the relevance between prototypes from previous tasks to effectively construct decision boundaries for old and new classes. Experimental results with several image datasets demonstrate that DPMN outperforms existing methods, and additional ablation studies verify its effectiveness.
            </p>
          </section>

          <!-- Problem Definition -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Problem Definition & Motivation</h2>
            <p class="paperdesc">
              In a standard Class-Incremental Learning (CIL) setting, a model \(f_\theta\) learns a sequence of tasks. The fundamental challenge is <strong>Catastrophic Forgetting (CF)</strong>, primarily driven by <strong>feature space drift</strong>. As the feature extractor updates its parameters to accommodate new classes, the optimal embedding positions for previously learned classes shift. 
              Existing prototype-based methods typically employ a <strong>static storage approach</strong>, where prototypes are computed as fixed means:
              \[P_k = \frac{1}{|\mathcal{D}_{t-1}^k|} \sum_{x \in \mathcal{D}_{t-1}^k} f_{t-1}(x)\]
              This becomes obsolete at task \(t\) because \(f_t(x) \neq f_{t-1}(x)\). DPMN resolves this by treating prototypes as <strong>learnable parameters</strong> that synchronize with the evolving feature extractor.
            </p>
          </section>

          <!-- Methodology -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Differentiable Prototypical Memory</h2>
            <p class="paperdesc">
              The core innovation is the <strong>Differentiable Memory Module \(\mathcal{M} \in \mathbb{R}^{C \times M \times d}\)</strong>, which maintains discriminative decision boundaries through three key objectives:
            </p>
            <ul style="line-height: 1.8;">
              <li><strong>Geometric Constraints (\(\mathcal{L}_{geo}\)):</strong> Enforces structured geometric separation within the feature space.
                <ul>
                  <li><em>Intra-class Compactness:</em> \(\mathcal{L}_{intra} = \frac{1}{N_{intra}} \sum_{i,j} \delta_{i,j}^{intra} \cdot D_{i,j}\) (minimizes distance within class)</li>
                  <li><em>Inter-class Separability:</em> \(\mathcal{L}_{inter} = \sum_{i,j} \exp(-D_{i,j}) \cdot \delta_{i,j}^{inter}\) (maximizes distance between classes)</li>
                </ul>
              </li>
              <li><strong>Embedding-Prototype Alignment (\(\mathcal{L}_{EPA}\)):</strong> Based on the InfoNCE objective, it pulls embeddings toward their class prototypes (Anchor) while pushing them away from other prototypes.
              \[\mathcal{L}_{EPA} = -\frac{1}{B} \sum_{i=1}^B \log \frac{\sum_{p \in \mathcal{P}_{y_i}} \exp(s_{i,p}/\tau)}{\sum_{j \in \mathcal{M}} \exp(s_{i,j}/\tau)}\]
              </li>
              <li><strong>Feature Consistency (\(\mathcal{L}_{KD}\)):</strong> Employs feature distillation to stabilize the learning trajectory between current and previous models.</li>
            </ul>
          </section>

          <!-- Results -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Experimental Results</h2>
            
            <!-- <h3>1. Performance on CIL Benchmarks</h3>
            <p class="paperdesc">
              DPMN achieves SOTA performance across standard benchmarks. Notably, in long-sequence learning (10-task CIFAR-100), it maintains higher accuracy than regularization and architectural methods.
            </p>
            <table class="results-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>CIFAR-10 (Avg Acc)</th>
                  <th>CIFAR-100 (10-task)</th>
                  <th>Tiny-ImageNet</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>LwF</td><td>19.6%</td><td>6.1%</td><td>8.5%</td></tr>
                <tr><td>GEM</td><td>22.8%</td><td>13.6%</td><td>16.3%</td></tr>
                <tr><td>PNN</td><td>28.2%</td><td>16.1%</td><td>11.0%</td></tr>
                <tr><td>DualNet</td><td>41.7%</td><td>29.0%</td><td>24.5%</td></tr>
                <tr class="highlight-row"><td><strong>DPMN (Ours)</strong></td><td><strong>53.1%</strong></td><td><strong>42.1%</strong></td><td><strong>30.5%</strong></td></tr>
              </tbody>
            </table> -->

            <!-- <h3>2. Qualitative Analysis (t-SNE)</h3> -->
            <!-- <div style="text-align:center; margin: 20px 0;"> -->
              <!-- <img src="/assets/CL.png" alt="Results graph" style="width:100%; max-width: 800px;"> -->
              <!-- <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;"> -->
                <!-- t-SNE visualization confirms that DPMN maintains well-separated clusters for each class even as new tasks are added, preventing catastrophic forgetting through geometric isolation. -->
              <!-- </p> -->
            <!-- </div> -->
          </section>

          <!-- Discussion -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Discussion & Complexity</h2>
            <p class="paperdesc" style="text-align: justify;">
              DPMN achieves SOTA performance with manageable overhead. The time complexity for memory operations scales linearly with the number of prototypes (\(O(B \cdot C \cdot M \cdot d)\)). Unlike replay-based methods that store high-dimensional raw images, DPMN only stores compact prototype vectors, making it highly efficient for resource-constrained continual learning scenarios. The joint optimization of prototypes and features creates a "Safety Margin" that guarantees non-overlapping decision boundaries theoretically.
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
.results-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.95em;
}
.results-table th, .results-table td {
  border: 1px solid #eee;
  padding: 12px;
  text-align: center;
}
.results-table th { background-color: #fcfcfc; font-weight: 700; }
.highlight-row { background-color: #f0f7ff; font-weight: 700; color: #0056b3; }
.paperdesc { line-height: 1.7; text-align: justify; margin-bottom: 15px; }
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
})
</script>
