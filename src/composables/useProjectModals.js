import { computed, ref } from 'vue'

export function useProjectModals(projects, extraProjects) {
  const activeProjectId = ref(null)
  const isMoreProjectsOpen = ref(false)
  const activeExtraProjectId = ref(null)
  const toastMessage = ref('')

  const activeProject = computed(() =>
    projects.find((project) => project.id === activeProjectId.value) || null,
  )

  const activeExtraProject = computed(() =>
    extraProjects.find((project) => project.id === activeExtraProjectId.value) || null,
  )

  const openProject = (projectId) => {
    activeProjectId.value = projectId
  }

  const closeProject = () => {
    activeProjectId.value = null
  }

  const openMoreProjects = () => {
    isMoreProjectsOpen.value = true
  }

  const closeMoreProjects = () => {
    isMoreProjectsOpen.value = false
  }

  const openExtraProject = (projectId) => {
    activeExtraProjectId.value = projectId
  }

  const closeExtraProject = () => {
    activeExtraProjectId.value = null
  }

  const showToast = (message) => {
    toastMessage.value = message
    window.setTimeout(() => {
      toastMessage.value = ''
    }, 1800)
  }

  return {
    activeProject,
    activeProjectId,
    isMoreProjectsOpen,
    activeExtraProject,
    activeExtraProjectId,
    toastMessage,
    openProject,
    closeProject,
    openMoreProjects,
    closeMoreProjects,
    openExtraProject,
    closeExtraProject,
    showToast,
  }
}
