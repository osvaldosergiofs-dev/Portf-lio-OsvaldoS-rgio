<script setup>
import { nextTick, ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['close', 'open-extra'])
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
  () => props.isOpen,
  async (isOpen) => {
    if (!isOpen) return

    await nextTick()
    resetModalScroll()
    requestAnimationFrame(() => {
      resetModalScroll()
      modalRef.value?.focus()
    })
  },
)
</script>

<template>
  <div v-if="isOpen" class="project-modal project-modal--more is-open" aria-hidden="false">
    <div class="project-modal__overlay" @click="emit('close')"></div>
    <section ref="modalRef" class="project-modal__panel" role="dialog" aria-modal="true" aria-labelledby="more-projects-title" tabindex="-1">
      <button class="project-modal__close" type="button" aria-label="Fechar mais projetos" @click="emit('close')">×</button>
      <div class="project-modal__simple">
        <h2 id="more-projects-title">MAIS PROJETOS</h2>
        <p class="extra-project-note">Outros recortes de produto com foco em sistemas web, automação e interfaces responsivas.</p>
        <ul class="extra-project-list" aria-label="Lista de projetos extras">
          <li v-for="project in projects" :key="project.id">
            <button class="extra-project-item" type="button" @click="emit('open-extra', project.id)">
              <span>{{ project.title }}</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
