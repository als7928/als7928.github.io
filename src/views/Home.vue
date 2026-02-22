<template>
  <table
    style="width:100%;max-width:800px;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
    <tbody>
      <tr style="padding:0px">
        <td style="padding:0px">
          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr style="padding:0px">
                <td style="padding:2.5%;width:63%;vertical-align:middle">
                  <p class="name" style="text-align: center;">
                    AI 엔지니어 안민혁
                  </p>
                  <p>
                    AI/ML을 통해 실질적인 문제를 해결하고 기술적 가치를 증명하는 엔지니어입니다. <br>
                    최근 프롬프트 최적화 연구를 통해 성능 1.64%p 향상 및 비용 18.19% 절감을 달성했으며, 그래프 신경망 고도화를 통해 분류 성능을 11.01%p 개선한 경험이 있습니다.
                    탄탄한 문제 분석 능력과 협업을 기반으로 완성도 높은 AI 서비스를 제공하고 싶습니다.
                  </p>

                  <p style="text-align:center">
                    <i style="font-size:1em" class="fa">&#xf0e0;&nbsp;</i> als7928@daum.net &nbsp;/&nbsp;
                    <i style="font-size:1em" class="fa">&#xf09b;&nbsp;</i> <a href="https://github.com/als7928/">Github</a>
                  </p>
                </td>
                <td style="padding:2.5%;width:25%;max-width:40%">
                  <a href="/assets/MyProfile2.jpg"><img style="width:100%;max-width:100%;border-radius: 50%;"
                      alt="profile photo" src="/assets/MyProfile2.jpg" class="hoverZoomLink"></a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>스킬</h2>
                    <p>
                    <strong>Programming Language:</strong>
                    Python / Java
                    </p>
                    <p>
                    <strong>Deep Learning & ML:</strong>
                    PyTorch / PyG / scikit-learn / NumPy / Pandas
                    </p>
                    <p>
                    <strong>Backend:</strong>
                    Spring Boot / FastAPI / REST API
                    </p>
                    <p>
                    <strong>Frontend:</strong>
                    Vue.js
                    </p>
                    <p>
                    <strong>Others:</strong>
                    Matplotlib / Seaborn / WandB / NetworkX / Git
                    </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>연구 프로젝트</h2>
                </td>
              </tr> 
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>

              <tr>
                <td style="padding:20px;width:25%;vertical-align:middle">
                  <div>
                    <img src='/assets/CL2.png' width="160">
                  </div>
                </td>
                <td style="padding:20px;width:75%;vertical-align:middle">
                  <span class="papertitle">
                    Differentiable Prototypical Memory Network for Continual Learning</span>
                  <br>
                  3인 프로젝트 (2024.12 — 현재)
                  <br>
                  <router-link to="/project/continual-learning"><i style="font-size:1em" class="fa">&#xf0c1;&nbsp;</i>프로젝트 상세</router-link>
                  <ul style="padding-left: 15px; margin-top: 10px;">
                    <li><strong>S:</strong> 지속 학습 시 발생하는 '치명적 망각'과 특징 공간 변화에 따른 '프로토타입 드리프트' 문제</li>
                    <li><strong>T:</strong> 원본 데이터 저장 없이(Exemplar-free) 변화하는 공간에 유연하게 대응하는 프로토타입 메모리 개발</li>
                    <li><strong>A:</strong> 미분 가능한 프로토타입 메모리 설계 및 기하학적 제약 조건(응집 및 분리)을 통한 결정 경계 고정</li>
                    <li><strong>R:</strong> CIFAR-100, CUB-200 등에서 SOTA급 성능 달성 및 안정적 학습 입증</li>
                  </ul>                  
                  <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    <p class="keyword">Continual Learning</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:20px;width:25%;vertical-align:middle">
                  <div>
                    <img src='/assets/acl_figure.png' width="160">
                  </div>
                </td>
                <td style="padding:20px;width:75%;vertical-align:middle">
                  <span class="papertitle">
                    ProtoPrompt: Multi-perspective Prompt Optimization via Prototypical Feedback</span>
                  <br>
                  4인 프로젝트 (2024.09 — 현재)
                  <br>
                  <router-link to="/project/protoprompt"><i style="font-size:1em" class="fa">&#xf0c1;&nbsp;</i>프로젝트 상세</router-link>                  
                  <ul style="padding-left: 15px; margin-top: 10px;">
                    <li><strong>S:</strong> 자동 프롬프트 최적화(APO) 단계에서 피드백이 단일 관점에 치우쳐 최적화 경로의 비효율 발생</li>
                    <li><strong>T:</strong> 다각도의 피드백을 수용하면서 핵심 개선 방향을 제시하여 성능 극대화 및 비용 절감 목표</li>
                    <li><strong>A:</strong> MCTS와 결합된 Prototypical Feedback 메커니즘을 제안하여 대표성 있는 피드백을 추출 및 적용</li>
                    <li><strong>R:</strong> 베이스라인 대비 성능 최대 1.64%p 향상 및 전체 추론 비용 18.19% 절감 달성</li>                  
                  </ul>                  
                  <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    <p class="keyword">Large Language Models</p>
                    <p class="keyword">Prompt Optimization</p>
                    <p class="keyword">MCTS</p>
                  </div>
                </td>
              </tr>


              <tr>
                <td style="padding:20px;width:25%;vertical-align:middle">
                  <div>
                    <img src='/assets/blend.png' width="160">
                  </div>
                </td>
                <td style="padding:20px;width:75%;vertical-align:middle">
                  <span class="papertitle">Reaction–Diffusion-based Global–Local Graph Fusion Network</span>
                  <br>
                  3인 프로젝트 (2024.05 — 현재)
                  <br>
                  <router-link to="/project/gnn">
                    <i style="font-size:1em" class="fa">&#xf0c1;&nbsp;</i>프로젝트 상세
                  </router-link>
                  <ul style="padding-left: 15px; margin-top: 10px;">
                    <li><strong>S:</strong> 기존 GNN의 지역적 메시지 패싱 의존성으로 인한 장거리 의존성 포착 한계 및 정보 소실</li>
                    <li><strong>T:</strong> 그래프의 전역적 문맥과 지역적 패턴을 동적으로 통합하는 가변형 GNN 아키텍처 개발</li>
                    <li><strong>A:</strong> Neural ODE 기반 확산-반응(Diffusion-Reaction) 모델링 및 어텐션 기반 적응형 융합 메커니즘 설계</li>
                    <li><strong>R:</strong> 그래프 분류 및 노드 분류 데이터셋에서 기존 SOTA 모델 대비 성능 최대 11.01%p 향상</li>  
                  </ul>
                  <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    <p class="keyword">Graph Neural Networks</p>
                    <p class="keyword">Neural ODEs</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:20px;width:25%;vertical-align:middle">
                  <img src='/assets/demo.gif' width="160">
                </td>
                <td style="padding:20px;width:75%;vertical-align:middle">
                  <span class="papertitle">Latent Diffusion Models를 이용한 Crowd Counting</span>
                  <br>
                  4인 프로젝트 (2023.03 — 2023.08)
                  <br>
                  <router-link to="/project/crowdcounting">
                    <i style="font-size:1em" class="fa">&#xf0c1;&nbsp;</i>프로젝트 상세
                  </router-link>
                  <ul style="padding-left: 15px; margin-top: 10px;">
                    <li><strong>S:</strong> 기존 군중 수 추정은 고비용의 멀티모달 데이터가 필수적이며 일반화가 어려움</li>
                    <li><strong>T:</strong> 단일 RGB 데이터만으로 고품질 밀도 맵을 생성하고 정확한 인원수를 추정하는 시스템 구축</li>
                    <li><strong>A:</strong> 잠재 확산 모델(LDM) 기반 생성 파이프라인 설계 및 Contour Detection 후처리 프로세스 도입</li>
                    <li><strong>R:</strong> 단일 모달리티만으로 고비용 센서 기반 모델에 준하는 성능 달성 및 범용적 적용 가능성 입증</li>
                  </ul>
                  <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    <p class="keyword">Crowd Counting</p>
                    <p class="keyword">Diffusion Models</p>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>연구 과제</h2>
                  <p>
                    <strong>지속 가능한 협업형 멀티 모달 평생 학습 프레임워크 개발</strong> (2023.12 — 2024.12)
                    <br> IITP 정보통신기획평가원 정보통신방송연구개발사업
                  </p>
                  <p>
                    <strong>그래프 데이터로부터 생활패턴 발견기술 연구</strong> (2023.09 — 2023.11)
                    <br> ETRI 한국전자통신연구원 정보통신방송연구개발사업
                  </p>
                  <p>
                    <strong>상용 자율주행차 주행 데이터</strong> (2022.05)
                    <br> NIA 한국지능정보사회진흥원 인공지능학습용데이터구축사업
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>특허</h2>
                  <p>
                    <strong>교사 모델을 이용한 지식 증류 방법 및 장치 (10-2024-0141487)</strong> (출원, 2024.10.16)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>자격증</h2>
                  <p>
                    <strong>AICE Associate</strong> (2025.10.24)
                  </p>
                  <p>
                    <strong>SQL 개발자 (SQLD)</strong> (2025.12.12)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
            <tbody>
              <tr>
                <td style="padding:20px;width:100%;vertical-align:middle">
                  <h2>수상/경험</h2>
                  <p>
                    <strong>Fundamentals of Accelerated Data Science 교육 수료</strong> (2025.03.26)
                    <br> 엔비디아
                    <br> <a href="https://learn.nvidia.com/certificates?id=VRgJ98nBR4WRJA8krRc2bA">수료증</a>
                    <br> — GPU 기반 Tabular 데이터 EDA 및 ML 교육 이수
                  </p>
                  <p>
                    <strong> 2024 한국데이터마이닝학회 (KDMS) </strong> (2024.11.22 — 2024.11.23)
                    <br> — GNN 논문 포스터 발표
                  </p>
                  <p>
                    <strong> 프로그래밍언어구조론 조교</strong> (2024.09 — 2024.12)
                    <br> — 함수형 언어 패러다임 및 Common LISP 강의
                  </p>
                  <p>
                    <strong>공학교육인증 이수 (ABEEK)</strong> (2018.03 — 2023.08)
                  </p>

                  <p>
                    <strong>성적 우수 장학생</strong> (2022-2학기)
                  </p>
                  <p>
                    <strong>연구프로젝트 성과발표회</strong> (2022.12)
                    <br> — 대상 수상
                  </p>
                  <p>
                    <strong>Future Mobility Urban Challenge</strong> (2022.11)
                    <br> — Camera-LiDAR 딥러닝 기반 실시간 3D 객체 탐지 시스템 개발
                    <br> — 참가상 수상
                  </p>
                  <p>
                    <strong>국제 대학생 창작 자동차 경진대회</strong> (2022.10)
                    <br> 한국자동차안전학회
                    <br> — Camera-LiDAR 딥러닝 기반 실시간 3D 객체 탐지 시스템 개발, RGB & LiDAR 데이터 수집, 전처리 및 학습, ROS 기반 실시간 추론 시스템 개발
                  </p>
                  <p>
                    <strong>연구프로젝트 성과발표회</strong> (2022.01)
                    <br> — 대상 수상
                  </p>
                  <p>
                    <strong>학부연구생 (연구실 인턴)</strong> (2021.12 — 2022.05)
                    <br> 컴퓨터비젼연구실 (지도교수: 김학일 교수님)
                    <br> — 배경 이미지와 희소 클래스의 전경을 Semantic Segmentation을 통해 분리하고 자동으로 합성하여 균형 잡힌 학습 데이터셋을 생성하는 시스템 개발
                  </p>
                  <p>
                    <strong>대한민국 육군</strong> (2020.02 — 2021.08)
                    <br> 병장 만기 전역
                  </p>
                  <p>
                    <strong>성적 우수 장학생</strong> (2018-1학기)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
</script>
