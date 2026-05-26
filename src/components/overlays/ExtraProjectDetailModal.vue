<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])
const modalRef = ref(null)

const resetModalScroll = () => {
  const modal = modalRef.value
  if (!modal) return

  ;[modal, ...modal.querySelectorAll('.project-modal__simple')].forEach((element) => {
    element.scrollTop = 0
    element.scrollLeft = 0
  })
}

watch(
  () => props.project,
  async (project) => {
    if (!project) return

    await nextTick()
    resetModalScroll()
    requestAnimationFrame(() => {
      resetModalScroll()
      modalRef.value?.focus()
    })
  },
)

const sections = computed(() => {
  if (!props.project?.details) return []

  return [
    { title: 'Sobre o projeto', content: props.project.details.about },
    { title: 'Problemas que resolve', content: props.project.details.problems },
    { title: 'Como foi desenvolvido', content: props.project.details.development },
  ]
})

const isListSection = (content) => Array.isArray(content) && content.every((item) => !item.includes('.') && item.length < 80)
</script>

<template>
  <div v-if="project" class="project-modal project-modal--detail is-open" aria-hidden="false">
    <div class="project-modal__overlay" @click="emit('close')"></div>
    <section ref="modalRef" class="project-modal__panel" role="dialog" aria-modal="true" :aria-labelledby="`extra-detail-title-${project.id}`" tabindex="-1">
      <button class="project-modal__close" type="button" aria-label="Fechar detalhe do projeto" @click="emit('close')">×</button>
      <div class="project-modal__simple">
        <h2 :id="`extra-detail-title-${project.id}`">{{ project.title }}</h2>
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
          <ul>
            <li v-for="item in project.details.built || []" :key="item">{{ item }}</li>
          </ul>
        </section>
        <section v-if="project.details.mvp?.length" class="project-modal__section">
          <h3>Funcionalidades do MVP</h3>
          <ul>
            <li v-for="item in project.details.mvp" :key="item">{{ item }}</li>
          </ul>
        </section>
        <section class="project-modal__section">
          <h3>Tecnologias</h3>
          <div class="project-modal__tags">
            <span v-for="tech in project.details.technologies" :key="tech" class="tag">{{ tech }}</span>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
