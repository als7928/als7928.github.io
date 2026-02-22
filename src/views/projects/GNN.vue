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
                    Reaction–Diffusion-based Global–Local Graph Fusion Network for Graph Mining
                  </h1>
                  <p class="author" style="font-size: 1.2em; margin-top: 15px;">
                    <b>Minhyuk An</b>, Hyung-Jun Moon, and Sung-Bae Cho
                  </p>
                  <p style="font-size: 1em; color: #666;">
                    Dept. of Artificial Intelligence, Yonsei University
                  </p>
                  <p class="date" style="font-size: 1.1em; margin-top: 10px;">
                    <em>Submitted to Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)</em>
                  </p>
                  <div style="margin-top: 20px;">
                    <a href="/project/PAKDD_2026_Submission.pdf" target="_blank" rel="noopener noreferrer" class="btn-link"><i class='fa'>&#xf15c;&nbsp;</i>Paper</a>
                    <a href="https://github.com/als7928/Blend-GNN" target="_blank" rel="noopener noreferrer" class="btn-link"><i class="fa">&#xf09b;&nbsp;</i>Code</a>
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
              Graph Neural Networks (GNNs) effectively model local structures via message passing but struggle with long-range dependencies due to their inherent local aggregation. This research proposes a novel GNN architecture that hierarchically learns node representations by modeling global context through **graph diffusion** and inducing local information through **graph reaction**. We leverage **Neural Ordinary Differential Equations (Neural ODEs)** to define a continuous-time framework that smoothly transitions between local and global representations. We also introduce an attention-based adaptive fusion mechanism to integrate signals according to graph topology and task characteristics.
            </p>
          </section>

          <!-- Methodology -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Method Design: Diffusion-Reaction ODE</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/gnn_overview.png" alt="Blend-GNN Framework" style="width:100%; max-width: 800px;">
            </div>
            <p class="paperdesc">
              Blend-GNN consists of three main components:
            </p>
            <ul style="line-height: 1.8;">
              <li><strong>Global Diffusion (\(h(T)\)):</strong> Uses Neural ODEs to solve a diffusion process over the graph topology:
              \[\frac{dh(t)}{dt} = A h(t)\]
              where \(h(T)\) captures the smooth, global context of the graph.
              </li>
              <li><strong>Local Reaction (\(h(0)\)):</strong> Retains the sharp, localized features of the original input nodes.</li>
              <li><strong>Adaptive Fusion:</strong> Uses an attention-based mechanism to determine the optimal balance between global and local signals per dataset:
              \[\hat{h} = \alpha \cdot h(0) + (1-\alpha) \cdot h(T)\]
              The weight \(\alpha\) is learned dynamically based on node-level and graph-level features.
              </li>
            </ul>
          </section>

          <!-- Quantitative Results -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Experimental Results</h2>
            <p class="paperdesc">
              Experiments across 6 graph classification (MUTAG, PTC, PROTEINS, etc.), 4 node classification (Chameleon, Squirrel, etc.), and 2 graph regression datasets demonstrate significant accuracy improvements.
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
              Ablation studies confirm the synergy between global diffusion and local reaction. For heterophilous datasets (e.g., Chameleon), the global signal (\(h(T)\)) provides critical structural information, leading to an <strong>11.01%p accuracy gain</strong> over baselines.
            </p>
          </section>

          <!-- Qualitative Analysis -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Qualitative Case Study</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/gnn_casestudy.png" alt="Case study" style="width:100%; max-width: 800px; border-radius: 8px;">
              <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
                Visualization of importance (Purple: Global, Orange: Local) on molecular graphs. DPMN captures structural "islands" of information effectively.
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
import { ref, onMounted } from 'vue'

const slides = [
  '/project/gnn_tab1.png',
  '/project/gnn_tab2.png',
  '/project/gnn_tab3.png'
]
const currentSlide = ref(0)
const nextSlide = () => currentSlide.value = (currentSlide.value + 1) % slides.length
const prevSlide = () => currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length

onMounted(() => {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
})
</script>
