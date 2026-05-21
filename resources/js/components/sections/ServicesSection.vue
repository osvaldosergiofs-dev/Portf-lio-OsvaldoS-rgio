<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section" id="servicos" aria-labelledby="servicos-title">
    <div class="shell">
      <div class="section-head">
        <div>
          <div class="section-kicker">Habilidades e Serviços</div>
          <h2 class="section-title" id="servicos-title">DO CÓDIGO AO DEPLOY.</h2>
        </div>
        <p class="section-intro">
          Competências organizadas em áreas reais de desenvolvimento: da criação de interfaces ao back-end, integrações, banco de dados e publicação do projeto.
        </p>
      </div>

      <div class="services-grid">
        <article v-for="(service, index) in services" :key="service.title" class="service">
          <div>
            <div class="service-icon" aria-hidden="true">
              <svg v-if="index === 0" viewBox="0 0 24 24">
                <path d="m8 9-4 3 4 3"></path>
                <path d="m16 9 4 3-4 3"></path>
                <path d="m14 5-4 14"></path>
              </svg>
              <svg v-else-if="index === 1" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="6" rx="1.5"></rect>
                <rect x="4" y="14" width="16" height="6" rx="1.5"></rect>
                <path d="M8 7h.01M8 17h.01M13 7h3M13 17h3"></path>
              </svg>
              <svg v-else-if="index === 2" viewBox="0 0 24 24">
                <path d="m12 3 8 4-8 4-8-4 8-4Z"></path>
                <path d="m4 12 8 4 8-4"></path>
                <path d="m4 17 8 4 8-4"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path d="M12 16V4"></path>
                <path d="m7 9 5-5 5 5"></path>
                <path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></path>
              </svg>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
          <span class="tag">{{ service.tag }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
