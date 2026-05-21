<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section skills-section" id="habilidades" aria-labelledby="habilidades-title">
    <div class="shell">
      <div class="skills-head">
        <h2 id="habilidades-title">Habilidades</h2>
      </div>

      <div class="skills-panel">
        <div class="skills-grid" aria-label="Habilidades organizadas por categoria">
          <section v-for="category in categories" :key="category.name" class="skill-category">
            <h3 class="skill-name">{{ category.name }}</h3>
            <div class="skill-list" :aria-label="`Habilidades de ${category.name}`">
              <span v-for="skill in category.skills" :key="skill" class="skill-chip">{{ skill }}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
