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
                    GL-GFN: Context-Aware Rectification of Globally Diffused Graph Representations
                  </h1>
                  <p class="author" style="font-size: 1.2em; margin-top: 15px;">
                    <b>Minhyuk An</b>, Hyung-Jun Moon, and Sung-Bae Cho
                  </p>
                  <p style="font-size: 1em; color: #666;">
                    Dept. of Artificial Intelligence and Dept. of Computer Science, Yonsei University
                  </p>
                  <p class="date" style="font-size: 1.1em; margin-top: 10px;">
                    <!-- <em>Submitted to Journal</em> -->
                  </p>
                  <div style="margin-top: 20px;">
                    <a href="https://github.com/als7928/GL-GFN" target="_blank" rel="noopener noreferrer" class="btn-link"><i class="fa">&#xf09b;&nbsp;</i>Code</a>
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
              The global structural awareness in graph neural networks (GNNs) fundamentally conflicts with the preservation of local node discriminability. While deep propagation mechanisms are essential for modeling long-range dependencies, they mathematically function as spectral low-pass filters. Previous approaches attempt to mitigate this by combining global and local features; however, they typically treat these features as independent, parallel views, ignoring the causal entropy loss inherent in the diffusion process. In this work, we propose the <strong>global-local graph feature fusion network (GL-GFN)</strong>, a novel method that addresses this trade-off through a continuous reconstructive mechanism. We formulate representation learning as a dual-phase process governed by <strong>neural ordinary differential equations (Neural ODEs)</strong>: (1) generating a low-frequency global skeleton via continuous graph diffusion, and (2) explicitly repairing the information loss via <strong>context-aware rectification</strong>. Extensive experiments on diverse benchmarks, including heterophilous and long-range datasets (LRGB), demonstrate that the proposed method effectively balances the bias-variance trade-off, achieving SOTA generalization performance by securing both global coherence and local sharpness.
            </p>
          </section>

          <!-- Methodology -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Method: Context-Aware Rectification</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/gnn_overview2.png" alt="GL-GFN Framework" style="width:100%; max-width: 800px;">
            </div>
            <p class="paperdesc">
              GL-GFN consists of two functional phases:
            </p>
            <ul style="line-height: 1.8;">
              <li><strong>Phase 1 — Continuous Global Context Modeling (\(\mathbf{H}(0) \to \mathbf{H}(T)\)):</strong> Models information propagation as a continuous diffusion process using Graph Neural ODEs governed by the normalized Laplacian:
              \[\frac{d\mathbf{H}(t)}{dt} = -\alpha \hat{\mathbf{L}} \mathbf{H}(t)\]
              The terminal state \(\mathbf{H}(T)\) captures the low-frequency global structural skeleton, but inherently attenuates high-frequency local details (oversmoothing).
              </li>
              <li><strong>Phase 2 — Context-Aware Rectification:</strong> Instead of treating \(\mathbf{H}(0)\) and \(\mathbf{H}(T)\) as independent views, GL-GFN explicitly <em>repairs</em> the information loss via a gating-based residual injection:
              \[\mathbf{H}_{\text{rect}} = \mathbf{H}(T) + \lambda_{G} \cdot \sigma\!\left(\mathcal{F}(\mathbf{H}(T), \mathbf{H}(0))\right) \odot \mathbf{H}(0)\]
              A hierarchical gating strategy operates at both <strong>node-level</strong> (fine-grained filtering) and <strong>graph-level</strong> (coarse-grained adaptation) to selectively restore discriminative local details.
              </li>
            </ul>
          </section>

          <!-- Quantitative Results -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Experimental Results</h2>
            <p class="paperdesc">
              Experiments across 6 graph classification (PTC_MR, D&amp;D, PROTEINS, IMDB-B, IMDB-M, REDDIT-B), 4 node classification (Cora, CiteSeer, PubMed, Chameleon), and 2 long-range graph benchmark (LRGB) datasets (Peptides-struct, Peptides-func) demonstrate SOTA generalization performance.
            </p>
            
            <div style="text-align:center; margin: 20px 0;">
              <div id="gnn-carousel" style="display:inline-block; max-width:100%; text-align:center;">
                <div style="position:relative; display:inline-block; width:100%; max-width:800px;">
                  <img v-for="(slide, index) in slides" :key="index" :src="slide" 
                       v-show="currentSlide === index"
                       style="max-width:100%; height:250px; border-radius: 4px; display:block;">

                  <button @click="prevSlide" aria-label="Previous" class="carousel-btn" style="left:6px;">‹</button>
                  <button @click="nextSlide" aria-label="Next" class="carousel-btn" style="right:6px;">›</button>
                </div>
              </div>
            </div>

            <p class="paperdesc">
              Ablation studies confirm the necessity of context-aware rectification. For heterophilous datasets (e.g., Chameleon), the rectification mechanism selectively restores local identities from the over-smoothed global context, leading to an <strong>11.01%p accuracy gain</strong> over the second-best method (NAGphormer). On LRGB benchmarks, GL-GFN achieves the lowest MAE on Peptides-struct and the highest AP on Peptides-func, surpassing specialized Transformer architectures.
            </p>
          </section>

          <!-- Qualitative Analysis -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Qualitative Case Study</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/gnn_casestudy.png" alt="Case study" style="width:100%; max-width: 800px; border-radius: 8px;">
              <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
                Visualization of adaptive rectification on molecular (PTC_MR) and protein (PROTEINS) graphs. GL-GFN selectively sharpens boundaries of nodes requiring identity restoration while preserving global structural coherence.
              </p>
            </div>
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
.carousel-btn {
  position:absolute; top:50%; transform:translateY(-50%); 
  background:rgba(0,0,0,0.5); color:white; border:none; 
  padding:8px 12px; cursor:pointer; border-radius:4px;
}
.paperdesc { line-height: 1.7; text-align: justify; margin-bottom: 15px; }
</style>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const slides = [
  '/project/gnn_tab1.png',
  '/project/gnn_tab2.png',
  '/project/gnn_tab3.png'
]
const currentSlide = ref(0)
const nextSlide = () => currentSlide.value = (currentSlide.value + 1) % slides.length
const prevSlide = () => currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length

async function renderMath() {
  await nextTick()
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetClear && window.MathJax.typesetClear()
    await window.MathJax.typesetPromise()
  }
}

onMounted(() => {
  if (window.MathJax && window.MathJax.startup) {
    window.MathJax.startup.promise.then(renderMath)
  } else {
    const check = setInterval(() => {
      if (window.MathJax && window.MathJax.startup) {
        clearInterval(check)
        window.MathJax.startup.promise.then(renderMath)
      }
    }, 200)
    setTimeout(() => clearInterval(check), 10000)
  }
})
</script>
