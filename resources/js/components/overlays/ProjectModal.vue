<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const modalRef = ref(null)

watch(
  () => props.project,
  (project) => {
    if (project) {
      document.body.classList.add('modal-open')
      requestAnimationFrame(() => modalRef.value?.focus())
    } else {
      document.body.classList.remove('modal-open')
    }
  },
)

const sections = computed(() => {
  if (!props.project?.details) return []

  return [
    { title: 'Sobre o projeto', content: props.project.details.about },
    { title: 'Problemas que resolve', content: props.project.details.problems },
    {
      title: 'Como foi desenvolvido',
      content: props.project.details.development || [],
    },
  ]
})

const isListSection = (content) => Array.isArray(content) && content.every((item) => !item.includes('.') && item.length < 80)
</script>

<template>
  <div v-if="project" class="project-modal is-open" aria-hidden="false">
    <div class="project-modal__overlay" @click="emit('close')"></div>
    <section
      ref="modalRef"
      class="project-modal__panel"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`project-modal-title-${project.id}`"
      tabindex="-1"
    >
      <button class="project-modal__close" type="button" aria-label="Fechar projeto" @click="emit('close')">×</button>

      <div class="project-modal__grid">
        <div class="project-modal__media">
          <video v-if="project.video" controls preload="metadata" playsinline :aria-label="project.videoLabel">
            <source :src="project.video" type="video/mp4" />
          </video>
          <div v-else class="project-video-placeholder">Vídeo indisponível</div>
        </div>

        <div class="project-modal__copy">
          <h2 :id="`project-modal-title-${project.id}`">{{ project.title }}</h2>
          <section v-for="section in sections" :key="section.title" class="project-modal__section">
            <h3>{{ section.title }}</h3>
            <ul v-if="isListSection(section.content)">
              <li v-for="item in section.content" :key="item">{{ item }}</li>
            </ul>
            <template v-else>
              <p v-for="item in section.content" :key="item">{{ item }}</p>
            </template>
          </section>
          <section class="project-modal__section">
            <h3>Também foi desenvolvido</h3>
            <p>Também foi desenvolvido:</p>
            <ul>
              <li v-for="item in project.details.built || []" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section class="project-modal__section">
            <h3>Tecnologias</h3>
            <div class="project-modal__tags">
              <span v-for="tech in project.details.technologies" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
