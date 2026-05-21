<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['open-project', 'open-more-projects'])

const onImageError = (event) => {
  event.target.style.display = 'none'
  const fallback = event.target.nextElementSibling
  if (fallback) fallback.hidden = false
}
</script>

<template>
  <section class="section" id="projetos" aria-labelledby="projetos-title">
    <div class="shell">
      <div class="section-head">
        <div>
          <div class="section-kicker">Projetos selecionados</div>
          <h2 class="section-title" id="projetos-title">TRÊS RECORTES DE PRODUTO.</h2>
        </div>
        <p class="section-intro">
          Projetos reais desenvolvidos com foco em sistemas web modernos, experiência do usuário e aplicações full-stack.
        </p>
      </div>

      <div class="project-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          tabindex="0"
          role="button"
          aria-haspopup="dialog"
          @click="emit('open-project', project.id)"
          @keydown.enter.prevent="emit('open-project', project.id)"
          @keydown.space.prevent="emit('open-project', project.id)"
        >
          <div class="project-visual project-visual--image">
            <div class="project-image-frame">
              <img
                :src="project.image"
                :alt="project.imageAlt"
                loading="lazy"
                decoding="async"
                @error="onImageError"
              />
              <div class="project-image-fallback" hidden aria-hidden="true">Imagem indisponível</div>
            </div>
          </div>
          <div class="project-content">
            <div class="card-kicker">{{ project.kicker }}</div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <div class="project-meta">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="projects-more">
        <button class="more-projects-button" type="button" @click="emit('open-more-projects')">Mais projetos</button>
      </div>
    </div>
  </section>
</template>
