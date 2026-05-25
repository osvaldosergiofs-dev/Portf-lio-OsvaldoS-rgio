<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="section about-section" id="sobre" aria-labelledby="sobre-title">
    <div class="shell">
      <div class="section-head">
        <div>
          <div class="section-kicker">{{ content.kicker }}</div>
          <h2 class="section-title" id="sobre-title">{{ content.title }}</h2>
        </div>
        <p class="section-intro">{{ content.intro }}</p>
      </div>

      <div class="about-layout">
        <div class="about-copy">
          <p>{{ content.paragraph }}</p>
          <div class="about-points">
            <div v-for="point in content.points" :key="point.id" class="point">
              <strong>{{ point.id }}</strong>
              <span>{{ point.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
