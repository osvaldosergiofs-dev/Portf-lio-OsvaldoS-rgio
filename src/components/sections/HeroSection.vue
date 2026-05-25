<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <div class="eyebrow">{{ content.eyebrow }}</div>
        <h1 id="hero-title">
          {{ content.titlePrimary }} <span>{{ content.titleSecondary }}</span>
        </h1>
        <p class="hero-lede">{{ content.lede }}</p>
        <div class="hero-actions">
          <a class="button button-primary" :href="content.ctaPrimary.href">{{ content.ctaPrimary.label }}</a>
          <a class="button" :href="content.ctaSecondary.href">{{ content.ctaSecondary.label }}</a>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Resumo profissional">
        <div v-for="item in content.panel" :key="item.label" class="panel-row">
          <div class="panel-label">{{ item.label }}</div>
          <div class="panel-value">{{ item.value }}</div>
        </div>
        <div class="panel-row status-line">
          <span class="pulse" aria-hidden="true"></span>
          <span>{{ content.availability }}</span>
        </div>
      </aside>
    </div>
    <div class="scroll-cue" aria-hidden="true">Scroll</div>
  </section>
</template>
