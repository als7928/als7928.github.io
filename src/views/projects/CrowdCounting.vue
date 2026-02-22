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
                    Crowd Counting using Latent Diffusion Models
                  </h1>
                  <p class="author" style="font-size: 1.2em; margin-top: 15px;">
                    Kihun Son, <b>Minhyuk An</b>, Siwon Lee, and Prof. Seong-Eun Hong
                  </p>
                  <p style="font-size: 1em; color: #666;">
                    Inha University (Graduation Project)
                  </p>
                  <p class="date" style="font-size: 1.1em; margin-top: 10px;">
                    <em>Capstone Design Award (Grand Prize Winner)</em>
                  </p>
                  <div style="margin-top: 20px;">
                    <a href="/project/crowd_counting_paper.pdf" target="_blank" rel="noopener noreferrer" class="btn-link"><i class='fa'>&#xf15c;&nbsp;</i>Paper</a>
                    <a href="/project/crowd_counting_poster.pdf" target="_blank" rel="noopener noreferrer" class="btn-link"><i class='fa'>&#xf15c;&nbsp;</i>Poster</a>
                    <a href="https://github.com/als7928/Capstone" target="_blank" rel="noopener noreferrer" class="btn-link"><i class="fa">&#xf09b;&nbsp;</i>Code</a>
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
              Crowd counting aims to accurately estimate the number of people in an image. Traditional approaches often rely on expensive multi-modal data such as thermal imaging. This graduation project proposes a system that generates high-quality <strong>Crowd Maps</strong> from a single RGB image using **Latent Diffusion Models (LDM)**. By performing denoising in a compressed latent space, our model achieves efficient, high-fidelity density map reconstruction and robust crowd estimation without the need for high-cost sensors.
            </p>
          </section>

          <!-- Problem & Motivation -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Problem & Motivation</h2>
            <p class="paperdesc">
              Existing crowd counting models like CSRNet or MCNN struggle with scale variations and perspective distortions. While multi-modal models (RGB-T) improve robustness, they are impractical for general public safety applications due to hardware costs. We aim to leverage the <strong>generative power of Diffusion Models</strong> to synthesize high-quality density maps from standard RGB inputs, bridging the gap between low-cost data and high-accuracy requirements.
            </p>
          </section>

          <!-- Methodology -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Method Design: Diffusion-based Density Synthesis</h2>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/crowdcounting_process.png" alt="LDM Framework" style="width:100%; max-width: 800px; border-radius: 8px;">
            </div>
            <p class="paperdesc">
              The framework consists of a two-stage process:
            </p>
            <ul style="line-height: 1.8;">
              <li><strong>Conditioned Reverse Diffusion:</strong> We perform DDIM-based denoising over 500 steps in a latent space \(z\). The input RGB image \(y\) acts as a conditioning signal to guide the synthesis of the crowd density map.</li>
              <li><strong>Reconstruction & Post-processing:</strong> The final latent \(z_0\) is decoded back into the image space to produce the crowd map \(\hat{x}\). We then apply **Contour Detection** and integration to estimate the discrete population count.</li>
            </ul>
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/crowdcounting_architecture.png" alt="Architecture" style="width:70%; border-radius: 8px;">
              <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
                Detailed architecture of the LDM-based crowd map generator.
              </p>
            </div>
          </section>

          <!-- Results -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Results & Analysis</h2>
            <p class="paperdesc">
              Evaluated on the <strong>ShanghaiTech Part-A</strong> dataset, our model demonstrated exceptional capability in reconstructing fine-grained density maps in extremely dense scenarios.
            </p>
            
            <div style="text-align:center; margin: 20px 0;">
              <img src="/project/crowdcounting_fig.png" alt="Results comparison" style="width:100%; max-width: 800px; border-radius: 8px;">
              <p style="font-style: italic; color: #555; margin-top: 10px; font-size: 0.9em;">
                Comparison between Input RGB, Ground Truth (GT), and our Generated Density Map.
              </p>
            </div>

            <p class="paperdesc">
              Quantitative results confirmed that our LDM-based approach achieves a competitive Mean Absolute Error (MAE) compared to traditional CNN baselines, with significantly higher visual fidelity in the generated maps.
            </p>
          </section>

          <!-- Conclusion -->
          <section style="margin-bottom: 40px;">
            <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px;">Conclusion</h2>
            <p class="paperdesc">
              This project proves the feasibility of using <strong>Conditional Generative Models</strong> for discriminative tasks like crowd counting. By synthesising density maps, we can achieve high-accuracy results with standard RGB cameras, providing a cost-effective solution for urban management and public safety.
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
import { onMounted } from 'vue'

onMounted(() => {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
})
</script>
